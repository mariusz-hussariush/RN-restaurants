import React, { FunctionComponent } from 'react'
import { View, Text, ScrollView } from 'react-native'
// import HomeComponent from '../../Components/Home/HomeComponent'
import HomeComponent from '../Components/HomeComponent'
import {DataProvider} from '../Contexts/fetch.context'
import CriteriumSelector from '../Components/CriteriumSelectorComponent'

const HomeScreen: FunctionComponent = () => {
    return (
    <View>
        <DataProvider>
            <CriteriumSelector/>
            <HomeComponent/>
        </DataProvider>
    </View>
    )
}

export default HomeScreen;