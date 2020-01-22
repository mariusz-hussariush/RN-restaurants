import React, { FunctionComponent } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useData } from '../Contexts/fetch.context'
import FlatListItemComponent from './FlatListItemComponent';

const HomeComponent: FunctionComponent = () => {
    const { restaurants } = useData();

    return (
        <View>
            {
                restaurants ? <FlatList data={restaurants.businesses.slice(0,10)} renderItem={({ item }: any) => {
                    return <FlatListItemComponent restaurant={item} />
                }} /> :
                    <ActivityIndicator style={{ position: 'relative', top: '40%'}} size="large" color="#19596b" />
            }
        </View>
    )

}
export default HomeComponent;