// Global variables

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm'];

// Constructor to generate patCookiesLocation instances
function patCookiesLocation (locationName, minCust, maxCust, avgCookiesPerCust, iDPat) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.iDPat = iDPat;
  this.hourlyCustomersArray = [];
  this.hourlySalesArray = [];
  this.totalSales = 0;
};

// Prototype to generate hourly customers
patCookiesLocation.prototype.calcHourlyCustomers = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCustomersArray.push(randomCust);
  }
};

// Prototype to generate hourly sales
patCookiesLocation.prototype.calcHourlySales = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSoldThatHour = this.hourlyCustomersArray[i] * this.avgCookiesPerCust;
    this.hourlySalesArray.push(cookiesSoldThatHour);
    this.totalSales += cookiesSoldThatHour;
  }
};

// Prototype to trigger render of unordered list
patCookiesLocation.prototype.render = function() {
  for(var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(this.hourlySalesArray[i]) + ' cookies';
    var patCookieLocationList = document.getElementById(this.iDPat);
    document.getElementById(this.iDPat).appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total: ' + Math.round(this.totalSales) + ' cookies';
  patCookieLocationList.appendChild(totalListItem);
};


// All instances and calls of prototypes to calculate hourly customers, hourly sales, and then render on the page
var firstAndPike = new patCookiesLocation('First and Pike', 23, 65, 6.3, 'pikeID');
firstAndPike.calcHourlyCustomers();
firstAndPike.calcHourlySales();
firstAndPike.render();

var seaTac = new patCookiesLocation('SeaTac', 3, 24, 1.2, 'seaTacID');
seaTac.calcHourlyCustomers();
seaTac.calcHourlySales();
seaTac.render();

var seaCenter = new patCookiesLocation('Seattle Center', 11, 38, 3.7, 'seaCenterID');
seaCenter.calcHourlyCustomers();
seaCenter.calcHourlySales();
seaCenter.render();

var capHill = new patCookiesLocation('Capitol Hill', 20, 38, 2.3, 'capHillID');
capHill.calcHourlyCustomers();
capHill.calcHourlySales();
capHill.render();

var alki = new patCookiesLocation('Alki', 2, 16, 4.6, 'alkiID');
alki.calcHourlyCustomers();
alki.calcHourlySales();
alki.render();
