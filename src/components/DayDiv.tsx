import React from 'react'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

interface Props {
  ind: number
  weather: Array<{ icon: string }>
  feels_like: {
    day: number
    night: number
  }
}

export const DayDiv = (props: Props) => {
  return (
    <div
      className="w-fit h-[85%] flex flex-col justify-center items-center
     py-1 px-7 rounded-lg border space-y-0"
    >
      <p className="text-white rounded-lg p-2 bg-[#44403c]">
        {days[props.ind]}
      </p>
      <div className="w-full">
        <img
          className="w-[80%] m-auto"
          src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col space-y-0 justify-center items-center">
        <p className="w-[80px] text-white rounded-lg p-2 font-semibold flex justify-center space-x-2">
          <span>Day: </span> <span>{props.feels_like.day}</span>
        </p>
        <p className="w-[80px] text-white rounded-lg p-2 font-semibold flex justify-center space-x-2">
          <span>Night: </span> <span>{props.feels_like.night}</span>
        </p>
      </div>
    </div>
  )
}
