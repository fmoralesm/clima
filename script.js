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