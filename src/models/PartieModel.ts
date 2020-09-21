import { HerosModel } from './HerosModel';
import Personnage from '../classes/Personnage';

export class PartieModel {
    public nom = '';
    public equipe: HerosModel[] = [];
    public monstres: Personnage[] = [];
    public heros: Personnage[] = [];
}
