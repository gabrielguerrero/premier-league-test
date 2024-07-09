import { FixturesFeatureComponent } from './fixtures-feature.component';
import { FixtureService } from './fixture.service';
import { FixtureServiceMock } from './fixture.service.mock';
import { fireEvent, render, screen } from '@testing-library/angular';

describe('', () => {
  async function init() {
    await render(FixturesFeatureComponent, {
      providers: [{ provide: FixtureService, useClass: FixtureServiceMock }],
    });
  }
  it('should render fixtures', async () => {
    await init();
    const fixtures = await screen
      .findAllByRole('option')
      .then((list) => list.map((e) => e.textContent));
    expect(fixtures).toEqual([
      'Hauk FCvsDeneve CityPredicted:?',
      'Aqua Verde TownvsAmey FCPredicted:?',
      'Prune Tree UnitedvsUtica TownPredicted:?',
      'Fremont Village AFCvsAlways WinnersPredicted:?',
      'Beanford TownvsJacq FCPredicted:?',
      'Marchena UnitedvsGulfportPredicted:?',
    ]);
  });

  it('should select fixtures', async () => {
    await init();
    const fixtures = await screen.findAllByRole('option');
    fireEvent.click(fixtures[1]);
    const selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:?',
    );
  });

  it('should select a prediction home', async () => {
    await init();
    const fixtures = await screen.findAllByRole('option');
    fireEvent.click(fixtures[1]);
    let selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:?',
    );
    const predictions = await screen.findAllByRole('button');
    fireEvent.click(predictions[0]);
    selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:Aqua Verde Town',
    );
  });

  it('should select a prediction draw', async () => {
    await init();
    const fixtures = await screen.findAllByRole('option');
    fireEvent.click(fixtures[1]);
    let selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:?',
    );
    const predictions = await screen.findAllByRole('button');
    fireEvent.click(predictions[1]);
    selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:Draw',
    );
  });

  it('should select a prediction draw', async () => {
    await init();
    const fixtures = await screen.findAllByRole('option');
    fireEvent.click(fixtures[1]);
    let selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:?',
    );
    const predictions = await screen.findAllByRole('button');
    fireEvent.click(predictions[2]);
    selectedFixture = await screen.findByRole('option', {
      selected: true,
    });
    expect(selectedFixture.textContent).toBe(
      'Aqua Verde TownvsAmey FCPredicted:Amey FC',
    );
  });
});
