import { create } from 'apisauce';

const BASE_URL = "https://api.openbrewerydb.org";


export const Api = create({
    baseURL:BASE_URL, 
    timeout:60000,
    headers:'application/json'
});


  

// export const getBreweries = (page_number) => {

//     const result = Api.get('/breweries',{page:page_number,per_page:30}).then(response => {
//         return response.data
//     } );

//   return  result;

// }
