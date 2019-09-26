import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, desc
import datetime as dt

from flask import Flask, jsonify, render_template
from config import username,password

#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///Resources/hawaii.sqlite")

engine = create_engine(f'postgresql://{username}:{password}@localhost:5432/airlines_db',echo=False)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)
Base.classes.keys()

# Save reference to the table
crashes = Base.classes.airplane_crashes
safety = Base.classes.airlines_safety
georegions = Base.classes.worst_geo_regions
accidents = Base.classes.worst_accidents

#inspect the tables metadata
inspector = inspect(engine)

# Create our session (link) from Python to the DB
session = Session(engine)

# max_date = session.query(func.max(Measurement.date)).scalar()

# strt_date = dt.datetime.strptime(max_date,'%Y-%m-%d') - dt.timedelta(days=365)
strt_year = 2008
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

#@app.route("/")
#def welcome():
"""List all available api routes."""
    #return (
        #f"Available Routes:<br/>"
        #f"/airplanecrashes<br/>"
        #f"/airplanesafety<br/>"
        #f"/worstaccidents<br/>"
        #f"/worst_geo_loc"
    #)
@app.route("/")
def index():
    """Return the homepage."""
    # return render_template("PlaneType.html")
    return render_template("index.html")
@app.route("/Airline.html")
def airline():
    return render_template("Airline.html")
@app.route("/index.html")
def home():
    return render_template("index.html")
@app.route("/Timeline.html")
def Timeline():
    return render_template("Timeline.html")
@app.route("/PlaneType.html")
def plane():
    return render_template("PlaneType.html")
@app.route("/report.html")
def report():
    return render_template("report.html")
@app.route("/Worstgeoloc.html")
def geoloc():
    return render_template("Worstgeoloc.html")
@app.route("/WorstAccident.html")
def worstacc():
    return render_template("WorstAccident.html")

@app.route("/airplanecrashyear")
def airplanecrashyear():
   """Return a dicionary of airplane crashes"""
   # Start the session
   session = Session(engine)
   results = session.query(crashes.year).group_by(crashes.year).order_by(crashes.year).all()
    #Create a dictionary from the query data
   crash_year = []
   for year in results:
       year_dict = {}
       year_dict["year"] = year
    #    year_dict.append(year)
       crash_year.append(year_dict)
   return jsonify(crash_year)   

#    worst_geo_loc = []
#    for year  in results:
#        worst_geo_dict = {}
#        worst_geo_dict["year"] = year
            
#        worst_geo_loc.append(worst_geo_dict)
#    return jsonify(worst_geo_loc)


@app.route("/airplanecrashes/<dataset>")
def airplanecrashes(dataset):
    """Return a dicionary of airplane crashes"""
    # Start the session
    session = Session(engine)
    
#     results = session.query(crashes.year,crashes.location,crashes.operator,crashes.aboard,crashes.fatalities,crashes.ground,crashes.summary).all()

#     results = session.query(crashes.year,crashes.operator,func.count(crashes.operator)).\
#     filter(crashes.year >= 1900).filter(crashes.year <= maxyear).group_by(crashes.year,crashes.operator).\
#     order_by((crashes.year).desc()).all()
    
    

    if(dataset == 'dataset1'):
        minyear = 1910
        maxyear = 1930
    elif(dataset == "dataset2"):
        minyear = 1931
        maxyear = 1950
    elif(dataset == "dataset3"):
        minyear = 1951
        maxyear = 1970
    elif(dataset == "dataset4"):
        minyear = 1971
        maxyear = 1990
    elif(dataset == "dataset5"):
        minyear = 1991
        maxyear = 2010
    else: 
       minyear = 1910
       maxyear = 1930
    

    # results = session.query(crashes.year,crashes.operator,func.count(crashes.operator),func.sum(crashes.aboard),func.sum(crashes.fatalities),func.sum(crashes.ground)).\
    # filter(crashes.year == maxyear).group_by(crashes.year,crashes.operator).\
    # order_by((crashes.year).desc()).all()

    results = session.query(crashes.year,func.count(crashes.year)).\
    filter(crashes.year >= minyear).filter(crashes.year <= maxyear).group_by(crashes.year).\
    order_by(crashes.year).all()

#      results1 = session.query(crashes.aboard,crashes.fatalities,crashes.ground).\
#         all()
#     #Create a dictionary from the query data
    crash_location = []
