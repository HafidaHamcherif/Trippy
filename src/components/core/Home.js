import React from 'react';
import Card from '../city/Card';


class Home extends React.Component{

    render() {
        console.log(this.props.cities)
        return(
            <div>
                <Card
                    cities = {this.props.cities}
                />
            </div>

        );
    }
}

export default Home;