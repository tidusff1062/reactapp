import firebase from 'firebase';
import Partie from '../classes/Partie';
import { BehaviorSubject } from 'rxjs';
import { PartieModel } from '../models/PartieModel';

export class FireService {
    private partieBe = new BehaviorSubject<any>(null);
    public partieOb = this.partieBe.asObservable();

    public static addPartie(partie: Partie) {
        let pm = new PartieModel();
        pm.equipe = partie.getEquipe;
        pm.heros = partie.getHeros;
        pm.monstres = partie.getMonstres;
        pm.nom = partie.getNom;
        firebase
            .database()
            .ref(`/${pm.nom}`)
            .set(pm);
    }

    public getPartie(nom: string) {
        let partie = new Partie();
        firebase
            .database()
            .ref(`/${nom}`)
            .once('value')
            .then(resp => {
                partie = resp.val();
                if (partie) {
                    this.partieBe.next(partie);
                }
            });
    }

    public static updatePartie(partie: Partie) {
        let pm = new PartieModel();
        pm.equipe = partie.getEquipe;
        pm.heros = partie.getHeros;
        pm.monstres = partie.getMonstres;
        pm.nom = partie.getNom;
        firebase
            .database()
            .ref(`/${pm.nom}`)
            .set(pm);
    }

    public static deletePartie(nom: string) {
        firebase
            .database()
            .ref(`/${nom}`)
            .remove();
    }
}
