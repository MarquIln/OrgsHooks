/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Stars from '../../../../../components/Stars';

export default function EachFarmer({ name, image, distance, stars }) {
    const [ selected, setSelected ] = useState(false);

    return <TouchableOpacity 
                style = { styles.card }
                onPress = {() => setSelected(!selected)}
        >
        <Image source = { image } style = { styles.image } accessiblityLabel = { name } />
        <View style = { styles.info }>
            <View>
                <Text style = { styles.name }>{ name }</Text>
                <Stars 
                amount = {stars}
                editable = {selected}
                big = {selected} />
            </View>
            <Text style = { styles.distance }>{ distance }</Text>
        </View>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
});
