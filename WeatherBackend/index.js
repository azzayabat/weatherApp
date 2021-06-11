const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;
app.use(express.json());

let lat = 0;
let lng = 0;
const params = "humidity,airTemperature1000hpa,visibility,windSpeed1000hpa";
app.get("/:city", async (req, res) => {
  const city = req.body.city;
  const data = await geoLocation(req.param.city);
  lng = data.features[0].geometry.coordinates[0];
  lat = data.features[0].geometry.coordinates[1];
  const weatherRes = await weatherAPI(lng, lat);
  const hourlyTemp = hourly(weatherRes);

  res.send({ data: hourlyTemp });
});

const hourly = (data) => {
  const date = new Date();

  let yearCur = new Date(date).getUTCFullYear();
  let monthCur = new Date(date).getMonth();
  let dayCur = new Date(date).getUTCDate();
  let hourCur = new Date(date).toLocaleTimeString();
  let currentDate = `${yearCur}/${monthCur}/${dayCur}`;
  let resultDates = [];
  for (let i of data) {
    let year = new Date(i.time).getUTCFullYear();
    let month = new Date(i.time).getMonth();
    let day = new Date(i.time).getUTCDate();
    let hour = new Date(i.time).toLocaleTimeString("en", {
      timeStyle: "short",
      hour12: false,
      timeZone: "UTC",
    });
    var dateApi = `${year}/${month}/${day}`;

    if (currentDate === dateApi) {
      resultDates.push(i);
    }
  }

  return resultDates;
};

const geoLocation = (city) => {
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYXp6YXlhMDMxNiIsImEiOiJja3ByM2UwMjQwNGlkMzFtbno3YXhoZXRtIn0.T8d7l10ywHxoT3eLW3vGqQ`
  )
    .then((response) => response.json())
    .then((result) => result);
};

const weatherAPI = async (lng, lat) => {
  return fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        method: "GET",
        Authorization:
          "3d11d576-caa3-11eb-862d-0242ac130002-3d11d5f8-caa3-11eb-862d-0242ac130002",
      },
    }
  )
    .then((response) => response.json())
    .then((jsonData) => {
      let data = jsonData.hours;

      return data;
    });
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
