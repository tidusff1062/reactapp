import Partie from '../classes/Partie';
import Arme from '../classes/Arme';
import Epee from '../classes/Epee';
import Masse from '../classes/Masse';
import Heros from '../classes/Heros';
import Monstre from '../classes/Monstre';
import { HerosModel } from '../models/HerosModel';

export class PartieService {
    // un service métier est stateless
    // on ne retrouve que des attributs pour la configuration de se dernier
    // il ne contient pas d'autres données
    // tu pourrais presques tout mettre en statique dans un service (pourrais presque)
    private _partie: Partie;

    constructor() {
        this._partie = new Partie();
    }

    public get partie(): Partie {
        return this._partie;
    }

    public set partie(value: Partie) {
        this._partie = value;
    }

    //créer et ajouter un héros à l'équipe
    public creerHero(hero: { nom: string; classe: string; arme: string }) {
        const arme: Arme = this.SelectArme(hero.arme);
        const h: Heros = new Heros(hero.nom, hero.classe, arme);
        const h2: HerosModel = new HerosModel();
        h2.nom = hero.nom;
        h2.classe = hero.classe;
        h2.arme = hero.arme;
        h2.maxHP = h.getMaxHp;
        this._partie.getEquipe.push(h2);
        this._partie.getHeros.push(h);
    }

    //definir l'arme du héros
    private SelectArme(armeN: string): Arme {
        let arme: Arme = new Arme();

        if (armeN === 'Epée') {
            arme = new Epee();
        } else if (armeN === 'Masse') {
            arme = new Masse();
        }

        return arme;
    }

    //générer l'équipe de monstres en fonction de la taille de l'équipe de héros
    public genererMonstres(): void {
        for (let i: number = 0; i < this._partie.getEquipe.length * 2; i++) {
            const m: Monstre = new Monstre();
            m.setHp = m.getMaxHp;
            this._partie.getMonstres.push(m);
        }
    }
}
