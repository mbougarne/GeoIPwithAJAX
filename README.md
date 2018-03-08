# GeoIPwithAJAX
Auto detect country and country phone code using IP DATA API and AJAX
___

#### How to use it?
Small and simply to use script file to get the visitors countries and phone area code using [IP DATA API](https://api.ipdata.co/) You can extend it to get more info from the api as shown below: 
```JSON
{
    "ip": "I_DELETE_MINE",
    "city": "Beni Mellal",
    "region": "Beni Mellal-Khenifra",
    "region_code": "05",
    "country_name": "Morocco",
    "country_code": "MA",
    "continent_name": "Africa",
    "continent_code": "AF",
    "latitude": 32.5977,
    "longitude": -6.2684,
    "asn": "AS36903",
    "organisation": "MT-MPLS",
    "postal": "",
    "currency": "MAD",
    "currency_symbol": "MAD",
    "calling_code": "212",
    "flag": "https://ipdata.co/flags/ma.png",
    "emoji_flag": "\ud83c\uddf2\ud83c\udde6",
    "time_zone": "Africa/Casablanca",
    "is_eu": false,
    "suspicious_factors": {
        "is_tor": false
    }
}
```
A sample use of the script to get the city
```javascript
  const cityInput    = document.querySelector('#cityInput'); # You can select by class or any css selector
  # The script will work when all the document is loaded
  document.addEventListener('DOMContentLoaded', getUserInfoByIp);
  function getUserInfoByIp(){
    const xhr = new XMLHttpRequest();
    // API URL CONSTANT
    const GeoIPapiURL ='https://api.ipdata.co/';
    xhr.open('GET', GeoIPapiURL, true);
    xhr.onload = function(e){
        if(this.status === 200){
            // PARSE THE GEOIP API TO JAVASCRIPT OBJECT
            $ipInfo = JSON.parse(this.responseText);
            // GET THE COUNTRY_CODE FROM THE JSON API
            $ipInfoCity = $ipInfo.city;
            cityInput.value = $ipInfoCity;
        }
    }
    xhr.send();
}
```

If you want to use it with select tag, you will need to convert it to ARRAY then loop through it with forEach loop

```javascript
  const selectCountry    = document.querySelector('#selectCountry');
  Array.from(selectCountry).forEach(function(opt){     
      // GET THE OPTION VALUE
      let attrVal = opt.attributes['value'].value;
      // IF THE OPT VALUE IS THE SAME AS COUNTRY CODE
      if(attrVal === $ipInfo.country_code){
          // MAKE THE OPT SELECTED
          opt.setAttribute("selected", "selected");
      }
  });
```
