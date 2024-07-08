import { Fixture } from "../types";
import {
  AlwaysWinners, Amey, AquaVerde,
  Beanford,
  Deneve,
  Fremont,
  Gulfport,
  Hauck,
  Jacq,
  MarchenaDrive,
  PruneTree,
  Utica
} from "./clubs";

export const FixtureData: Fixture[] = [
  {
    id: 1,
    home: Hauck,
    away: Deneve,
    time: new Date("2023-04-24T12:00:00+00:00"),
    referee: "Kendra Federgreen",
    location: "Augusta-Richmond Stadium"
  },
  {
    id: 2,
    home: AquaVerde,
    away: Amey,
    time: new Date("2023-04-13T15:00:00+00:00"),
    referee: "Steven Seagull",
    location: "Hampton Towers"
  },
  {
    id: 3,
    home: PruneTree,
    away: Utica,
    time: new Date("2023-04-13T15:00:00+00:00"),
    referee: "Paige Effland",
    location: "Davie Drive",
  },
  {
    id: 4,
    home: Fremont,
    away: AlwaysWinners,
    time: new Date("2023-04-13T15:00:00+00:00"),
    referee: "Mustafa Tomb",
    location: "Frederick Park"
  },
  {
    id: 5,
    home: Beanford,
    away: Jacq,
    time: new Date("2023-04-13T15:00:00+00:00"),
    referee: "Saul Gulinson",
    location: "Mark Street"
  },
  {
    id: 6,
    home: MarchenaDrive,
    away: Gulfport,
    time: new Date("2023-04-04T20:00:00+00:00"),
    referee: "Trinity Vasta",
    location: "Stadium of George"
  }
];