import { describe, it, expect } from 'vitest';
import { Person } from './Person';
import { PersonStatistics } from './PersonStatistics';

describe('PersonStatistics', () => {
    const testPeople: Person[] = [
        { id: 1, name: 'Anna', age: 20, isStudent: true, score: 85 },
        { id: 2, name: 'Béla', age: 25, isStudent: false, score: 70 },
        { id: 3, name: 'Cecil', age: 22, isStudent: true, score: 35 },
        { id: 4, name: 'Dóra', age: 30, isStudent: true, score: 90 },
        { id: 5, name: 'Erik', age: 28, isStudent: false, score: 65 }
    ];

    it('setPeople() - beállítja a people listát', () => {
        const stats = new PersonStatistics([]);
        expect(stats.getNumberOfStudents()).toBe(0);
        
        stats.setPeople(testPeople);
        expect(stats.getNumberOfStudents()).toBe(3);
    });

    it('getAverageAge() - visszaadja az összes személy átlagéletkorát', () => {
        const stats = new PersonStatistics(testPeople);
        expect(stats.getAverageAge()).toBe(25);
    });

    it('getNumberOfStudents() - visszaadja a tanulók számát', () => {
        const stats = new PersonStatistics(testPeople);
        expect(stats.getNumberOfStudents()).toBe(3);
    });

    it('getPersonWithHighestScore() - visszaadja a legmagasabb pontszámú személyt', () => {
        const stats = new PersonStatistics(testPeople);
        const result = stats.getPersonWithHighestScore();
        expect(result.name).toBe('Dóra');
        expect(result.score).toBe(90);
    });

    it('getAverageScoreofStudents() - visszaadja a tanulók átlagpontszámát', () => {
        const stats = new PersonStatistics(testPeople);
        expect(stats.getAverageScoreofStudents()).toBe(70);
    });

    it('getOldestStudent() - visszaadja a legidősebb tanulót', () => {
        const stats = new PersonStatistics(testPeople);
        const result = stats.getOldestStudent();
        expect(result.name).toBe('Dóra');
        expect(result.age).toBe(30);
    });

    it('isAnyoneFailing() - visszaadja, hogy van-e valaki aki megbukott (kevesebb mint 40 pont)', () => {
        const stats = new PersonStatistics(testPeople);
        expect(stats.isAnyoneFailing()).toBe(true);
    });
});
