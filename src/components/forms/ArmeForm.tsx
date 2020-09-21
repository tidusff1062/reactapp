import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface IArmeFormProps {
    value: string | undefined;
    onChange: (event: any) => void;
}

/**
 * Stateless
 * @param props {IArmeFormProps}
 */
export const ArmeForm: React.FC<IArmeFormProps> = ({ value, onChange }) => (
    <Fragment>
        <FormControl>
            <FormLabel>Choisissez votre arme :</FormLabel>
            <RadioGroup name='armes' defaultValue={value} onChange={onChange}>
                <FormControlLabel
                    value='Epée'
                    control={<Radio />}
                    label='Epée (plus de chances de critiques)'
                />

                <FormControlLabel
                    value='Masse'
                    control={<Radio />}
                    label='Masse (plus de dégats)'
                />
            </RadioGroup>
        </FormControl>
    </Fragment>
);
