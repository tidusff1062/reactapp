import Arme from './Arme';

export default class Masse extends Arme {
    constructor() {
        super();
        this.setMaxAtk = Math.floor(this.getMaxAtk * 1.5);
    }
}
