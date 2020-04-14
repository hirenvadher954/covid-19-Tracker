import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        };
        fetchAPI();
    }, []);
    return (
        <div>
            <FormControl>
                <NativeSelect
                    defaultValue=''
                    onChange={(e) => handleCountryChange(e.target.value)}>
                    <option
                        value="">Global
                    </option>
                    {
                        countries.map(
                            (country, i) => <option
                                key={i}
                                value={country}>
                                {country}
                            </option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;
