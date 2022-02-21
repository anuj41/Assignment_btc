import fetch from "isomorphic-fetch";


export const getdata =  ()=>{
    return fetch(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`,{
        method: 'GET',
    }).then(response=>{
        return response.json();
    }).catch(err=> console.log(err) )
}

