/*var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}*/

   
/*function barChart(data){
  console.log(data);
  /*var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
  };
}*/
// function buildMetadata(selyear) {
//   var metadataSelector = d3.select('#selDataset');
//   var APILink = "http://127.0.0.1:5002/selyear"
//   d3.json(APILink, function(data) {
//     metadataSelector.html("");
//     console.log(data);
//     metadataSelector
//     .append('p').text(`${value}`)
//     .append('hr')
//     /*Object.entries(data).forEach(([key,value]) =>{
//       metadataSelector
//         .append('p').text(`${key} : ${value}`)
//         .append('hr')
//     });
//     })*/
//   })
// }
// function pieChart(data) {
//   console.log(data);
//   // let labels = data.airlines;
//   // let values = data.sample_values.slice(0,10);
//   // // let hovertext = data.otu_labels.slice(0,10);

//   // let trace = [{
//   //   values : values,
//   //   labels : labels,
//   //   type : "pie",
//   //   textposition: "inside",
//   //   hovertext : hovertext
//   // }];

//   // let layout = {
//   //     title: '<b> Belly Button Pie Chart </b>',
//   //     plot_bgcolor: 'rgba(0, 0, 0, 0)',
//   //     paper_bgcolor: 'rgba(0, 0, 0, 0)',
//   // };

//   // Plotly.newPlot('pie', trace , layout, {responsive: true});
// }

/*function bubbleChart(data) {
let x = data.otu_ids;
let y = data.sample_values;
let markersize = data.sample_values;
let markercolors = data.otu_ids;
let textvalues = data.otu_labels;

let trace =[{
  x: x,
  y: y,
  mode: 'markers',
  marker: {
    size: markersize,
    color: markercolors,
    colorscale: 'Earth'
  },
  text: textvalues
}];

let layout ={
  title:"<b> Belly Button Bubble Chart </b>",
  xaxis: {
    title: 'OTU ID',
  },
  yaxis: {
    title: 'Sample Value'
  },
  width:1100,
  plot_bgcolor: 'rgba(0, 0, 0, 0)',
  paper_bgcolor: 'rgba(0, 0, 0, 0)',
};

Plotly.newPlot('bubble', trace, layout, {responsive: true});
}*/
// function buildCharts(airline){

//   d3.json(`/wfreq/${sample}`).then(wdata =>
//     // ## Gauge Chart ##
//      gaugeChart(wdata)
//   );

//   d3.json(`/samples/${sample}`).then(data =>{
//     // ## Pie Chart ##
//     pieChart(data);
//     // ## Bubble Chart ##
//     bubbleChart(data);
//   }); 
// }


function buildCharts(nDataset){
    
  var crashes = []
  var years = []

  var newURL = `/airplanecrashes/${nDataset}`;
  console.log(newURL);
  d3.json(newURL).then((data) => {
      Object.entries(data).forEach(([key,value]) =>{
        crashes.push(value["crashes"]);
        years.push(value["year"]);
      });

      var trace1 = {
        x: years,
        y: crashes,
        type: "bar"
      };

      // Create the data array for the plot
      var data = [trace1];
    
      // Define the plot layout
      var layout = {
        title: "Airplane Crashes Per Year",
        xaxis: { title: "Years" },
        yaxis: { title: "Airplane Crashes" }
      };
    
      // Plot the chart to a div tag with id "bar-plot"
      Plotly.newPlot("bar-plot", data, layout);
    });
    
}

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selAirline");

//   // Use the list of sample names to populate the select options
//   var APILink = "http://127.0.0.1:5000/airplanesafety"
      
//       var airlineval;
//       d3.json(APILink).then((airlineNames) => {
//         //console.log(airlineNames);
//         airlineNames.forEach((airline) => {
//           // console.log(airline["airlines"]);
//           airlineval = airline["airlines"];
//           // console.log(airline["fatalities_85_99"]);
//           // selector
//           //   .append("option")
//           //   .text(airlineval)
//           //   .property("value", airlineval)  
            
//             //creating dropdown box values or options dynamically
//       // for(var i=0;i<arr.length;i++){
//           d3.select("#selAirline").append("option")
//               .text(airlineval)
//               .property("value", airlineval) ;
//   // }
//         });
      
//     // Use the first airlines from the list to build the initial plots
//     const firstairline = airlineNames[0];
//     buildCharts(airlineNames);
//     //buildMetadata(airlineNames);
//   });
// }  

function init() {
  // Plot the default route once the page loads
  var crashes = []
  var years = []

  var defaultURL = "/airplanecrashes/dataset1";
  d3.json(defaultURL).then((data) => {
      Object.entries(data).forEach(([key,value]) =>{
        crashes.push(value["crashes"]);
        years.push(value["year"]);
      });

      var trace1 = {
        x: years,
        y: crashes,
        type: "bar"
      };

      // Create the data array for the plot
      var data = [trace1];
    
      // Define the plot layout
      var layout = {
        title: "Airplane Crashes Per Year",
        xaxis: { title: "Years" },
        yaxis: { title: "Airplane Crashes" }
      };
    
      // Plot the chart to a div tag with id "bar-plot"
      Plotly.newPlot("bar-plot", data, layout);
    });  
  }

  // Create the Trace
  


function optionChanged(newDataset) {
  console.log(newDataset);
  // Fetch new data each time a new sample is selected
  buildCharts(newDataset);
  //buildMetadata(newAirline);
}
// Initialize the dashboard
init();

