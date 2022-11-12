import React from 'react'
import MenuItems from '../MenuItems'
import SearchBar from '../SearchBar'

const MainLayouts = ({ children }) => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-cyan-50">
            <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
                <MenuItems />
                <SearchBar />
                {children}
            </div>
        </main>
    )
}

export default MainLayouts
