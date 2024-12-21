import { Observable } from 'rxjs';
import { User, users, getUsers, calculateAge, main } from '../src/rxjs';

describe('rxjs', () => {
    describe('getUsers', () => {
        it('should return an observable of users', (done) => {
            getUsers().subscribe((result) => {
                expect(result).toEqual(users);
                done();
            });
        });
    });

    describe('calculateAge', () => {
        it('should calculate age for all users', () => {
            const currentYear = new Date().getFullYear();
            const result = calculateAge(users);
            
            result.forEach((user: User) => {
                expect(user).toHaveProperty('age');
                expect(user.age).toBe(currentYear - user.yearOfBirth);
            });
        });
    });

    describe('main', () => {
        it('should process users observable correctly', (done) => {
            const currentYear = new Date().getFullYear();
            const users$ = getUsers();

            main(users$).subscribe((result) => {
                expect(result.length).toBe(users.length);
                result.forEach(user => {
                    expect(user).toHaveProperty('age');
                    expect(user.age).toBe(currentYear - user.yearOfBirth);
                });
                done();
            });
        });

        it('should filter out empty user arrays', (done) => {
            const emptyUsers$ = new Observable<User[]>(subscriber => {
                subscriber.next([]);
                subscriber.complete();
            });

            main(emptyUsers$).subscribe((result) => {
                // Should not reach here
                expect(true).toBe(false);
                done();
            }, null, () => {
                // Should complete without emitting
                done();
            });
        });
    });
});

