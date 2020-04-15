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
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({data});
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img src="https://i.ibb.co/7QpKsCX/image.png"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;
