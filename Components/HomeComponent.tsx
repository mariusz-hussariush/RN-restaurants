import React, { FunctionComponent } from 'react'
import { View, FlatList } from 'react-native'
import { useData } from '../Contexts/fetch.context'
import FlatListItemComponent from './FlatListItemComponent';

const HomeComponent: FunctionComponent = () => {
    const { restaurants } = useData();

    return (
        <View>
            {restaurants && <FlatList data={restaurants.businesses} renderItem={({ item }: any) => {
                return <FlatListItemComponent restaurant={item} />
            }}/>}
        </View>
    )

}
export default HomeComponent;