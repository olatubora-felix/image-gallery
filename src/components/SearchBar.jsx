import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GalleryContext from '../context/galleryContext'

const SearchBar = () => {
    const Navigate = useNavigate()
    const ctx = useContext(GalleryContext)
    return (
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            {/* <!-- Input and SVG Container --> */}
            <div className="flex justify-between border-b">
                <input
                    type="text"
                    className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
                    placeholder="Search"
                    onChange={ctx.handleChange}
                    value={ctx.searchItem}
                />
                <button onClick={ctx.onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 text-gray-300 duration-200 hover:scale-110"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </div>
            <button
                className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
                onClick={() => Navigate('/')}
            >
                Home
            </button>
        </div>
    )
}

export default SearchBar
