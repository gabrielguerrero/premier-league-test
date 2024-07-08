export type Club = {
  label: string;
  logo: string;
}

export type Fixture = {
  id: number;
  home: Club;
  away: Club;
  time: Date;
  location: string;
  referee: string;
}
