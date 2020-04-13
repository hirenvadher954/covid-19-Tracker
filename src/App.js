import React from 'react';
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Charts/Charts";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import styles from './App.module.css';
import {fetchData} from './api'

class App extends React.component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data)
    };

    render() {
        return (

            <div className={styles.container}>
                <Cards/>
                <CountryPicker/>
                <Charts/>
            </div>
        );
    }
}

export default App;
