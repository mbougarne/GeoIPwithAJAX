// COUNTRIES SELECT CONSTANT
const visitorCountry    = document.querySelector('#country');
const countryPhoneCode  = document.querySelector('#countryPhoneCode');

// ADD EVENT LISTENER ON DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', getUserInfoByIp);

// GET USER INFO BY IP ADDRESS
function getUserInfoByIp(){

    // XHR CONSTANT 
    const xhr = new XMLHttpRequest();

    // API URL CONSTANT
    const GeoIPapiURL ='https://api.ipdata.co/';
    // OPEN XHR 
    xhr.open('GET', GeoIPapiURL, true);
    
    // WHN XHR LOAD
    xhr.onload = function(e){

        // IF THE CONNECTION IS OK
        if(this.status === 200){

            // PARSE THE GEOIP API TO JAVASCRIPT OBJECT
            $ipInfo = JSON.parse(this.responseText);
            // GET THE COUNTRY_CODE FROM THE JSON API
            $ipInfoCC = $ipInfo.country_code;

            // CONVERT THE SELECT TAG TO ARRAY AND LOOP THROUGH IT
            Array.from(visitorCountry).forEach(function(opt){
                
                // GET THE OPTION VALUE
                let attrVal = opt.attributes['value'].value;

                // IF THE OPT VALUE IS THE SAME AS COUNTRY CODE
                if(attrVal === $ipInfo.country_code){

                    // MAKE THE OPT SELECTED
                    opt.setAttribute("selected", "selected");
                }

            });

            // CONVERT THE SELECT TAG TO ARRAY AND LOOP THROUGH IT FOR COUNTRY PHONE CODE
            Array.from(countryPhoneCode).forEach(function(opt){
                
                // GET THE OPTION VALUE
                let attrVal = opt.attributes['value'].value;
                console.log(attrVal);
                // IF THE OPT VALUE IS THE SAME AS COUNTRY CODE
                if(attrVal === $ipInfo.calling_code){

                    // MAKE THE OPT SELECTED
                    opt.setAttribute("selected", "selected");
                    opt.textContent = attrVal;
                }

            });

        }
    }

    // SEND THE XHR REQUEST TO THE API SERVER
    xhr.send();
}
