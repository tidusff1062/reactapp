import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CombatService } from '../services/CombatService';
import { FireService } from '../services/FireService';
import Partie from '../classes/Partie';
import Personnage from '../classes/Personnage';
import Heros from '../classes/Heros';
import Monstre from '../classes/Monstre';
import Arme from '../classes/Arme';
import { Redirect } from 'react-router';

interface JeuProps {
    location: { state: '' };
}
/**
 * Doc
 */
export default class Combat extends Component<JeuProps> {
    private combatService: CombatService;
    private fireService = new FireService();
    private partie = new Partie();
    private truc = this.fireService.partieOb.subscribe();
    private continue = true;

    constructor(props: any) {
        super(props);
        this.combatService = new CombatService();
    }

    state = {
        tours: [['Que le combat commence !!!']],
        partie: { equipe: [], heros: [], monstres: [], nom: '' }
    };

    async query() {
        if (this.props.location.state !== '') {
            let url: string = this.props.location.state;
            this.fireService.getPartie(url);
            this.fireService.partieOb.subscribe((partie: Partie) => {
                this.setState({ partie });
            });
        }
    }

    convertState(): void {
        let partie = new Partie();

        let herosList: Personnage[] = [];
        this.state.partie.heros.forEach((heros: Personnage) => {
            heros = Object.assign(new Heros(), heros);
            heros.setArme = Object.assign(new Arme(), heros.getArme);
            herosList.push(heros);
        });
        partie.setHeros = herosList;

        let monstresList: Personnage[] = [];
        this.state.partie.monstres.forEach((monstre: Personnage) => {
            monstre = Object.assign(new Monstre(), monstre);
            monstre.setArme = Object.assign(new Arme(), monstre.getArme);
            monstresList.push(monstre);
        });
        partie.setMonstres = monstresList;

        partie.setNom = this.state.partie.nom;
        partie.setEquipe = this.state.partie.equipe;

        this.partie = partie;
    }

    componentDidMount() {
        this.query();
    }

    componentWillUnmount() {
        this.truc.unsubscribe();
    }

    tourSuivant = () => {
        this.convertState();
        const partie = this.combatService.tour(this.partie);
        const tour = this.combatService.getTourI();
        const tours = this.state.tours;
        tours.push(tour);
        this.setState({ tours, partie });
        this.finDuGame(partie);
    };

    finDuGame = (p: Partie) => {
        if (p.getNom !== '') {
            if (p.getHeros.length === 0) {
                alert('Les monstres ont gagnés...');
                this.continue = false;
            } else if (p.getMonstres.length === 0) {
                alert('Les héros ont gagnés !!!!');
                this.continue = false;
            }
        }
        FireService.deletePartie(this.state.partie.nom);
    };

    render() {
        let tourN = 1;
        let infoN = 1;
        const tours = this.state.tours.map((tour: string[]) => (
            <Card key={tourN++}>
                <CardContent>
                    {tour.map((info: string) => (
                        <Typography key={infoN++} component='p'>
                            {info}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        ));
        let button;
        if (this.state.partie) {
            button = (
                <Button
                    disabled={!this.continue}
                    variant='contained'
                    color='primary'
                    onClick={this.tourSuivant}
                >
                    Tour suivant
                </Button>
            );
        }
        let redirection;
        if (!this.continue) {
            redirection = <Redirect to='/' />;
        }

        return (
            <div>
                {tours}
                <br />
                {button}
                {redirection}
            </div>
        );
    }
}
