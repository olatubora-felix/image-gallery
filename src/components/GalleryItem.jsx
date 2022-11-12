import benchmark from '../images/bookmark.svg'

const GalleryItem = ({ image, isLoading }) => {
    return (
        <div className="relative group">
            <img src={image.previewURL} alt="" className="w-72 h-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                    <div className="font-normal">
                        <p className="text-sm">{image.tags}</p>
                        <p className="text-xs">
                            {image.likes} likes - 35 Shares
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src={benchmark} alt="bookmark" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem
