export default class Arme {
    private minAtk: number;
    private maxAtk: number;
    private critChance: number;

    constructor() {
        this.minAtk = Math.floor(Math.random() * 10) + 1;
        this.maxAtk = Math.floor(Math.random() * 10) + 11;
        this.critChance = Math.floor(Math.random() * 20) + 1;
    }

    get getMinAtk(): number {
        return this.minAtk;
    }

    set setMinAtk(value: number) {
        this.minAtk = value;
    }

    get getMaxAtk(): number {
        return this.maxAtk;
    }

    set setMaxAtk(value: number) {
        this.maxAtk = value;
    }

    get getCritChance(): number {
        return this.critChance;
    }

    set setCritChance(value: number) {
        this.critChance = value;
    }
}
