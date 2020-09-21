import Personnage from './Personnage';
import Arme from './Arme';

export default class Heros extends Personnage {
    private classe?: string;

    constructor(nom?: string, classe?: string, arme?: Arme) {
        super();
        this.setNom = nom;
        this.setArme = arme;
        this.classe = classe;
        this.DefClasse(classe);
    }

    get getClasse(): any {
        return this.classe;
    }

    set setClasse(value: any) {
        this.classe = value;
    }

    public DefClasse(classe?: string): void {
        if (classe === 'Guerrier') {
            this.getArme.setMinAtk = Math.floor(this.getArme.getMinAtk * 0.75);
            this.getArme.setMaxAtk = Math.floor(this.getArme.getMaxAtk * 0.75);
            this.setDef = this.getDef + 30;
            this.setMaxHp = this.getMaxHp * 2;
            this.setHp = this.getMaxHp;
        } else if (classe === 'Assassin') {
            this.getArme.setMinAtk = Math.floor(this.getArme.getMinAtk * 1.5);
            this.getArme.setMaxAtk = Math.floor(this.getArme.getMaxAtk * 1.5);
            this.setMaxHp = Math.floor(this.getMaxHp * 0.75);
            this.setHp = this.getMaxHp;
        } else if (classe === 'Soigneur') {
            this.getArme.setMinAtk = Math.floor(this.getArme.getMinAtk * 0.75);
            this.getArme.setMaxAtk = Math.floor(this.getArme.getMaxAtk * 0.75);
            this.setDef = Math.floor(this.getDef * 0.75);
            this.setHp = this.getMaxHp;
        } else {
            this.setHp = this.getMaxHp;
        }
    }

    public Heal(herosList: Personnage[]): string {
        let healed: Heros = herosList.sort(heros => heros.getHp)[0] as Heros;

        healed.setHp = healed.getHp + 100;

        if (healed.getHp > healed.getMaxHp) {
            healed.setHp = healed.getMaxHp;
        }

        return healed.getNom;
    }
}
