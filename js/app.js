document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {


// Wait for device API libraries to load
//

    
    console.log("navigator.geolocation works well");

    var onSuccess = function(position) {
        // alert('Latitude: '          + position.coords.latitude          + '\n' +
        //       'Longitude: '         + position.coords.longitude         + '\n' +
        //       'Altitude: '          + position.coords.altitude          + '\n' +
        //       'Accuracy: '          + position.coords.accuracy          + '\n' +
        //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        //       'Heading: '           + position.coords.heading           + '\n' +
        //       'Speed: '             + position.coords.speed             + '\n' +
        //       'Timestamp: '         + position.timestamp                + '\n');

        var geocoder ;
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(position.coords.latitude , position.coords.longitude);
        //alert("Else loop" + latlng);
        geocoder.geocode({'latLng': latlng}, function(results, status)
        {
            //alert("Else loop1");
            if (status == google.maps.GeocoderStatus.OK)
             {
                    if (results[0])
                    {
                        var add= results[0].formatted_address ;
                        var  value=add.split(",");

                        count=value.length;
                        country=value[count-1];
                        state=value[count-2];
                        city=value[count-3];
                        // alert("city name is: " + city + ", " + state );


                    }
                    else 
                    {
              alert("address not found");
                    }
            }
             else
            {
            //document.getElementById("location").innerHTML="Geocoder failed due to: " + status;
            //alert("Geocoder failed due to: " + status);
            }
        });

    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);







}
