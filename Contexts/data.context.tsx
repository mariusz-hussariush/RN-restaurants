import React, { createContext, useEffect, useState, useContext } from 'react'
import { FetchUrl, FilterCriteria, defaultLocation } from '../Constants/constants'
import { API_KEY } from 'react-native-dotenv'
import { Dish, DataConsumer } from '../Models/models'

const DataContext = createContext<DataConsumer>(undefined)

export const DataProvider = ({ ...props }) => {
    const [restaurants, setRestaurants] = useState<any>(undefined)
    const [criterium, setCriterium] = useState<Dish>(FilterCriteria[0])

    useEffect(() => {
        fetch(FetchUrl(criterium, defaultLocation), {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.info('Success');
                setRestaurants(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [criterium])

    const updateCriterium = (value: Dish) => { setRestaurants(undefined); setCriterium(value) }

    return <DataContext.Provider value={{ restaurants, updateCriterium, criterium }} {...props} />
}

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('use within DataProvider');
    }
    return context;
}
