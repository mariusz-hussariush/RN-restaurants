import React, { FunctionComponent } from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { useData } from '../Contexts/fetch.context'

const HomeComponent: FunctionComponent = ( ) => {
    const {restaurants} = useData();
    
    return (
        <View>
            <Text> testes home component </Text>
            {restaurants && <FlatList data={restaurants.businesses} renderItem={({item}: any)  => {
                return (<Text>{item.name} {item.location.address1}</Text> )
            }}>
            </FlatList>}
        </View>
    )

}
export default HomeComponent;