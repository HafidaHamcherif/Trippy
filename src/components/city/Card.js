import React from 'react';
import Config from '../../Config';

//Afficher les noms et photos de chaque city//


class Card extends React.Component{
    render () {
        const url = `${Config.host}${this.props.source}`;
        const src = `${Config.src}`;
        return (
            <div>
                <img src = {url}  alt= "City"></img>
                {this.props.name} 
                {this.props.slug}
                {this.props.source}
            </div>
        );
    }
}

export default Card;