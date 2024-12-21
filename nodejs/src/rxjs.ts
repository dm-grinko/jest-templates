import { Observable, of, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface User {
    id: number;
    name: string;
    yearOfBirth: number;
    age?: number;
}

export const users: User[] = [
    { id: 1, name: 'John', yearOfBirth: 1980 },
    { id: 2, name: 'Jane', yearOfBirth: 1985 },
    { id: 3, name: 'Jim', yearOfBirth: 1990 },
]

export const getUsers = (): Observable<User[]> => {
    return of(users);
};

export const calculateAge = (users: User[]): User[] => {
    return users.map((user) => ({
        ...user,
        age: new Date().getFullYear() - user.yearOfBirth,
    }));
};

export const main = (users$: Observable<User[]>): Observable<User[]> => {
    return users$.pipe(
        filter((users: User[]) => users.length > 0),
        map((users: User[]) => calculateAge(users))
    )
};

const users$ = getUsers();

main(users$).subscribe((newUsers: User[]) => {
    // console.log(newUsers);
});

