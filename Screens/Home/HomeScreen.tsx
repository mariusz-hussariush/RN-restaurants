import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
// import HomeComponent from '../../Components/Home/HomeComponent'
import HomeComponent from '../../Components/HomeComponent'

const HomeScreen: FunctionComponent = () => {
    return (
    <View>
        {/* <HomeComponent restaurants={'test'}/> */}
        <Text>home inner screen</Text>
    </View>
    )
}

export default HomeScreen;