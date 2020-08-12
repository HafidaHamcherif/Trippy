import React from 'react';
import Api from '../utils/Api';
import Card from '../components/city/Card';

//const src = `http://via.placeholder.com/300x200`

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cities:[]
        }
    }

    componentDidMount(){
        //Décomposer entiérement//

        // const url = `${Config.host}/api/home`;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(res => {
        //         //console.log('res',res)
        //         console.log('res.cities',res.cities)
        //         const cities = res.cities
        //         this.setState({
        //             cities
        //         })
        //     });

        //Optimisation//
        Api.getHome()
            .then((cities)=>{
                this.setState({
                    cities
                })
            })
    }

    render() {
        console.log('this.stat',this.state)
        return(
            <div
                className='container-fluid'
                style={{
                fontFamily: 'Montserrat'
                }}>
               
                {this.state.cities.map((city)=>{
                    return(
                        // <div >
                        //     <img src = {`${Config.host}`+ city.source} alt="city"></img>
                        //     <p>{city.name}</p>
                        // </div>
                        <Card
                            key = {city.id}
                            city = {city.name}
                            source = {city.source}
                            slug = ''
                        />
                    )
                })}

            </div>
        );
    }
}

export default HomeContainer;