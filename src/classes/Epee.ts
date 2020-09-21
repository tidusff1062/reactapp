import Arme from './Arme';

export default class Epee extends Arme {
    constructor() {
        super();
        this.setCritChance = this.getCritChance * 2;
    }
}
