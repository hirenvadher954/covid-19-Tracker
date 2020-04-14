import React from 'react';

import {Cards, CountryPicker, Chart} from './Components';
import {fetchData} from './api/';
import styles from './App.module.css';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    };

    handleCountryChange = async (country) => {
        console.log(country)
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({data});
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data}/>
            </div>
        );
    }
}

export default App;
