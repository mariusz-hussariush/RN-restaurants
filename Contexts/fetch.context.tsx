import React, { createContext, useEffect, useState, useContext } from 'react'
import { FetchUrl } from '../Constants/fetchUrl'
import {API_KEY} from 'react-native-dotenv'
import { Cuisine, DataConsumer } from '../Models/models'

const DataContext = createContext<DataConsumer>(undefined)

type Props = {
    children?: React.ReactNode
}

export const DataProvider = ({...props}) => {
    const [restaurants, setRestaurants] = useState<any>(undefined)
    const [cuisine, setCuisine] = useState<Cuisine>('sushi')
    
    useEffect(() => {
        // console.log(`${FetchUrl}${cuisine}${FetchUrlLocation}`);
        
    fetch(FetchUrl(cuisine), {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.info('Success:', data.businesses.length);
        setRestaurants(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
        
    }, [])

    const updateCuisine = (value: Cuisine) => setCuisine(value)

    return <DataContext.Provider value={{restaurants, updateCuisine}} {...props}/>
}

export const useData = () => {
    const context = useContext(DataContext);
    if(context === undefined) {
        throw new Error('use within DataProvider');
    }
    return context;
}
