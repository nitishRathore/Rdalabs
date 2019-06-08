import { Geolocation} from 'react-native';


export const CurrentLocation = async =>{

    return new Promise((resolve) =>{
        navigator.geolocation.getCurrentPosition(
            (position) => {

                var locationObject = {
                    lat:position.coords.latitude,
                    lon:position.coords.longitude,

                    error: null,
                }
               resolve(locationObject) ;
              
            },
            (error) => {
                var locationObject = {
                    lat:null,
                    lon:null,
                    error: error.message,
                }
               resolve(locationObject) ;
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    })
}