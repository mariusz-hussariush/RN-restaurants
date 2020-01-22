import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
// import HomeComponent from '../../Components/Home/HomeComponent'
import HomeComponent from '../Components/HomeComponent'
import {DataProvider} from '../Contexts/fetch.context'

const HomeScreen: FunctionComponent = () => {
    return (
    <View>
        <DataProvider>
            <HomeComponent/>
        </DataProvider>
        {/* <Text>home test screen</Text> */}
    </View>
    )
}

export default HomeScreen;