import React, { Component, Fragment } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import { ArmeForm } from './forms/ArmeForm';
import { SelectClassForm } from './forms/SelectClassForm';

interface FormProps {
    addHero: (hero: Object) => void;
}

/**
 * Doc
 */
class Formulaire extends Component<FormProps> {
    state = {
        classe: 'Archer',
        arme: 'Arc',
        nom: ''
    };

    /**
     * Une fonction flêchée garde le contexte de sa classe
     * elle est liée
     * Ce qui veut dire : on peut la transmettre en callback, this fera tjrs référence à l'objet
     * Formulaire
     */

    choixClasse = (event: any) => {
        const classe = event.target.value;
        if (classe !== 'Archer') {
            this.setState({ arme: 'Epée' });
        } else {
            this.setState({ arme: 'Arc' });
        }
        this.setState({ classe });
    };

    choixArme = (event: any) => {
        const arme = event.target.value;
        this.setState({ arme });
    };

    choixNom = (event: any) => {
        const nom = event.target.value;
        this.setState({ nom });
    };

    ajouterHeros = (event: any) => {
        // méga raccourcis pour cloner un objet {...this.state}
        event.preventDefault();
        this.props.addHero({ ...this.state });
        this.setState({ classe: 'Archer', arme: 'Arc', nom: '' });
        event.preventDefault();
    };

    render() {
        let armes;
        if (this.state.classe !== 'Archer') {
            armes = <ArmeForm value='Epée' onChange={this.choixArme} />;
        }

        return (
            <div>
                <Fragment>
                    <h3>Créer vos héros (minimum 4) :</h3>
                    <SelectClassForm
                        onSubmit={this.ajouterHeros}
                        classeValue={this.state.classe}
                        onChangeClass={this.choixClasse}
                    >
                        {armes}

                        <br />
                        <div>
                            <TextField
                                label='Nommez votre héros :'
                                onChange={this.choixNom}
                                value={this.state.nom}
                                required
                            />
                        </div>
                        <br />
                    </SelectClassForm>
                </Fragment>
            </div>
        );
    }
}

export default Formulaire;
