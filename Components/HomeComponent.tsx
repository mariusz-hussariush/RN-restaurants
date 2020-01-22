import React, { FunctionComponent } from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { useData } from '../Contexts/fetch.context'

// type Props = {
//     restaurants: any
// }
const HomeComponent: FunctionComponent = ( ) => {
    const {restaurants} = useData();
    // console.log(restaurants.businesses[0].name, 'in home');
    
    return (
        <View>
            <Text> testes home component </Text>
            {restaurants && <FlatList data={restaurants.businesses} renderItem={({item}: any)  => {
                // { console.log(Object.keys(restaurant), 'INNERd')}
                return (<Text>{item.name} {item.location.address1}</Text> )
            }}>
            </FlatList>}
        </View>
    )

}
export default HomeComponent;