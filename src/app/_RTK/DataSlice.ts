import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type data = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
interface IDataSlice {
  name: string;
  data: data;
  loading: boolean;
  error: null | string;
}

export const fetchData = createAsyncThunk(
  "weather/fetchData",
  async (city: string) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},EG&limit=1&appid=${process.env.NEXT_PUBLIC_KEY}`
      );

      return res.data;
    } catch {
      return "Error fetching weather data";
    }
  }
);

const initialState: IDataSlice = {
  name: "weather",
  data: {} as data,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dataSlice.reducer;
