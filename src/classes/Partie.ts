import Personnage from './Personnage';
import { HerosModel } from '../models/HerosModel';

export default class Partie {
    private nom: string;
    private equipe: HerosModel[];
    private monstres: Personnage[];
    private heros: Personnage[];

    constructor() {
        this.nom = '';
        this.equipe = [];
        this.monstres = [];
        this.heros = [];
    }

    public get getNom(): string {
        return this.nom;
    }

    public set setNom(value: string) {
        this.nom = value;
    }

    public get getEquipe(): HerosModel[] {
        return this.equipe;
    }

    public set setEquipe(value: HerosModel[]) {
        this.equipe = value;
    }

    public get getMonstres(): Personnage[] {
        return this.monstres;
    }

    public set setMonstres(value: Personnage[]) {
        this.monstres = value;
    }

    public get getHeros(): Personnage[] {
        return this.heros;
    }

    public set setHeros(value: Personnage[]) {
        this.heros = value;
    }
}
