import React, { createContext, useEffect, useState, useContext } from 'react'
import { FetchUrl } from '../Constants/fetchUrl'
import {API_KEY} from 'react-native-dotenv'

type DataConsumer = {
    restaurants: any
}

const DataContext = createContext<DataConsumer>(undefined)

type Props = {
    children?: React.ReactNode
}

export const DataProvider = ({...props}) => {
    const [restaurants, setRestaurants] = useState<any>(undefined)
    useEffect(() => {
    fetch(FetchUrl, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.info('Success:');
        setRestaurants(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
        
    }, [])


    return <DataContext.Provider value={{restaurants}} {...props}/>
}

export const useData = () => {
    const context = useContext(DataContext);
    if(context === undefined) {
        throw new Error('use within DataProvider');
    }
    return context;
}

// const data = { username: 'example' };

