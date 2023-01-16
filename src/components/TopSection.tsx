import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../redux/store'
import { getData } from '../redux/actions'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

interface Props {}

export const TopSection = (props: Props) => {
  const { data } = useSelector((s: State) => s.data)
  const dispatch = useDispatch()
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }

    function success(pos: any) {
      const crd = pos.coords
      dispatch(getData(`${crd.latitude}`, `${crd.longitude}`))
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])
  return (
    <div className="w-full h-[350px] z-[1] flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] h-full pt-6">
        <p className="w-full text-white text-[50px] md:text-[70px] text-[500] text-center">
          <span className="">
            {new Date().getHours() > 12
              ? new Date().getHours() % 12 < 10
                ? `0${new Date().getHours() % 12}`
                : new Date().getHours() % 12
              : new Date().getHours()}
          </span>
          :
          <span>
            {new Date().getMinutes() < 10
              ? `0${new Date().getMinutes()}`
              : new Date().getMinutes()}
          </span>{' '}
          <span>{+new Date().getHours() >= 12 ? 'PM' : 'AM'}</span>
        </p>
        <p className="w-full text-white text-[30px] text-[500] text-center ">
          <span>{days[new Date().getDay()]}</span>,
          <span>{new Date().getDate()}</span>{' '}
          <span>{months[new Date().getMonth()]}</span>
        </p>
        <div
          className="w-[220px] border text-white font-semibold
         bg-[#5e564f] p-5 rounded-lg m-auto mt-4"
        >
          <p className="flex w-full justify-between">
            <span>Humidity</span>
            <span>{data && data.current && data.current.humidity}</span>
          </p>
          <p className="flex w-full justify-between">
            <span>Pressure</span>
            <span>{data && data.current && data.current.pressure}</span>
          </p>
          <p className="flex w-full justify-between">
            <span>Wind Speed</span>
            <span>{data && data.current && data.current['wind_speed']}</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-full pt-10">
        <p className="w-full text-center text-[30px] md:text-[40px] text-white font-mono">
          <span>{data && data.timezone && data.timezone}</span> <span>IN</span>
        </p>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
  } catch (error) {}
}
