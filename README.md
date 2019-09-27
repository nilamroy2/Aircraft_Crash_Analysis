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

![2-BasicMap](Images/crash20Years.png)

We have also daynamically loaded data from Flask server and collected the JSON data for every 10 years and ploted it in a bar chart.





2. **Import & Visualize the Data **

    We Create a map using Leaflet that plots worst geographical location which is prone to crash and one more map which shows the deadliest accident happened in last 100 years based on their longitude and latitude.

   * data markers is reflecting the magnitude of the fetalities in their size and color.Fetalities with higher magnitudes were appeared in larger and different in color according to fetalities rate.

   * Include popups that provide additional information about the crash when a marker is clicked.

   * Create a legend that will provide context for our map data.

   * our visualization looks something like the map above.

- - -


- - -


### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
