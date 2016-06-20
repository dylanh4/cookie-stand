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

var patLocationName = {
// Standard info given for each location
  minCustomers: minCustomers#,
  maxCustomers: maxCustomers#,
  avgCookiesPerCust: avgCookiesPerCust#,
  hourlyCustomers: ['an','array','listing','hourlyCustomers','from','6am','to','8pm'],
  hourlySales: ['an','array','listing','hourlySales','from','6am','to','8pm'],
}
// method to generate random number of customers per hour

// patLocationName.hourlyCustomers.push(anElement) = function() {
//   for(var j = 0; j < patLocationName.hours.length; j++) {
    patLocationName.generateRandom = function () {
        var hourlyCustomers =  

        getRandomIntInclusive(minCustomers, maxCustomers) {
        console.log(Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
      }
    }
  }
}
// Calculate and store number of cookies purchased for a single hour
var cookiesSold = function () {
  return this.generateRandom(maxCustomers, minCustomers) * this.avgCookiesPerCust;
}
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
patLocationName.cookiesSold = function() {
  for(var i = 0; i < patLocationName.hours.length; i++) {
    console.log(hours[i]);
  }
}


// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
