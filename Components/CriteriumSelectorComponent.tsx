import React, { FunctionComponent, Fragment } from 'react'
import { FilterCriteria } from '../Constants/constants'
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dish } from '../Models/models'
import { useData } from '../Contexts/fetch.context';

interface Style {
    container: ViewStyle
    buttonContainer: ViewStyle
    circle: ViewStyle
    checkedCircle: ViewStyle
    label: TextStyle
}

const styles = StyleSheet.create<Style>(
    {
        container: {
            flexDirection: 'row'
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
            flex: 1,
        },
        circle: {
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ACACAC',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft:10 
        },
        checkedCircle: {
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#794F9B',
            position: 'relative',
            left: -17
        },
        label: {
            textTransform: 'capitalize'
        }
    }
);

const CriteriumSelector: FunctionComponent = () => {
    const { criterium, updateCriterium } = useData()
    return <View style={styles.container}>
        {FilterCriteria.map((item: Dish) => {
            return (
                <View key={item} style={styles.buttonContainer}>
                    <Text style={styles.label}>{item}</Text>
                    <TouchableOpacity onPress={() => updateCriterium(item)} style={styles.circle} />
                    {criterium === item && (<View style={styles.checkedCircle}/>) }
                </View>
            )
        })}
    </View>
}


export default CriteriumSelector