import Config from '../Config';

class Api {
    getHome(){
       const url = `${Config.host}/api/home`;
       //console.log('getHome/url',url)

       return fetch(url)
        .then(res => res.json())
        .then(res => {
            //console.log('res',res)
            console.log('res.cities',res.cities)
            return res.cities
            
        });
       
    }
    
}

export default new Api();
