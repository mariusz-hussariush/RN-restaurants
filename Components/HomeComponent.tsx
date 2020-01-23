import React, { FunctionComponent } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useData } from '../Contexts/data.context'
import FlatListItemComponent from './FlatListItemComponent';
import { Container } from 'native-base';

const HomeComponent: FunctionComponent = () => {
    const { restaurants } = useData();
    return (
        <Container>
            {
                restaurants ? <FlatList data={restaurants.businesses.slice(0, 10)} renderItem={({ item }: any) => {
                    return <FlatListItemComponent restaurant={item} />
                }} /> :
                    <ActivityIndicator style={{ position: 'relative', top: '40%' }} size="large" color="#19596b" />
            }
        </Container>
    )

}
export default HomeComponent;