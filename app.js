// Global variables

var hours = ['6:00am - 7:00am', '7:00am - 8:00am', '8:00am - 9:00am', '9:00am - 10:00am', '10:00am - 11:00am', '11:00am - 12:00pm', '12:00pm - 1:00pm', '1:00pm - 2:00pm', '2:00pm - 3:00pm', '3:00pm - 4:00pm', '4:00pm - 5:00pm', '5:00pm - 6:00pm','6:00pm - 7:00pm', '7:00pm - 8:00pm'];
var cookieStandsArray = [];

// Constructor to generate patCookiesLocation instances
function PatCookiesLocation (locationName, minCust, maxCust, avgCookiesPerCust, iDPat) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.iDPat = iDPat;
  this.hourlyCustomersArray = [];
  this.hourlySalesArray = [];
  this.totalSales = 0;
  cookieStandsArray.push(this);
};

// Prototype to generate hourly customers
PatCookiesLocation.prototype.calcHourlyCustomers = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCustomersArray.push(randomCust);
  }
};

// Prototype to generate hourly sales
PatCookiesLocation.prototype.calcHourlySales = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSoldThatHour = this.hourlyCustomersArray[i] * this.avgCookiesPerCust;
    this.hourlySalesArray.push(cookiesSoldThatHour);
    this.totalSales += cookiesSoldThatHour;
  }
};

// Prototype to trigger render of unordered list
var makeHeaderRow = function() {
  var cookieTable = document.getElementById('patCookiesLocationTable');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);
  // cookieTable.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  cookieTable.appendChild(trEl);
};

PatCookiesLocation.prototype.render = function() {
  this.calcHourlyCustomers();
  this.calcHourlySales();
  var cookieTable = document.getElementById('patCookiesLocationTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);
  // cookieTable.appendChild(trEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = Math.round(this.totalSales);
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Math.round(this.hourlySalesArray[i]);
    trEl.appendChild(tdEl);
  };

  cookieTable.appendChild(trEl);
};

var wholeTable = function() {
  makeHeaderRow();
  for(var i = 0; i < cookieStandsArray.length; i++) {
    cookieStandsArray[i].render();
    console.log(cookieStandsArray[i]);
  }
};
// pushed carts into array
var firstAndPike = new PatCookiesLocation('First and Pike', 23, 65, 6.3, 'pikeID');
var seaTac = new PatCookiesLocation('SeaTac', 3, 24, 1.2, 'seaTacID');
var seaCenter = new PatCookiesLocation('Seattle Center', 11, 38, 3.7, 'seaCenterID');
var capHill = new PatCookiesLocation('Capitol Hill', 20, 38, 2.3, 'capHillID');
var alki = new PatCookiesLocation('Alki', 2, 16, 4.6, 'alkiID');
//appended to table
wholeTable();
//grabbing form
var cookieForm = document.getElementById('cookie_form');
//this is our cookie handler
function handleCookieForm(event) {
  event.preventDefault();
  // console.log('I heard a click');
  var locationName = document.getElementById('location_name');
  var minCust = document.getElementById('min_cust');
  var maxCust = document.getElementById('max_cust');
  var avgCookies = document.getElementById('avg_cookies');
  var address = document.getElementById('add_address');
  var phoneNum = document.getElementById('phone_num');
//adding the newCookieStand to the cookieStandsArray
  var newCookieStand = new PatCookiesLocation(locationName.value, minCust.value, maxCust.value, avgCookies.value, address.value, phoneNum.value);
  // console.log(cookieStandsArray);
//adding the new table row
  newCookieStand.render();
//we're emptying the form
  event.target.location_name.value = null;
  event.target.min_cust.value = null;
  event.target.max_cust.value = null;
  event.target.avg_cookies.value = null;
  event.target.add_address.value = null;
  event.target.phone_num.value = null;
//alert to notify that store has been added
  alert('You\'ve added ' + newCookieStand.locationName + ' to the table!');
}
//listening for the click and running handler above
cookieForm.addEventListener('submit', handleCookieForm, false);
