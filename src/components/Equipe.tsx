import React, { Component } from 'react';
import { HerosModel } from '../models/HerosModel';
import { ListItem, ListItemText, List } from '@material-ui/core';

interface EquipeProps {
    heros: HerosModel[];
}

/**
 * Doc
 */
class Equipe extends Component<EquipeProps> {
    render() {
        let count = 1;
        const equipe: any = this.props.heros.map((hero: HerosModel) => (
            <ListItem key={count++}>
                <ListItemText primary='Nom' secondary={hero.nom} />
                <ListItemText primary='Classe' secondary={hero.classe} />
                <ListItemText primary='Arme' secondary={hero.arme} />
                <ListItemText primary='Points de vie' secondary={hero.maxHP} />
            </ListItem>
        ));
        return (
            <div>
                <h3>Liste de Héros :</h3>
                <List>{equipe}</List>
            </div>
        );
    }
}
export default Equipe;
