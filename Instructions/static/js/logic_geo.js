// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: "pk.eyJ1IjoibmlsYW1yb3kyIiwiYSI6ImNrMDlwMTZ4YTA0eXczY21ob3k5aTBldGIifQ.8XnLgvtLR0NgzRTsutKztA"
  
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Brazil",
    location: [-14.2350, -51.9253],
    fatalities: 2729,
  },
  {
    name: "Germany",
    location: [51.1657, 10.4515],
    fatalities: 938
  },
  {
    name: "Italy",
    location: [41.8719, 12.5675],
    fatalities: 1310
  },
  {
    name: "Argentina",
    location: [-38.4161, -63.6167],
    fatalities: 818
  },
  {
    name: "Spain",
    location: [40.4637, -3.7492],
    fatalities: 2355
  },
  {
    name: "UK",
    location: [55.378052, -3.435973],
    fatalities: 1296
  },
  {
    name: "France",
    location: [46.2276, 2.2137],
    fatalities: 2249
  },
  {
    name: "Indonesia",
    location: [-0.789275, 113.921326],
    fatalities: 2233
  },
  {
    name: "USA",
    location: [37.090240, -95.712891],
    fatalities: 10794
  },
  {
    name: "Russia",
    location: [61.524010, 105.318756],
    fatalities: 5453
  },
  {
    name: "Colombia",
    location: [4.570868, -74.297333],
    fatalities: 2932
  },
  {
    name: "Canada",
    location: [56.130367, -106.346771],
    fatalities: 1796
  },
  {
    name: "Mexico",
    location: [23.634501, -102.552788],
    fatalities: 1266
  },
  {
    name: "India",
    location: [20.593683, 78.962883],
    fatalities: 2331
  },
  {
    name: "China",
    location: [35.861660, 104.195396],
    fatalities: 1789
  },
  {
    name: "Venizuela",
    location: [6.423750, -66.589729],
    fatalities: 1107
  },
  {
    name: "Congo",
    location: [-4.038333, 21.758663],
    fatalities: 71
  },
  {
    name: "Ukraine",
    location: [48.379433, 31.165581],
    fatalities: 1332
  },
  {
    name: "Bolivia",
    location: [-16.290154, -63.588654],
    fatalities: 638
  },
  {
    name: "Philippines",
    location: [12.879721, 121.774017],
    fatalities: 875
  },
  {
    name: "Peru",
    location: [-9.189967, -75.015152],
    fatalities: 1343
  },
  {
    name: "P.N Guinea",
    location: [20.655410, -101.348590],
    fatalities: 368
  },
  {
    name: "Khzakhstan",
    location: [51.177600, 71.433000],
    fatalities: 736
  },
  {
    name: "Australia",
    location: [-25.274399, 133.775131],
    fatalities: 395
  },
  {
    name: "Atlantic Ocean",
    location: [-14.599413, -28.673147],
    fatalities: 1200
  },
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (countries[i].fatalities > 2000) {
    color = "yellow";
  }
  else if (countries[i].fatalities > 1000) {
    color = "blue";
  }
  else if (countries[i].fatalities > 500) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].fatalities * 120
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Fatalities: " + countries[i].fatalities + "</h3>").addTo(myMap);
}