#     for year,location,operator,aboard,fatalities,ground,summary in results:
#         crash_dict = {}
#         crash_dict["year"] = year
#         crash_dict["location"] = location
#         crash_dict["operator"] = operator
#         crash_dict["aboard"] = aboard
#         crash_dict["fatalities"] = fatalities
#         crash_dict["ground"] = ground
#         crash_dict["summary"] = summary
        
#         crash_location.append(crash_dict)
    
    for year,yearcnt in results:
        crash_dict = {}
        crash_dict["year"] = year
        # crash_dict["operator"] = operator
        crash_dict["crashes"] = yearcnt
        # crash_dict["aboardTotal"] = aboard
        # crash_dict["fatalitiesTotal"] = fatalities
        # crash_dict["groundTotal"] = ground
        
        crash_location.append(crash_dict)
    
    return jsonify(crash_location)

@app.route("/crashesyear")
def crashesyear():
    """Return a dicionary of airplane crashes"""
    # Start the session
    session = Session(engine)
    
    results = session.query(crashes.year,func.count(crashes.operator)).\
    group_by(crashes.year).\
    order_by(crashes.year).all()

#     #Create a dictionary from the query data
    crash_count = []

    for year,operatorcnt in results:
        crash_dict = {}
        crash_dict["year"] = year
        crash_dict["operator_count"] = operatorcnt
        
        crash_count.append(crash_dict)
    
    return jsonify(crash_count)

@app.route("/airplanesafety")
def airplanesafety():
    """Return a dictionary of airplane safety data"""
    session = Session(engine)
    
    # results = session.query(safety.airlines,func.sum(safety.incidents_85_99,safety.incidents_00_14),func.sum(safety.fatal_accidents_85_99,safety.fatal_accidents_00_14),func.sum(safety.fatalities_85_99,safety.fatalities_00_14)).\
    #     order_by(func.sum(safety.fatalities_85_99,safety.fatalities_00_14).desc()).limit(20)
    
    results = session.query(safety.airlines,safety.incidents_85_99,safety.fatal_accidents_85_99,safety.fatalities_85_99,safety.incidents_00_14,safety.fatal_accidents_00_14,safety.fatalities_00_14).\
        order_by(func.sum(safety.fatalities_85_99,safety.fatalities_00_14).desc()).limit(20)
    
#Create a dictionary from the query data
    airline_safety = []
    for airlines,incidents_85_99,fatal_accidents_85_99,fatalities_85_99,incidents_00_14,fatal_accidents_00_14,fatalities_00_14 in results:
        safety_dict = {}
        safety_dict["airlines"] = airlines
        safety_dict["incidents_85_99"] = incidents_85_99
        safety_dict["fatal_accidents_85_99"] = fatal_accidents_85_99
        safety_dict["fatalities_85_99"] = fatalities_85_99
        safety_dict["incidents_00_14"] = incidents_00_14
        safety_dict["fatal_accidents_00_14"] = fatal_accidents_00_14
        safety_dict["fatalities_00_14"] = fatalities_00_14
        
        airline_safety.append(safety_dict)
        
    return jsonify(airline_safety)

@app.route("/worstaccidents")
def worstaccidents():
    """Return a json of worst 100 accidents in history"""
    session = Session(engine)
    
    results = session.query(accidents.fatalities,accidents.acc_date,accidents.location,accidents.carrier,accidents.type).all()

    #Create a dictionary from the query data
    worst_accidents = []
    for fatalities,acc_date,location,carrier,type in results:
        worst_acc_dict = {}
        worst_acc_dict["fatalities"] = fatalities
        worst_acc_dict["acc_date"] = acc_date
        worst_acc_dict["location"] = location
        worst_acc_dict["carrier"] = carrier
        worst_acc_dict["type"] = type
        
        worst_accidents.append(worst_acc_dict)
        
    return jsonify(worst_accidents)

@app.route("/worst_geo_loc")
def worst_geo_loc():
    """Returns a json for worst geo locations for accidents"""
    session = Session(engine)
    
    results = session.query(georegions.country,georegions.accidents,georegions.fatalities,georegions.ground_fatalities).all()

    worst_geo_loc = []
    for country, accidents, fatalities, ground_fatalities  in results:
        worst_geo_dict = {}
        worst_geo_dict["country"] = country
        worst_geo_dict["accidents"] = accidents
        worst_geo_dict["fatalities"] = fatalities
        worst_geo_dict["ground_fatalities"] = ground_fatalities

        worst_geo_loc.append(worst_geo_dict)

    return jsonify(worst_geo_loc)


if __name__ == '__main__':
    app.run(debug=True)
