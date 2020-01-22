import React, { FunctionComponent } from 'react'
import { View, Text, Image } from 'react-native'
import { Restaurant } from '../Models/models'

type Props = { 
    restaurant: Restaurant
}

const FlatListItemComponent: FunctionComponent<Props> = ({restaurant}) => {
    const {name,location, image_url} = restaurant;
console.log(image_url);

    return (
        <View>
            <Image
                style={{ width: 50, height: 50 }}
                source={{uri:image_url}}
            />
            <Text>{name}</Text>
            <Text>{location?.address1}</Text>
        </View>
    )
}

export default FlatListItemComponent