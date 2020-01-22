import * as React from 'react'
import { FunctionComponent } from 'react'
import { View, Text } from 'react-native'

type Props = {
    restaurants: any
}
const HomeComponent: FunctionComponent<Props> = ( restaurants) => {
    return (<div>
        <Text> home component </Text>
        </div>)
        // <View>            
        // </View>
    

}
export default HomeComponent;