import React from 'react';
import Config from '../../Config';
import LargeCard from '../city/LargeCard';

//Afficher les noms et photos de chaque city//


class Card extends React.Component{
    render () {
        const{
            name,
            slug,
            source,

        }=this.props

        const url = `${Config.host}${source}`;
        const src = `${Config.src}`;
        const hotel = `/hotels?city=${slug}`
        return (
            <div>
                <img src = {url}  alt= "City"></img>
                <a href={hotel}> {name} </a>
                <LargeCard/>
                   
            </div>
        );
    }
}

export default Card;