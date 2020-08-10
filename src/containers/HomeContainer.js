import React from 'react';
import Api from '../utils/Api';
import Card from '../components/city/Card';

const src = `http://via.placeholder.com/300x200`;

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cities:[]
        }
    }

    componentDidMount(){
        console.log('componentdidmount')
        Api.getHome()
    }

    render() {
        console.log('this.stat',this.state)
        return(
            <div
                className='container-fluid'
                style={{
                fontFamily: 'Montserrat'
                }}>
                <Card 
                name = "name"
                source = {src}
                slug = ""
                
                />
                <div
                    className='row'>
                    <div
                        className={'col-lg-4 col-md-8 col-12'}>
                        <p>
                            Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
                        </p>
                    </div>
                    <div
                        className='col-lg-8 col-md-4 col-12'>
                        Une autre phrase
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContainer;