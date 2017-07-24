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