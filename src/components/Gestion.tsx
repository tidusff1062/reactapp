import React, { Component } from 'react';
import Equipe from './Equipe';
import { PartieService } from '../services/PartieService';
import Formulaire from './Formulaire';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import { FireService } from '../services/FireService';

class Gestion extends Component {
    private partieService: PartieService;
    constructor(props: any) {
        super(props);
        this.partieService = new PartieService();
    }
    state = {
        nomPartie: '',
        partie: {},
        update: false,
        redirect: false
    };

    choixNomPartie = (event: any) => {
        const nomPartie = event.target.value;
        this.setState({ nomPartie });
    };

    addHero = (hero: any) => {
        this.partieService.creerHero(hero);
        this.setState({ update: true });
    };

    combat = () => {
        if (this.partieService.partie.getEquipe.length < 4) {
            alert('Veuillez créer au moins quatres héros.');
        } else if (this.state.nomPartie === '') {
            alert('Veuillez nommer votre partie.');
        } else {
            this.partieService.genererMonstres();
            this.partieService.partie.setNom = this.state.nomPartie;
            FireService.addPartie(this.partieService.partie);
            this.setState({
                redirect: true,
                partie: this.partieService.partie
            });
        }
    };

    render() {
        let redirection;
        if (this.state.redirect) {
            redirection = (
                <Redirect
                    to={{
                        pathname: '/jeu',
                        state: this.state.nomPartie
                    }}
                />
            );
        }

        return (
            <div>
                <TextField
                    label='Nommez votre partie :'
                    onChange={this.choixNomPartie}
                    value={this.state.nomPartie}
                    required
                />
                <br />
                <Formulaire addHero={this.addHero} />
                <Equipe heros={this.partieService.partie.getEquipe} />
                {redirection}
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.combat}
                >
                    Combat !
                </Button>
            </div>
        );
    }
}

export default Gestion;
