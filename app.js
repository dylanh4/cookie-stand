// Cookies needed per location projections

/*
1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
4. Store the results for each location in a separate array... perhaps as a property of the object representing that location
5. Display the values of each array as unordered lists in the browser
6. Calculating the sum of these hourly totals
*/

// General  - Cookie Projections
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm', '8pm'];

var firstAndPike = {
// Standard info given for each location
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  hourlyCustomers: [],
  hourlySales: []
};
// method to generate random number of customers per hour
var randomCust = function() {
  return (Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust + 1)) + firstAndPike.minCust);
};

var custThatHour = function() {
  for(var i = 0; i < hours.length; i++) {
    firstAndPike.hourlyCustomers[i] = randomCust();
  }
  console.log(firstAndPike.hourlyCustomers);
};

custThatHour();

// Another option to fill hourlyCustomers is by using push
    //firstAndPike.hourlyCustomers.push(randomCust());

// Calculate and store number of cookies purchased for a single hour
var cookiesSold = function () {
  return custInHr * avgCookiesPerCust;
  console.log(custInHr * avgCookiesPerCust);
};

//
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
firstAndPike.cookiesSold = function() {
  for(var i = 0; i < firstAndPike.hours.length; i++) {
    console.log(hours[i]);
  }
};

// firstAndPike.hourlyCustomers.push(anElement) = function() {
//   for(var j = 0; j < firstAndPike.hours.length; j++) {
