import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GalleryType from './pages/GalleryType'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/gallery_type/:name" element={<GalleryType />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
