import React, { FunctionComponent } from 'react'
import { FilterCriteria } from '../Constants/constants'
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dish } from '../Models/models'
import { useData } from '../Contexts/data.context';
import { Radio } from 'native-base';

interface Style {
    container: ViewStyle
    buttonContainer: ViewStyle
    circle: ViewStyle
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
            marginLeft: 10
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
                    <Radio onPress={() => updateCriterium(item)} style={styles.circle} selected={criterium === item} />
                </View>
            )
        })}
    </View>
}

export default CriteriumSelector