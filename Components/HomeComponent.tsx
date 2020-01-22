import React, { FunctionComponent } from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { useData } from '../Contexts/fetch.context'
import FlatListItemComponent from './FlatListItemComponent';

const HomeComponent: FunctionComponent = ( ) => {
    const {restaurants} = useData();
    
    return (
        <View>
            <Text> testes home component </Text>
            {restaurants && <FlatList data={restaurants.businesses} renderItem={({item}: any)  => {
console.log(item);

return <FlatListItemComponent restaurant={item}/>
            }}>
            </FlatList>}
        </View>
    )

}
export default HomeComponent;