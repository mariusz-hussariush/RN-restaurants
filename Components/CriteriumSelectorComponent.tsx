import React, { FunctionComponent, Fragment } from 'react'
import { FilterCriteria } from '../Constants/constants'
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from 'react-native'
import { Dish } from '../Models/models'


// interface Style {
//     buttonContainer: ViewStyle;
//     circle: ViewStyle;
//     checkedCircle: TextStyle;
//     label: TextStyle;
// }


// interface IProps {
//     label: string;
//     buttonStyle?: StyleProp<ViewStyle>;
//     labelStyle?: StyleProp<TextStyle>;
// }

// const styles:Style = StyleSheet.create<Style>({
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 30,
//     },

//     circle: {
//         height: 20,
//         width: 20,
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#ACACAC',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     checkedCircle: {
//         width: 14,
//         height: 14,
//         borderRadius: 7,
//         backgroundColor: '#794F9B',
//     },
// });

const CriteriumSelector: FunctionComponent = () => {
return <Fragment>
    {FilterCriteria.map((criterium:Dish) => {
        return (
            <View key={criterium}>
                <Text>{criterium}</Text>
                <TouchableOpacity/>
            </View>
        )
    })}

</Fragment>
}


export default CriteriumSelector