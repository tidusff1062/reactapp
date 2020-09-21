import React, { Fragment, PropsWithChildren } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

interface IAddHeroFormProps {
    classeValue: string | undefined;
    onSubmit: (event: any) => void;
    onChangeClass: (event: any) => void;
}

/**
 * Stateless qui se la pète.
 * @param props {IAddHeroFormProps}
 */
export const SelectClassForm: React.FC<
    PropsWithChildren<IAddHeroFormProps>
> = ({ onSubmit, classeValue, onChangeClass, children }) => (
    <Fragment>
        <form onSubmit={onSubmit}>
            <div>
                <FormControl>
                    <FormLabel>Choisissez votre classe :</FormLabel>
                    <RadioGroup
                        name='classes'
                        value={classeValue}
                        onChange={onChangeClass}
                    >
                        <FormControlLabel
                            value='Archer'
                            control={<Radio />}
                            label='Archer'
                        />

                        <FormControlLabel
                            value='Guerrier'
                            control={<Radio />}
                            label='Guerrier (moins de dégats, plus de vie et peut bloquer les dégats)'
                        />

                        <FormControlLabel
                            value='Soigneur'
                            control={<Radio />}
                            label='Soigneur (moins de dégats, moins de vie et peut soigner ses alliés)'
                        />

                        <FormControlLabel
                            value='Assassin'
                            control={<Radio />}
                            label='Assassin (plus de dégats, moins de vie, peut esquiver le dégats)'
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {
                // props.children est un attribut spécial (propre à react)
                // indique que l'on veut récupérer toutes les props qui se trouve entre les balises
                // SelectClassForm ... Children... SelectClassForm
            }
            {children}

            <Button type='submit' variant='contained' color='primary'>
                Ajouter
            </Button>
        </form>
    </Fragment>
);
