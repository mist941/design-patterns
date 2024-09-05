import {WeatherStation} from "./WeatherStation";
import {AirportObserver, RoadServicesObserver, SchoolObserver} from "./Observer";

const weatherStation = new WeatherStation();
const school = new SchoolObserver();
const airport = new AirportObserver();
const roadServices = new RoadServicesObserver();

weatherStation
  .addObserver(school)
  .addObserver(airport)
  .addObserver(roadServices);

weatherStation.handleStorm(1);