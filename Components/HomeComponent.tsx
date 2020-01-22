import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { useData } from '../Contexts/fetch.context'

// type Props = {
//     restaurants: any
// }
const HomeComponent: FunctionComponent = ( ) => {
    const {restaurants} = useData();
    console.log(restaurants, 'in home');
    
    return (
        <View>
            <Text> testes home component </Text>
        </View>
    )

}
export default HomeComponent;