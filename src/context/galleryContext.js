import axios from 'axios'
import { fatchApi } from '../api/fetchApi'

const { createContext, useEffect, useState } = require('react')

const GalleryContext = createContext({
    images: [],
    isLoading: false,
    searchItem: '',
    handleChange: () => {},
    onClick: () => {},
    handleTypes: () => {},
    types: '',
    isError: '',
})

export const GalleryContextApi = ({ children }) => {
    const [images, setImages] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [loading, setloading] = useState(false)
    const [results, setResults] = useState('')
    const [types, setTypes] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }

    const handleTypes = (name) => {
        setTypes(name)
    }

    const onClick = () => {
        if (searchItem) {
            setResults(searchItem)
            setSearchItem('')
        }
    }

    useEffect(() => {
        const getImages = async () => {
            setloading(true)

            try {
                const { data } = await axios.get(fatchApi(searchItem, types))
                if (data) {
                    setloading(false)
                    setImages(data.hits)
                    console.log(process.env.REACT_APP_API_KEY)
                }
            } catch (error) {
                setloading(true)
                setTimeout(() => {
                    setloading(false)
                    setError(error.message)
                }, 5000)
            }
        }
        getImages()
    }, [results, searchItem, types])
    return (
        <GalleryContext.Provider
            value={{
                images,
                isLoading: loading,
                searchItem,
                handleChange,
                onClick,
                handleTypes,
                types,
                isError: error,
            }}
        >
            {children}
        </GalleryContext.Provider>
    )
}

export default GalleryContext
