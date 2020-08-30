import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchHook(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios(url)
            .then(result => setData(result.data))
    }, [url])


    return {
        data
    }

}

export default useFetchHook
