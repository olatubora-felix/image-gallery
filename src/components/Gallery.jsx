import React, { Fragment, useContext } from 'react'
import GalleryContext from '../context/galleryContext'
import GalleryItem from '../components/GalleryItem'

const Gallery = () => {
    const ctx = useContext(GalleryContext)
    const { images, isLoading, isError } = ctx
    console.log(images)
    if (isError) {
        return <h1 className="text-3xl">{isError}</h1>
    }
    return (
        <Fragment>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {images.length !== 0 ? (
                    images?.map((image) => (
                        <GalleryItem
                            key={image.id}
                            image={image}
                            isLoading={isLoading}
                        />
                    ))
                ) : (
                    <h1 className="text-3xl text-center text-red-500">
                        No Photo Found
                    </h1>
                )}
            </div>
        </Fragment>
    )
}

export default Gallery
