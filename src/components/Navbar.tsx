import React, { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { State } from '../redux/store'
import { searchData } from '../redux/actions'

interface Props {}

const Navbar = (props: Props) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input) alert('Please input any valid city name!')
    // dispatch(searchData(input))
  }
  return (
    <div className="sticky top-0 w-full h-[80px] bg-[#5e564f] flex items-center px-3 justify-between">
      <div className="h-full w-[50px] flex items-center">
        <img
          className="w-full object-cover rounded-xl hidden md:flex"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiC80PakQGRvaGEC1Dko0etCyzlilRmaKFVR84-hvkg&s"
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[500px] h-[40px] flex justify-center items-center border rounded-2xl px-5 space-x-3"
      >
        <BsSearch />
        <input
          onChange={({ target: { value } }) => setInput(value)}
          type="text"
          value={input}
          className="w-[500px] h-[40px] outline-none border-none bg-inherit"
          placeholder="Search by cityName..."
        />
      </form>
    </div>
  )
}

export default Navbar
