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
  feels_like: {
    day: number
    night: number
  }
}

export const TodayWeatherSmallDiv = (props: Props) => {
  return (
    <div className="min-w-[240px] h-full flex justify-center items-center">
      <div className="w-1/2">
        <img
          className="w-full"
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-white rounded-lg p-2 bg-[#44403c]">
          {days[props.ind]}
        </p>
        <p className="w-[70px] text-white rounded-lg p-2 font-semibold flex justify-center space-x-2">
          <span>Day- </span> <span>{props.feels_like.day}</span>
        </p>
        <p className="w-[70px] text-white rounded-lg p-2 font-semibold flex justify-center space-x-2">
          <span>Night- </span> <span>{props.feels_like.night}</span>
        </p>
      </div>
    </div>
  )
}
