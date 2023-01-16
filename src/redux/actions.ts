import axios, { AxiosResponse } from 'axios'
import * as Types from './types'

declare var process: {
  env: {
    NEXT_PUBLIC_WEATHER_APP_API: string
  }
}

export const loading = (): { type: string } => ({ type: Types.LOADING })
export const success = (): { type: string } => ({ type: Types.SUCCESS })
export const error = (): { type: string } => ({ type: Types.ERROR })

export const getData = (lat: string, long: string): any => async (
  dispatch: Function,
): Promise<void> => {
  try {
    loading()
    const res: AxiosResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_APP_API}`,
    )
    dispatch({ type: Types.GETDATA, payload: res.data })
    success()
  } catch (err) {
    error()
  }
}
export const searchData = (name: string): any => async (
  dispatch: Function,
): Promise<void> => {
  try {
    loading()
    const res: AxiosResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&exclude=hourly,minutely&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_APP_API}`,
    )
    console.log(res)
    dispatch({ type: Types.SEARCHED_DATA, payload: res.data })
    success()
  } catch (err) {
    error()
  }
}
