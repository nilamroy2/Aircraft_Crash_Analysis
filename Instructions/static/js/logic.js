// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: "pk.eyJ1IjoibmlsYW1yb3kyIiwiYSI6ImNrMDlwMTZ4YTA0eXczY21ob3k5aTBldGIifQ.8XnLgvtLR0NgzRTsutKztA"
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "New York City",
    location: [40.712776, -74.005974],
    fatalities: 2907,
    carrier:"American /United Airlines"
    
  },
  {
    name: "Tenerife, Canary Islands",
    location: [28.469801, -16.254841],
    fatalities: 583,
    carrier:"Pan Am / KLM"
  },
  {
    name: "Mt. Osutaka, Japan",
    location: [36.204823, 138.252930],
    fatalities: 520,
    carrier:"Japan Air Lines"
  },
  {
    name: "New Delhi, India",
    location: [28.613939, 77.209023],
    fatalities: 349,
    carrier:"Saudi / Kazastan"
  },
  {
    name: "Bois d' Ermenonville, France",
    location: [46.227638, 2.213749],
    fatalities: 346,
    carrier:"Turkish Airlines"
  },
  {
    name: "Atlantic Ocean West of Ireland",
    location: [-14.599413, -28.673147],
    fatalities: 329,
    carrier:"Air India"
  },
  {
    name: "Riyadh, Saudi Arabia",
    location: [24.713552, 46.675297],
    fatalities: 301,
    carrier:"Saudi Arabian Airlines"
  },
  {
    name: "Hrabove, Ukraine",
    location: [48.379433, 31.165581],
    fatalities: 298,
    carrier:"Malaysia Airlines"
  },
  {
    name: "Persian Gulf",
    location: [26.750534, 51.683430],
    fatalities: 290,
    carrier:"Iran Air"
  },
  {
    name: "Shahdad, Iran",
    location: [32.427910, 53.688046],
    fatalities: 275,
    carrier:"Islamic Revolution's Guards Co"
  },
  {
    name: "Chicago, Illinois",
    location: [41.878113, -87.629799],
    fatalities: 273,
    carrier:"American Airlines"
  },
  {
    name: "Lockerbie, Scotland",
    location: [56.490669, -4.202646],
    fatalities: 270,
    carrier:"Pan American World Airway"
  },
  {
    name: "Sakhalin Island, Russia",
    location: [54.454922, 54.454922],
    fatalities: 269,
    carrier:"Korean Airlines"
  },
  {
    name: "Belle Harbor, Queens, New York",
    location: [40.759781, -73.817299],
    fatalities: 265,
    carrier:"American Airlines"
  },
  {
    name: "Komaki, Japan",
    location: [36.204823, 138.252930],
    fatalities: 264,
    carrier:"China Airlines"
  },
  {
    name: "Jeddah, Saudi Arabia",
    location: [21.485811, 39.192505],
    fatalities: 261,
    carrier:"Nationair/charter Nigeria AW"
  },
  {
    name: "Bufarik AB, Algeria",
    location: [28.033886, 1.659626],
    fatalities: 257,
    carrier:"Algerian Air Force"
  },
  {
    name: "Mt. Erebus, Antarctica",
    location: [28.033886, 1.659626],
    fatalities: 257,
    carrier:"Air New Zealand"
  },
  {
    name: "Gander, Newfoundland, Canada",
    location: [53.135509, -57.660435],
    fatalities: 256,
    carrier:"Arrow Airways"
  },
  {
    name: "South Indian Ocean",
    location: [27.280090, -80.244720],
    fatalities: 239,
    carrier:"Malaysia Airlines"
  },
  {
    name: "Buah Nabar, Indonesia",
    location: [-0.789275, 113.921326],
    fatalities: 234,
    carrier:"Garuda Indonesia Airlines"
  }
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (countries[i].fatalities > 500) {
    color = "red";
  }
  else if (countries[i].fatalities > 300) {
    color = "yellow";
  }
  else if (countries[i].fatalities > 200) {
    color = "green";
  }
  else {
    color = "blue";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].fatalities * 500
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Carrier: " + countries[i].carrier + "</h3><hr> <h3>Fatalities: " + countries[i].fatalities + "</h3>").addTo(myMap);
}
