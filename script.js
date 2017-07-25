function promesaRequest(url){

    return new Promise(
        function(resolve, reject){
            var req = new XMLHttpRequest();
            req.overrideMimeType("application/json");
            req.open('GET', url, true);
            req.timeout = 10000;
            req.onload = function() {
                if (req.status == 200) {
                    resolve(this.responseText);
                }
                else{
                    reject(Error(this.status));
                }
            };

            req.onerror = function(){
                reject(Error('Error'));
            }

            req.send(null);
        }
    );
}

function appendCiudades(){
    promesaRequest('city.json').then(function(ciudades){
        var arrayCiudades = JSON.parse(ciudades);

        for(var i = 0; i < arrayCiudades.length; i++ ){
            if(arrayCiudades[i].country == 'CL'){
                var option = document.createElement("option");
                option.value = arrayCiudades[i].name + ',' + arrayCiudades[i].country;
                document.getElementById('Ciudades').appendChild(option);
            }
        }
    }).then(function(error){
        console.log(error);
    });
}

function obtenerClima(){
<<<<<<< HEAD
	var city = document.getElementById("idCiudad").value;
	URL = "api.openweathermap.org/data/2.5/weather?q=" + city;
	alert(URL);
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    alert(xmlhttp.responseText);
}

function callbackFunction(xmlhttp) {
    alert(xmlhttp.responseXML);
}

function cargaCiudades(){
    var ciudades = JSON.parse(city);
    alert(ciudades[1].name);
}
=======
        var myArr;
        var resp;
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c4802016ab64067cddcc12fca57b6989";
        var xmlhttp = new XMLHttpRequest();

        //alert(url);
        xmlhttp.onreadystatechange = function() {
            //alert(this.readyState + " - " + this.status);
            if (this.readyState == 4 && this.status == 200) {
                myArr = JSON.parse(this.responseText);
                getApps(myArr);                
           }

        };

        xmlhttp.open("GET", "/clima.json", true);
        xmlhttp.send();

        

        function getApps(myArr) {
            var out = "";
            var i;
            var largo = myArr["weather"].length;

            var temp, temp_min, temp_max, pressure, humidity, visibility;
            var weather, description;
            var city, country;

            //alert("largo: " + largo);
            for(i = 0; i < largo; i++) {
                //alert(myArr["weather"][i]["main"]);
                city = myArr["name"];
                country = myArr["sys"]["country"];
                weather = myArr["weather"][i]["main"];
                description = myArr["weather"][i]["description"];
                temp = myArr["main"]["temp"];
                temp_min = myArr["main"]["temp_min"];
                temp_max = myArr["main"]["temp_max"];
                pressure = myArr["main"]["pressure"];
                humidity = myArr["main"]["humidity"];
                visibility = myArr["main"]["visibility"];

                document.getElementById("city").innerHTML = "Ciudad: " + city;
                document.getElementById("country").innerHTML = "País: " + country;
                document.getElementById("weather").innerHTML = "Clima: " + weather;
                document.getElementById("description").innerHTML = "Descripción: " + description;
                document.getElementById("temp").innerHTML = "Temperatura: " + temp;
                document.getElementById("temp_min").innerHTML = "Mínima: " + temp_min;
                document.getElementById("temp_max").innerHTML = "Máxima: " + temp_max;
                document.getElementById("pressure").innerHTML = "Presión: " + pressure;
                document.getElementById("humidity").innerHTML = "Humedad: " + humidity;
                document.getElementById("visibility").innerHTML = "Visibilidad: " + visibility;
              
            }

            //imprimir(city, country, weather, description, temp, temp_min, temp_max, pressure, humidity, visibility);
            //return [weather, temp, temp_min, temp_max];
        }


        function imprimir(city, country, weather, description, temp, temp_min, temp_max, pressure, humidity, visibility){
            document.getElementById("city").innerHTML = "Ciudad: " + city;
            document.getElementById("country").innerHTML = "País: " + country;
            document.getElementById("weather").innerHTML = "Clima: " + weather;
            document.getElementById("description").innerHTML = "Descripción: " + description;
            document.getElementById("temp").innerHTML = "Temperatura: " + temp;
            document.getElementById("temp_min").innerHTML = "Mínima: " + temp_min;
            document.getElementById("temp_max").innerHTML = "Máxima: " + temp_max;
            document.getElementById("pressure").innerHTML = "Presión: " + pressure;
            document.getElementById("humidity").innerHTML = "Humedad: " + humidity;
            document.getElementById("visibility").innerHTML = "Visibilidad: " + visibility;

        };

        return false;
    }

    
>>>>>>> 5a1dd4ad19a421eb1996a3a4ee593ba490ad4087
