import Combat from '../classes/Combat';
import Partie from '../classes/Partie';

export class CombatService {
    private _combat: Combat;

    constructor() {
        this._combat = new Combat();
    }

    getTourI(): string[] {
        return this._combat.getTourI;
    }

    tour(p: Partie): Partie {
        return this._combat.Combattre(p);
    }
}
