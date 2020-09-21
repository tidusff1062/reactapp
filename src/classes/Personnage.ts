import Heros from './Heros';

export default class Personnage {
    private nom?: string = '';
    private arme: any = null;
    private maxHP: number;
    private hp: number = 0;
    private def: number;
    private opponent: any = null;
    private attacker: any = null;

    constructor() {
        this.maxHP = Math.floor(Math.random() * 100) + 101;
        this.def = Math.floor(Math.random() * 20) + 1;
    }

    get getNom(): any {
        return this.nom;
    }

    set setNom(value: any) {
        this.nom = value;
    }

    get getArme(): any {
        return this.arme;
    }

    set setArme(value: any) {
        this.arme = value;
    }

    get getMaxHp(): number {
        return this.maxHP;
    }

    set setMaxHp(value: number) {
        this.maxHP = value;
    }

    get getDef(): number {
        return this.def;
    }

    set setDef(value: number) {
        this.def = value;
    }

    get getOpponent(): any {
        return this.opponent;
    }

    set setOppenent(value: any) {
        this.opponent = value;
    }

    get getAttacker(): any {
        return this.attacker;
    }

    set setAttacker(value: any) {
        this.attacker = value;
    }

    get getHp(): number {
        return this.hp;
    }

    set setHp(value: number) {
        this.hp = value;
    }

    Atk(herosList: Personnage[]): string {
        let s: string = '';
        let s2: string = '';
        if (this.getOpponent !== null) {
            const rand: number = Math.floor(Math.random() * 100);
            let randDmg =
                Math.floor(Math.random() * this.getArme.getMaxAtk) +
                this.getArme.getMinAtk;

            if (rand > 70) {
                let h: Heros = this.getOpponent as Heros;
                if (h.getClasse === 'Guerrier') {
                    randDmg = Math.floor(randDmg * 0.25);
                    s += `${h.getNom} bloque les dégats.`;
                } else if (h.getClasse === 'Assassin') {
                    randDmg = 0;
                    s += `${h.getNom} esquive les dégats.`;
                } else if (h.getClasse === 'Soigneur') {
                    h.Heal(herosList);
                    s += `${h.getNom} soigne ${h.Heal(herosList)}.`;
                }
            }

            if (rand < 30) {
                randDmg *= 2;
            }

            if (this.getOpponent.getDef > rand) {
                let coeff: number = Math.floor(
                    (this.getOpponent.getDef - rand) / 100
                );
                randDmg -= randDmg * coeff;
            }

            this.getOpponent.setAttacker = this;

            this.getOpponent.setHp = this.getOpponent.getHp - randDmg;

            if (this.getOpponent.getHp > 0) {
                s2 += `${this.getNom} attaque ${
                    this.getOpponent.getNom
                } et fait ${randDmg} dégats. ${s} Il reste ${
                    this.getOpponent.getHp
                }PV à ${this.getOpponent.getNom}.`;
            } else {
                s2 += `${this.getNom} attaque ${
                    this.getOpponent.getNom
                } et le tue.`;
            }
        }

        return s2;
    }

    cibler(opponents: Personnage[]): void {
        const r: number = Math.floor(Math.random() * opponents.length);
        if (opponents.length > 0 && this.getHp > 0) {
            this.opponent = opponents[r];
        } else {
            this.opponent = null;
        }
    }
}
