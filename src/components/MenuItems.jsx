import React from 'react'
import { Link } from 'react-router-dom'
const lists = ['photo', 'illustration', 'vector']
const MenuItems = () => {
    return (
        <div className="flex  items-center   justify-around flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
            {lists.map((list, i) => (
                <div className="group" key={i}>
                    <Link to={`/gallery_type/${list}`} className="text-base">
                        {list}
                    </Link>
                    <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems
