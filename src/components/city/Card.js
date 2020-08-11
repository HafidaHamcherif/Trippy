import React from 'react';


class Card extends React.Component{
    render () {
        return (
            <div>
                {this.props.name}
                {this.props.source}
                {this.props.slug}
            </div>
        );
    }
}

export default Card;