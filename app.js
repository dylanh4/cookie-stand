// Cookies needed per location projections

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm'];

// First and Pike Cookies Projection
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPike: 23,
  maxCustPike: 65,
  avgCookiesPerCustPike: 6.3,
  hourlyCustomersPikeArray: [],
  hourlySalesPikeArray: [],
  totalSales: 0
};
// method to generate random number of customers per hour and store number of customers per hour in hourlyCustomersPikeArray
// calcCustEachHour is actually calcHourlyCustomersPike in my nomenclature
firstAndPike.calcHourlyCustomersPike = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCustPike = Math.floor(Math.random() * (firstAndPike.maxCustPike - firstAndPike.minCustPike + 1)) + firstAndPike.minCustPike;
    firstAndPike.hourlyCustomersPikeArray.push(randomCustPike);
  }
};
firstAndPike.calcHourlyCustomersPike();

firstAndPike.calcHourlySalesPike = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSoldThatHourPike = firstAndPike.hourlyCustomersPikeArray[i] * firstAndPike.avgCookiesPerCustPike;
    firstAndPike.hourlySalesPikeArray.push(cookiesSoldThatHourPike);
    firstAndPike.totalSales += cookiesSoldThatHourPike;
    console.log('this is my total' + firstAndPike.totalSales);
  }
};
firstAndPike.calcHourlySalesPike();

