import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  entityConfig,
  setAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { FixtureWithPrediction, Prediction } from './model';
import { computed, inject } from '@angular/core';
import { FixtureService } from './fixture.service';
import {
  withCalls,
  withCallStatus,
  withEntitiesLoadingCall,
  withEntitiesSingleSelection,
} from '@ngrx-traits/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, pipe, tap, catchError, of } from 'rxjs';

const config = entityConfig({
  entity: type<FixtureWithPrediction>(),
  collection: 'fixtures',
});

export const FixturesStore = signalStore(
  { providedIn: 'root' },
  withEntities(config),
  // 👇 adds fixturesStatus to the store, and computed signals like isFixturesLoaded, isFixturesError, isFixturesLoading
  //  and methods setFixturesLoaded, setFixturesError, setFixturesLoading
  withCallStatus({ ...config, initialValue: 'loading' }),
  // 👇 adds fixturesEntitySelectedId,  fixturesEntitySelected and methods selectFixturesEntity, deselectFixturesEntity
  withEntitiesSingleSelection(config),
  // 👇 this will fetchEntities when  the fixturesStatus is in loading, and store the results, change status and handle errors
  withEntitiesLoadingCall({
    ...config,
    fetchEntities: () => inject(FixtureService).getFixtures(),
  }),
  withMethods(
    ({
      fixturesEntitySelected,
      fixturesIdSelected,
      fixturesEntityMap,
      ...state
    }) => {
      return {
        predict: (prediction: Prediction) => {
          const fixture = fixturesEntitySelected();

          fixture &&
            patchState(
              state,
              updateEntity({ id: fixture.id, changes: { prediction } }, config),
            );
        },
      };
    },
  ),
);

/**
 * The code bellow is a version of FixturesStore but without the use of the @ngrx-traits/signals is just pure @ngrx/signals
 * in case you want to see the difference between the two and in case you dont understand the code above, both work the same, all test pass with both
 */

// export const FixturesStore = signalStore(
//   { providedIn: 'root' },
//   withState<{
//     status: 'loading' | 'loaded' | 'error';
//     selectedFixtureId: number | undefined;
//   }>({
//     status: 'loading',
//     selectedFixtureId: undefined,
//   }),
//   withEntities(config),
//   withComputed(({ fixturesEntityMap, selectedFixtureId, status }) => ({
//     fixturesEntitySelected: computed(() =>
//       selectedFixtureId()
//         ? fixturesEntityMap()[selectedFixtureId()!]
//         : undefined,
//     ),
//     isFixturesLoaded: computed(() => status() === 'loaded'),
//     isFixturesError: computed(() => status() === 'loading'),
//     isFixturesLoading: computed(() => status() === 'error'),
//   })),
//   withMethods(({ fixturesEntitySelected, ...state }) => {
//     const fixtureService = inject(FixtureService);
//     return {
//       loadFixtures: rxMethod<void>(
//         pipe(
//           tap(() => {
//             patchState(state, { status: 'loading' });
//           }),
//           exhaustMap(() =>
//             fixtureService.getFixtures().pipe(
//               tap((results) =>
//                 patchState(state, setAllEntities(results, config), {
//                   status: 'loaded',
//                 }),
//               ),
//               catchError(() => {
//                 patchState(state, { status: 'error' });
//                 return of();
//               }),
//             ),
//           ),
//         ),
//       ),
//       predict: (prediction: Prediction) => {
//         const fixture = fixturesEntitySelected();
//
//         fixture &&
//           patchState(
//             state,
//             updateEntity({ id: fixture.id, changes: { prediction } }, config),
//           );
//       },
//       selectFixturesEntity: ({ id }: { id: number }) => {
//         patchState(state, { selectedFixtureId: id });
//       },
//       deselectFixturesEntity: () => {
//         patchState(state, { selectedFixtureId: undefined });
//       },
//     };
//   }),
//   withHooks(({ loadFixtures }) => {
//     return {
//       onInit: () => {
//         loadFixtures();
//       },
//     };
//   }),
// );
