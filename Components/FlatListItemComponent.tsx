import React, { FunctionComponent } from 'react'
import { View, Text, Image, ViewStyle, TextStyle, StyleSheet, ImageStyle, Linking, TouchableOpacity } from 'react-native'
import { Restaurant } from '../Models/models'

type Props = {
    restaurant: Restaurant
}

interface Style {
    column1: ViewStyle
    column2: ViewStyle
    title: TextStyle
    image: ImageStyle
    phoneLink: ViewStyle
    row: ViewStyle
}

const styles = StyleSheet.create<Style>(
    {
        column1: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            marginBottom: 20
        },
        row: {
            flexDirection: 'row',
            alignContent: 'stretch'
        },
        column2: {
            flexDirection: 'column',
            flex: 3
        },
        image:
        {
            flex: 1,
            height: 75,
            maxWidth: '100%',
            marginRight: 10
        },
        title: {
            fontWeight: 'bold'
        },
        phoneLink: {
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textDecorationColor: '#000'
        }
    }
);

const FlatListItemComponent: FunctionComponent<Props> = ({ restaurant }) => {
    const { name, location, image_url, rating, price, phone } = restaurant;
    return (
        <View style={styles.column1}>
            <Image
                style={styles.image}
                source={{ uri: image_url }}
            />
            <View style={styles.column2}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                    <Text style={{ flex: 1 }}>Price: {price}</Text>
                    <Text style={{ flex: 1 }}>Rating: {rating}</Text>
                </View>
                {phone ? (<TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
                    <Text style={styles.phoneLink}>{phone}</Text>
                </TouchableOpacity>) :
                    <Text>Sorry, no phone number</Text>}
                <Text>{location?.address1}, {location?.city}</Text>
            </View>
        </View>
    )
}

export default FlatListItemComponent