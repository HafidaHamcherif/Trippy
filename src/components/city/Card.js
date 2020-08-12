import React from 'react';
import Config from '../../Config';
//Afficher les noms et photos de chaque city//

class Card extends React.Component{
    render () {
       
        const url = `${Config.host}${this.props.source}`;
        return (
            <div>
                <img src = {url} alt="city"></img> 
                {this.props.city}
                {this.props.slug}
            </div>
        );
    }
}

export default Card;