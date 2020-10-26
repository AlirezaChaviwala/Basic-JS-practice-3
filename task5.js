var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
}


//=========================================================================================

//Get all the countries from Asia continent using Filter function

let res1 = data.filter(el => el.region == 'Asia');
console.log(res1);

//=========================================================================================


//Get all the countries with population of less than 2 lacs using Filter function

let res2 = data.filter(el => el.population < 200000);
console.log(res2);

//=========================================================================================


//Print the following details name, capital, flag using forEach function

let res3 = data.forEach(element => {
    console.log(' name: ' + element.name + ' capital: ' + element.capital + ' flag: ' + element.flag);
});

//=========================================================================================


//Print the total population of countries using reduce function

let res4 = data.reduce((acc, cur) => acc + cur.population, 0);
console.log(res4);

//=========================================================================================

//Print the total population of countries in Asia continent using reduce and filter function

let res5 = data.filter(el => el.region == 'Asia').reduce((acc, cur) => acc + cur.population, 0)
console.log(res5);

//=========================================================================================

//Print the contras which use US Dollars as currency

let res6 = data.filter(el => el.currencies[0].code == 'USD')
console.log(res6);

//=========================================================================================

//Add error handling to the xml http request code

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    try {
        consle.log(data[0]);
    } catch (err) {
        throw err.message;
    }
}