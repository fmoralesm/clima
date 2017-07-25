function obtenerClima(){
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

    