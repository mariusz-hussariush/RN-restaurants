import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import HomeComponent from '../Components/HomeComponent'
import {DataProvider} from '../Contexts/data.context'
import CriteriumSelector from '../Components/CriteriumSelectorComponent'

const HomeScreen: FunctionComponent = () => {
    return (
    <View style={{height: '100%', paddingBottom:20}}>
        <DataProvider>
            <CriteriumSelector/>
            <HomeComponent/>
        </DataProvider>
    </View>
    )
}

export default HomeScreen;