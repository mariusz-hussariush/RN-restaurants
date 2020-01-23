import React, { FunctionComponent } from 'react'
import { View, Image, ViewStyle, TextStyle, StyleSheet, ImageStyle, Linking, TouchableOpacity } from 'react-native'
import { Restaurant } from '../Models/models'
import { Container, Header, Content, Card, CardItem, Body, Text, Right, Left } from 'native-base';

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
            alignItems:'stretch',
            justifyContent:'flex-start',
            flex: 2
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
        <Card>
            <CardItem cardBody>
                <Image source={{ uri: image_url }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
                <Left style={styles.column2}>
                    <Text style={styles.title}>{name}</Text>
                    {phone ?
                        (<TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
                            <Text style={styles.phoneLink}>{phone}</Text>
                        </TouchableOpacity>) :
                        <Text>Sorry, no phone number</Text>}
                    <Text>{location?.address1 ? location?.address1 : 'Sorry, no address.'} {location?.city ? location?.city : 'Sorry, no city.' }</Text>
                </Left>
                <Right>
                    <Text style={{ flex: 1 }}>Price: {price}</Text>
                    <Text style={{ flex: 1 }}>Rating: {rating}</Text>
                </Right>
            </CardItem></Card>
    )
}

export default FlatListItemComponent