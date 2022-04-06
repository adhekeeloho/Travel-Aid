/* eslint-disable consistent-return */
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-key":
              "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//     // restaurant_tagcategory_standalone: "10591",
//     // restaurant_tagcategory: "10591",
//     // limit: "30",
//     // currency: "USD",
//     // open_now: "false",
//     // lunit: "km",
//     // lang: "en_US",
//   },
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "02b966095emshcbc7a3af74f3467p13c02djsn00b51e597cb1",
//   },
// };


// export const getPlacesData = async () => {
//     try{
//         const { data: { data }} = await axios.get(URL, options);
//         return data;
//     } catch(error) {
//             console.log(error)
//     }
// }