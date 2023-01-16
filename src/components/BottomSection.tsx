import React from 'react'
import { useSelector } from 'react-redux'
import { DayDiv } from './DayDiv'
import { TodayWeatherSmallDiv } from './TodayWeatherSmallDiv'
import { State } from '../redux/store'
import { v4 } from 'uuid'

interface Props {}

const BottomSection = (props: Props) => {
  const { data } = useSelector((s: State) => s.data)
  return (
    <div
      className="absolute bottom-0 w-full h-[300px] mt-[20px] bg-[#655c54] opacity-[0.9] flex items-center
      lg:justify-center space-x-4 overflow-x-scroll px-1"
    >
      {data &&
        data.daily &&
        data.daily.map((ele: any, ind: number) => {
          if (ind < 7) return <DayDiv {...ele} ind={ind} key={v4()} />
        })}
    </div>
  )
}

export default BottomSection
