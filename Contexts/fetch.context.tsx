import React, { createContext, useEffect, useState, useContext } from 'react'
import { FetchUrl } from '../Constants/fetchUrl'

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
        'Authorization': 'Bearer oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx',
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
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

