
url = 'http://tempooeiras.ifpi.edu.br/api/tempo_agora/';

var data;

function getData() {
    axios.get(url).then(function (response) {
        data = (response.data[0]);
        console.log(data);
        renderData();
    }).catch(function (error) {
        console.log(error);
    });
}

function renderData() {
    var elementList = document.querySelector('#container ul');
    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.id);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);

    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.Datetime);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);

    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.TempOut);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);

    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.HumOut);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);

    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.RainDay);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);

    var elementLi = document.createElement('li');
    var text = document.createTextNode(data.SolarRad);
    elementLi.appendChild(text);
    elementList.appendChild(elementLi);
}

getData();