import { getUsers, calculateAge, User } from '../src/rxjs';
import { firstValueFrom, of } from 'rxjs';

describe('rxjs.ts', () => {
  const mockUsers: User[] = [
    { id: 1, name: 'Adam', yearOfBirth: 1980 },
    { id: 2, name: 'Brenda', yearOfBirth: 1990 }
  ];

  beforeEach(() => {
    jest.spyOn(require('../src/rxjs'), 'getUsers').mockImplementation(() => of(mockUsers));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = await firstValueFrom(getUsers());
      expect(users).toEqual(mockUsers);
    });
  });

  describe('calculateAge', () => {
    it('should calculate the age of each user', () => {
      const ages = calculateAge(mockUsers);
      expect(ages).toEqual([
        { id: 1, name: 'Adam', yearOfBirth: 1980, age: 44 },
        { id: 2, name: 'Brenda', yearOfBirth: 1990, age: 34 }
      ]);
    });
  });
});

