import { of } from 'rxjs';

const baseUrl = 'http://localhost:3000';

const fixtures = [
  {
    id: 1,
    home: {
      label: 'Hauk FC',
      logo: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_3059.jpg',
    },
    away: {
      label: 'Deneve City',
      logo: 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
    },
    time: '2023-04-24T12:00:00.000Z',
    referee: 'Kendra Federgreen',
    location: 'Augusta-Richmond Stadium',
  },
  {
    id: 2,
    home: {
      label: 'Aqua Verde Town',
      logo: 'https://images.dog.ceo/breeds/basenji/n02110806_4331.jpg',
    },
    away: {
      label: 'Amey FC',
      logo: 'https://images.dog.ceo/breeds/bouvier/n02106382_709.jpg',
    },
    time: '2023-04-13T15:00:00.000Z',
    referee: 'Steven Seagull',
    location: 'Hampton Towers',
  },
  {
    id: 3,
    home: {
      label: 'Prune Tree United',
      logo: 'https://images.dog.ceo/breeds/clumber/n02101556_984.jpg',
    },
    away: {
      label: 'Utica Town',
      logo: 'https://images.dog.ceo/breeds/collie-border/n02106166_2072.jpg',
    },
    time: '2023-04-13T15:00:00.000Z',
    referee: 'Paige Effland',
    location: 'Davie Drive',
  },
  {
    id: 4,
    home: {
      label: 'Fremont Village AFC',
      logo: 'https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg',
    },
    away: {
      label: 'Always Winners',
      logo: 'https://images.dog.ceo/breeds/dingo/n02115641_2764.jpg',
    },
    time: '2023-04-13T15:00:00.000Z',
    referee: 'Mustafa Tomb',
    location: 'Frederick Park',
  },
  {
    id: 5,
    home: {
      label: 'Beanford Town',
      logo: 'https://images.dog.ceo/breeds/kelpie/n02105412_3065.jpg',
    },
    away: {
      label: 'Jacq FC',
      logo: 'https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg',
    },
    time: '2023-04-13T15:00:00.000Z',
    referee: 'Saul Gulinson',
    location: 'Mark Street',
  },
  {
    id: 6,
    home: {
      label: 'Marchena United',
      logo: 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_3235.jpg',
    },
    away: {
      label: 'Gulfport',
      logo: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
    },
    time: '2023-04-04T20:00:00.000Z',
    referee: 'Trinity Vasta',
    location: 'Stadium of George',
  },
];

export class FixtureServiceMock {
  getFixtures() {
    return of(fixtures);
  }

  getFixture(id: number) {
    return of(fixtures.find((fixture) => fixture.id === id));
  }
}
