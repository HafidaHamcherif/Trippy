import React from 'react';

class LargeCard extends React.Component{
    render (){
        const{
            name,
            slug,
            
        }=this.props
       
        const hotel = `/hotels?city=${slug}`
        return(
            <div>
                <a href={hotel}> {name}</a>
            </div>
        );
    }
}

export default LargeCard;