export type Club = {
  label: string;
  logo: string;
};

export type Fixture = {
  id: number;
  home: Club;
  away: Club;
  time: string;
  location: string;
  referee: string;
};

export type Prediction = 'home' | 'away' | 'draw';
export type FixtureWithPrediction = Fixture & {
  prediction?: Prediction;
};
