# Aircraft_Crash_Analysis
                                         

## Background

![2-BasicMap](Images/crash.png)

Flying is considered as the safest way to travel as of today. But has that always been the case? Was flying as safe in the 20th century? Most of us have boarded an airplane manufactured by Boeing and Airbus, which are two of the biggest and most popular commercial flight manufacturers in the world. How many planes that have been manufactured by them have crashed in the past? What were some of the most common reasons for the crashes? It is questions like these that fueled our curiosity and interest towards this project- Aircraft crash analytics- a visual exploration of aircraft crashes since 1908.

The aviation industry is a mature industry, and is more than a hundred years old. So, there exists a lot of data in this field, especially aircraft crash data. This makes it very interesting, as we were able to grab data that helped us analyse the state of the aircraft safety over a period of an entire century!

Through this project we have explained in detail, the methodology and tools used for implementing the data pipeline, right from getting the data from CSV file,cleaning and formatting data in jupyter notebook,loading the data in Postgres Database and querying data as we need to show an attractive visualization.

## Structure:

The project is divided logically into three parts:

## Part 1- Data Collection
For this project data is mainly collected from
* aviation-safety.net/airlinesafety/
* Keggle.com/aircrash-data

## Part 2- Data Analysis
After successfully collecting the data we imported it in jupyter notebook.We have done Data cleaning and date formating in jupyter notebook.Finally we load it in a Postgres Database.


## Part 3- Data Visualization
For Data Visualization part we created one Bar Plot which will show the year wise crash data with total number of fetalities.

!(Images/crash20Years.png)


### Level 1: Basic Visualization

![2-BasicMap](Images/crash20Years.png)

Your first task is to visualize an earthquake data set.

1. **Get your data set**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualize the Data**

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   * Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

   * Include popups that provide additional information about the earthquake when a marker is clicked.

   * Create a legend that will provide context for your map data.

   * Your visualization should look something like the map above.

- - -

### Level 2: More Data 

![5-Advanced](Images/5-Advanced.png)

The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

In this step we are going to..

* Plot a second data set on our map.

* Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Add layer controls to our map.

- - -


### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
