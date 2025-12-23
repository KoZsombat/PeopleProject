import { Person } from "./Person";

export class PersonStatistics {
    private people: Person[];

    constructor(people: Person[]) {
        this.people = people;
    }

    setPeople(people: Person[]): void {
        this.people = people;
    }

    getAverageAge(): number {
        if (this.people.length === 0) return 0;
        const totalAge = this.people.reduce((sum, person) => sum + person.age, 0);
        return totalAge / this.people.length;
    }

    getNumberOfStudents(): number {
        return this.people.filter(person => person.isStudent).length;
    }

    getPersonWithHighestScore(): Person {
        if (this.people.length === 0) throw new Error("No people available");
        return this.people.reduce((highest, person) => 
            person.score > highest.score ? person : highest
        );
    }

    getAverageScoreofStudents(): number {
        const students = this.people.filter(person => person.isStudent);
        if (students.length === 0) return 0;
        const totalScore = students.reduce((sum, student) => sum + student.score, 0);
        return totalScore / students.length;
    }

    getOldestStudent(): Person {
        const students = this.people.filter(person => person.isStudent);
        if (students.length === 0) throw new Error("No students available");
        return students.reduce((oldest, student) => 
            student.age > oldest.age ? student : oldest
        );
    }

    isAnyoneFailing(): boolean {
        return this.people.some(person => person.score < 40);
    }
}