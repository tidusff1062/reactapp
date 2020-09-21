import Personnage from './Personnage';
import Arme from './Arme';

export default class Monstre extends Personnage {
    constructor() {
        super();
        this.setNom = this.RandomName();
        this.setArme = new Arme();
    }

    public RandomName(): string {
        let name: string = '';

        const letters: string = 'abcdefghijklmnopqrstuvwxyzéèëêîïù';
        const nameLength: number = Math.floor(Math.random() * 6 + 5);

        for (let i: number = 0; i <= nameLength; i++) {
            if (i === 0) {
                name += letters[
                    Math.floor(Math.random() * letters.length)
                ].toUpperCase();
            } else {
                name += letters[Math.floor(Math.random() * letters.length)];
            }
        }

        return name;
    }
}
