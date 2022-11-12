import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import GalleryItem from '../components/GalleryItem'
import MainLayouts from '../components/layout/MainLayouts'
import GalleryContext from '../context/galleryContext'

const GalleryType = () => {
    const { name } = useParams()
    const ctx = useContext(GalleryContext)
    useEffect(() => {
        ctx.handleTypes(name)
    }, [ctx, name])
    return (
        <MainLayouts>
            <Gallery />
        </MainLayouts>
    )
}

export default GalleryType