firstAndPike.render = function() {
  for(var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(firstAndPike.hourlySalesPikeArray[i]) + ' cookies';
    var pikeList = document.getElementById('pikeID');
    pikeList.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total: ' + Math.round(firstAndPike.totalSales) + ' cookies';
  pikeList.appendChild(totalListItem);
};

firstAndPike.render();

// var randomCustPike = function() {
//   return (Math.floor(Math.random() * (firstAndPike.maxCustPike - firstAndPike.minCustPike + 1)) + firstAndPike.minCustPike);
// };
//
// var custThatHourPike = function() {
//   for(var i = 0; i < hours.length; i++) {
//     firstAndPike.hourlyCustomersPikeArray[i] = randomCustPike();
//   }
//   console.log(firstAndPike.hourlyCustomersPikeArray);
// };
//
// custThatHourPike();
//
//
// // Display the values of each Pike array as unordered lists in the browser
// firstAndPike.listSalesPike = function() {
//   var pikeID = document.getElementById('pikeID');
//   for (var i = 0; i < hours.length; i++) {
//     console.log(firstAndPike.hourlySalesPikeArray[i]);
//     var listItem = document.createElement('li');
//     listItem.textContent = hours[i] + ': ' + Math.round(firstAndPike.hourlySalesPikeArray[i]) + ' cookies';
//     pikeID.appendChild(listItem);
//   }
// };
//
// firstAndPike.listSalesPike();
//
// firstAndPike.totalSales = 0;
//
// for (var i = 0; i < hours.length; i++) {
//   firstAndPike.totalSales += firstAndPike.hourlySalesPikeArray[i];
// };
//
// var listItem = document.createElement('li');
// listItem.textContent = 'Total: ' + Math.round(firstAndPike.totalSales) + ' cookies';
// pikeID.appendChild(listItem);
//
// console.log(firstAndPike.totalSales);

// // //
// // // //
// // // //
// // //

// SeaTac Cookies Projection
var seaTac = {
  minCustSeaTac: 3,
  maxCustSeaTac: 24,
  avgCookiesPerCustSeaTac: 1.2,
  hourlyCustomerSeaTac: [],
  hourlySalesSeaTac: []
};
// method to generate random number of customers per hour and store number of customers per hour in hourlyCustomerSeaTac
var randomCustSeaTac = function() {
  return (Math.floor(Math.random() * (seaTac.maxCustSeaTac - seaTac.minCustSeaTac + 1)) + seaTac.minCustSeaTac);
};

var custThatHourSeaTac = function() {
  for(var i = 0; i < hours.length; i++) {
    seaTac.hourlyCustomerSeaTac[i] = randomCustSeaTac();
  }
  console.log(seaTac.hourlyCustomerSeaTac);
};

custThatHourSeaTac();

// Another option to fill hourlyCustomerSeaTac is by using push
    //seaTac.hourlyCustomerSeaTac.push(randomCustSeaTac());

// Calculate and store number of cookies purchased for a single hour and storer number of cookies sold per hour in hourlySalesSeaTac
var cookiesSoldThatHourSeaTac = function () {
  for(var i = 0; i < hours.length; i++) {
    seaTac.hourlySalesSeaTac.push(seaTac.avgCookiesPerCustSeaTac * seaTac.hourlyCustomerSeaTac[i]);
  }
  console.log(seaTac.hourlySalesSeaTac);
};

cookiesSoldThatHourSeaTac();

// Display the values of each Pike array as unordered lists in the browser
seaTac.listSalesSeaTac = function() {
  var seaTacID = document.getElementById('seaTacID');
  for (var i = 0; i < hours.length; i++) {
    console.log(seaTac.hourlySalesSeaTac[i]);
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(seaTac.hourlySalesSeaTac[i]) + ' cookies';
    seaTacID.appendChild(listItem);
  }
};

seaTac.listSalesSeaTac();

seaTac.totalSales = 0;

for (var i = 0; i < hours.length; i++) {
  seaTac.totalSales += seaTac.hourlySalesSeaTac[i];
};

var listItem = document.createElement('li');
listItem.textContent = 'Total: ' + Math.round(seaTac.totalSales) + ' cookies';
seaTacID.appendChild(listItem);

console.log(seaTac.totalSales);

// // //
// // // //
// // // //
// // //

// Seattle Center Cookies Projection
var seaCenter = {
  minCustSeaCenter: 11,
  maxCustSeaCenter: 38,
  avgCookiesPerCustSeaCenter: 3.7,
  hourlyCustomerSeaCenter: [],
  hourlySalesSeaCenter: []
};
// method to generate random number of customers per hour and store number of customers per hour in hourlyCustomerSeaCenter
var randomCustSeaCenter = function() {
  return (Math.floor(Math.random() * (seaCenter.maxCustSeaCenter - seaCenter.minCustSeaCenter + 1)) + seaCenter.minCustSeaCenter);
};

var custThatHourSeaCenter = function() {
  for(var i = 0; i < hours.length; i++) {
    seaCenter.hourlyCustomerSeaCenter[i] = randomCustSeaCenter();
  }
  console.log(seaCenter.hourlyCustomerSeaCenter);
};

custThatHourSeaCenter();

// Another option to fill hourlyCustomerSeaCenter is by using push
    //seaCenter.hourlyCustomerSeaCenter.push(randomCustSeaCenter());

// Calculate and store number of cookies purchased for a single hour and storer number of cookies sold per hour in hourlySalesSeaCenter
var cookiesSoldThatHourSeaCenter = function () {
  for(var i = 0; i < hours.length; i++) {
    seaCenter.hourlySalesSeaCenter.push(seaCenter.avgCookiesPerCustSeaCenter * seaCenter.hourlyCustomerSeaCenter[i]);
  }
  console.log(seaCenter.hourlySalesSeaCenter);
};

cookiesSoldThatHourSeaCenter();

// Display the values of each Pike array as unordered lists in the browser
seaCenter.listSalesSeaCenter = function() {
  var seaCenterID = document.getElementById('seaCenterID');
  for (var i = 0; i < hours.length; i++) {
    console.log(seaCenter.hourlySalesSeaCenter[i]);
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(seaCenter.hourlySalesSeaCenter[i]) + ' cookies';
    seaCenterID.appendChild(listItem);
  }
};

seaCenter.listSalesSeaCenter();

seaCenter.totalSales = 0;

for (var i = 0; i < hours.length; i++) {
  seaCenter.totalSales += seaCenter.hourlySalesSeaCenter[i];
};

var listItem = document.createElement('li');
listItem.textContent = 'Total: ' + Math.round(seaCenter.totalSales) + ' cookies';
seaCenterID.appendChild(listItem);

console.log(seaCenter.totalSales);

// // //
// // // //
// // // //
// // //

// Capitol Hill Cookies Projection
var capHill = {
  minCustCapHill: 20,
  maxCustCapHill: 38,
  avgCookiesPerCustCapHill: 2.3,
  hourlyCustomerCapHill: [],
  hourlySalesCapHill: []
};
// method to generate random number of customers per hour and store number of customers per hour in hourlyCustomerCapHill
var randomCustCapHill = function() {
  return (Math.floor(Math.random() * (capHill.maxCustCapHill - capHill.minCustCapHill + 1)) + capHill.minCustCapHill);
};

var custThatHourCapHill = function() {
  for(var i = 0; i < hours.length; i++) {
    capHill.hourlyCustomerCapHill[i] = randomCustCapHill();
  }
  console.log(capHill.hourlyCustomerCapHill);
};

custThatHourCapHill();

// Another option to fill hourlyCustomerCapHill is by using push
    //capHill.hourlyCustomerCapHill.push(randomCustCapHill());

// Calculate and store number of cookies purchased for a single hour and storer number of cookies sold per hour in hourlySalesCapHill
var cookiesSoldThatHourCapHill = function () {
  for(var i = 0; i < hours.length; i++) {
    capHill.hourlySalesCapHill.push(capHill.avgCookiesPerCustCapHill * capHill.hourlyCustomerCapHill[i]);
  }
  console.log(capHill.hourlySalesCapHill);
};

cookiesSoldThatHourCapHill();

// Display the values of each Pike array as unordered lists in the browser
capHill.listSalesCapHill = function() {
  var capHillID = document.getElementById('capHillID');
  for (var i = 0; i < hours.length; i++) {
    console.log(capHill.hourlySalesCapHill[i]);
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(capHill.hourlySalesCapHill[i]) + ' cookies';
    capHillID.appendChild(listItem);
  }
};

capHill.listSalesCapHill();

capHill.totalSales = 0;

for (var i = 0; i < hours.length; i++) {
  capHill.totalSales += capHill.hourlySalesCapHill[i];
};

var listItem = document.createElement('li');
listItem.textContent = 'Total: ' + Math.round(capHill.totalSales) + ' cookies';
capHillID.appendChild(listItem);

console.log(capHill.totalSales);

// // //
// // // //
// // // //
// // //

// Alki Cookies Projection
var alki = {
  minCustAlki: 2,
  maxCustAlki: 16,
  avgCookiesPerCustAlki: 4.6,
  hourlyCustomerAlki: [],
  hourlySalesAlki: []
};
// method to generate random number of customers per hour and store number of customers per hour in hourlyCustomerAlki
var randomCustAlki = function() {
  return (Math.floor(Math.random() * (alki.maxCustAlki - alki.minCustAlki + 1)) + alki.minCustAlki);
};

var custThatHourAlki = function() {
  for(var i = 0; i < hours.length; i++) {
    alki.hourlyCustomerAlki[i] = randomCustAlki();
  }
  console.log(alki.hourlyCustomerAlki);
};

custThatHourAlki();

// Another option to fill hourlyCustomerAlki is by using push
    //alki.hourlyCustomerAlki.push(randomCustAlki());

// Calculate and store number of cookies purchased for a single hour and storer number of cookies sold per hour in hourlySalesAlki
var cookiesSoldThatHourAlki = function () {
  for(var i = 0; i < hours.length; i++) {
    alki.hourlySalesAlki.push(alki.avgCookiesPerCustAlki * alki.hourlyCustomerAlki[i]);
  }
  console.log(alki.hourlySalesAlki);
};

cookiesSoldThatHourAlki();

// Display the values of each Pike array as unordered lists in the browser
alki.listSalesAlki = function() {
  var alkiID = document.getElementById('alkiID');
  for (var i = 0; i < hours.length; i++) {
    console.log(alki.hourlySalesAlki[i]);
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + Math.round(alki.hourlySalesAlki[i]) + ' cookies';
    alkiID.appendChild(listItem);
  }
};

alki.listSalesAlki();

alki.totalSales = 0;

for (var i = 0; i < hours.length; i++) {
  alki.totalSales += alki.hourlySalesAlki[i];
};

var listItem = document.createElement('li');
listItem.textContent = 'Total: ' + Math.round(alki.totalSales) + ' cookies';
alkiID.appendChild(listItem);

console.log(alki.totalSales);
