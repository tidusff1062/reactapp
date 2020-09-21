import Partie from './Partie';
import Personnage from './Personnage';

export default class Combat {
    private tourN: number = 1;
    private tourI: string[] = [];

    get getTourN(): number {
        return this.tourN;
    }

    set setTourN(value: number) {
        this.tourN = value;
    }

    get getTourI(): string[] {
        return this.tourI;
    }

    set setTourI(value: string[]) {
        this.tourI = value;
    }

    public Combattre(p: Partie): Partie {
        let tour: string[] = [];
        if (p.getHeros.length > 0 && p.getMonstres.length > 0) {
            tour.push(`Tour ${this.tourN}:`);

            let r: number = Math.random() * 100;

            if (r <= 50) {
                p.getHeros.forEach((heros: Personnage) => {
                    if (p.getMonstres.length > 0) {
                        this.ramasserLesMorts(p);
                        heros.cibler(p.getMonstres);
                        let s: string = heros.Atk(p.getMonstres);
                        tour.push(s);
                    }
                });

                p.getMonstres.forEach((monstre: Personnage) => {
                    if (p.getHeros.length > 0) {
                        this.ramasserLesMorts(p);
                        monstre.cibler(p.getHeros);
                        let s: string = monstre.Atk(p.getHeros);
                        tour.push(s);
                    }
                });
            } else {
                p.getMonstres.forEach((monstre: Personnage) => {
                    if (p.getHeros.length > 0) {
                        this.ramasserLesMorts(p);
                        monstre.cibler(p.getHeros);
                        let s: string = monstre.Atk(p.getHeros);
                        tour.push(s);
                    }
                });

                p.getHeros.forEach((heros: Personnage) => {
                    if (p.getMonstres.length > 0) {
                        this.ramasserLesMorts(p);
                        heros.cibler(p.getMonstres);
                        let s: string = heros.Atk(p.getMonstres);
                        tour.push(s);
                    }
                });
            }

            this.tourN++;
            this.tourI = tour;
        }
        return p;
    }

    ramasserLesMorts(p: Partie) {
        for (let i = 0; i < p.getHeros.length; i++) {
            if (p.getHeros[i].getHp <= 0) {
                p.getHeros.splice(i, 1);
            }
        }

        for (let i = 0; i < p.getMonstres.length; i++) {
            if (p.getMonstres[i].getHp <= 0) {
                p.getMonstres.splice(i, 1);
            }
        }
    }
}
