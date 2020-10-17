/*
Updates to display the cuurent location to show Country name, State and City in
this exact order
*/

$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
               .done(function (location) {
                   $('#country').html(location.country_name);
                   $('#state').html(location.state);
                   $('#city').html(location.city);
                   $('#latitude').html(location.latitude); //optional for use
                   $('#longitude').html(location.longitude); //optional for use
                   $('#ip').html(location.IPv4);
               });
