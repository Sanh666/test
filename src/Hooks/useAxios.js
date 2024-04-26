import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (param) => {
    const [response, setResponse] = useState([]); // Default response state to null
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(''); // Default error state to null
    axios.defaults.baseURL = 'https://api.unsplash.com'; // Fixed typo

    const fetchData = async (url) => { // Added 'url' parameter
        try {
            setIsLoading(true);
            const res = await axios(url); // Used 'axios.get' to fetch data
            setResponse(res.data.results);
        } catch (err) {
            setError(err); // Set entire error object
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(param);
    }, [param]);

    // Return an object containing response, isLoading, error, and fetchData function
    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url) // or just 'fetchData' in ES6 shorthand syntax
    };
};

export default useAxios;
