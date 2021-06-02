// # Review - Advanced array methods

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use advanced array methods for all of these (forEach, map, etc.). You might have to search for an appropriate method to use on MDN.

// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.

const sites = [
    { name: "Micaela", url: "https://wwww.syndicate.com", number: 822, },
    { name: "Eldridge", url: "https://wwww.deliver.com", number: 699, },
    { name: "Green", url: "https://wwww.embrace.com", number: 462, },
    { name: "Llewellyn", url: "wwww.maximize.com", number: 537, },
    { name: "Trevion", url: "https://wwww.brand.com", number: 107, },
    { name: "Martina", url: "https://wwww.innovate.com", number: 918, },
    { name: "Clemmie", url: "wwww.exploit.com", number: 359, },
    { name: "Clint", url: "https://wwww.utilize.com", number: 671, },
    { name: "Jovany", url: "https://wwww.transform.com", number: 266, },
    { name: "Tessie", url: "wwww.monetize.com", number: 248, },
];

// 2. Then based on the array, create a new array that contains just the names.

const namesOfSites = sites.map(function(site) { 
    return site.name;
});
console.log(namesOfSites);

// OR with short arrow function
const namesOfSites2 = sites.map(site => site.name);
console.log(namesOfSites2);

// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.

sites.forEach(function(site) {
    if (site.url.startsWith("http")) {
        console.log(site.url);
    } else {
        console.log("Invalid URL for", site.name);
    };
});

// 4. Sort the array based on the "number" property to a random order.

// random order and short arrow function
const sitesOrderedRandomly = sites.sort(() => 0.5 - Math.random());

console.log(sites); // sort mutuates the order of the original array too - references, not clones?
console.log(sitesOrderedRandomly);

// 5. Sort the array based on the "number" property, with the lowest number first.

const sitesAscending = sites.sort(function(a, b) {
    if ( a.number > b.number ) return 1;
    if ( a.number === b.number ) return 0;
    return -1;
});

console.log(sitesAscending);

// 6. Sort the array based on the "number" property, with the highest number first.

const sitesDescending = sites.sort((a, b) => a.number < b.number ? 1 : a.number === b.number ? 0 : -1 );

console.log(sitesDescending);

// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.

const listOfNames = sites.map(site => site.name).join(", ");

const listOfNamesLastCommaReplaced = listOfNames.substring(0, listOfNames.lastIndexOf(",")) + " and" + listOfNames.substring(listOfNames.lastIndexOf(",") + 1);

console.log(listOfNamesLastCommaReplaced);

