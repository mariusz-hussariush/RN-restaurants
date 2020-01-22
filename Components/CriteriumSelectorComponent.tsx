import React, { FunctionComponent, Fragment } from 'react'
import { FilterCriteria } from '../Constants/constants'
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dish } from '../Models/models'
import { useData } from '../Contexts/fetch.context';


interface Style {
    buttonContainer: ViewStyle;
    circle: ViewStyle;
    checkedCircle: ViewStyle;
    label: TextStyle;
}


const styles = StyleSheet.create<Style>(
    {
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
        },
        circle: {
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ACACAC',
            alignItems: 'center',
            justifyContent: 'center',
        },
        checkedCircle: {
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#794F9B',
        },
        label: {
            textTransform: 'capitalize'
        }
    }
);

const CriteriumSelector: FunctionComponent = () => {
    const { updateCriterium } = useData()
    return <Fragment>
        {FilterCriteria.map((criterium: Dish) => {
            return (
                <View key={criterium} style={styles.buttonContainer}>
                    <Text style={styles.label}>{criterium}</Text>
                    <TouchableOpacity onPress={() => updateCriterium(criterium)} style={styles.circle}/>
                </View>
            )
        })}
    </Fragment>
}


export default CriteriumSelector