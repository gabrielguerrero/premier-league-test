import {
  patchState,
  signalStore,
  type,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import {
  entityConfig,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { FixtureWithPrediction, Prediction } from './model';
import { inject } from '@angular/core';
import { FixtureService } from './fixture.service';
import {
  withCalls,
  withCallStatus,
  withEntitiesLoadingCall,
  withEntitiesSingleSelection,
  withStateLogger,
  withSyncToWebStorage,
} from '@ngrx-traits/signals';

const config = entityConfig({
  entity: type<FixtureWithPrediction>(),
  collection: 'fixtures',
});
export const FixturesStore = signalStore(
  withEntities(config),
  withCallStatus({ ...config, initialValue: 'loading' }),
  withEntitiesSingleSelection(config),
  withEntitiesLoadingCall({
    ...config,
    fetchEntities: () => inject(FixtureService).getFixtures(),
  }),
  withCalls(({ fixturesEntitySelected }) => ({
    loadFixtureDetail: ({ id }: { id: number }) =>
      inject(FixtureService).getFixture(id),
  })),
  // withStateLogger({ name: 'FixturesStore' }),
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
  // withSyncToWebStorage({ key: 'FixturesStore', type: 'local' }),
);

// export const FixturesStore = signalStore(
//   withState<{
//     status: 'loading' | 'loaded' | 'error';
//     selectedFixtureId: number | undefined;
//   }>({
//     status: 'loading',
//     selectedFixtureId: undefined,
//   }),
//   withEntities({ entity: type<FixtureWithPrediction>() }),
//   withComputed(({ entityMap, selectedFixtureId }) => ({
//     selectedFixture: computed(() =>
//       selectedFixtureId() ? entityMap()[selectedFixtureId()!] : undefined,
//     ),
//   })),
//   withMethods((state) => {
//     const fixtureService = inject(FixtureService);
//     return {
//       loadFixtures: rxMethod<void>(
//         pipe(
//           tap(() => {
//             patchState(state, { status: 'loading' });
//           }),
//           exhaustMap(() => fixtureService.getFixtures().pipe()),
//         ),
//       ),
//       getFixtureDetail: rxMethod<{ id: number }>(
//         pipe(exhaustMap(({ id }) => fixtureService.getFixture(id))),
//       ),
//       predict: ({ id, prediction }: { id: number; prediction: Prediction }) => {
//         patchState(state, updateEntity({ id, changes: { prediction } }));
//       },
//       selectFixture: ({ id }: { id: number }) => {
//         patchState(state, { selectedFixtureId: id });
//       },
//     };
//   }),
// );
