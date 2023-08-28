/* eslint-disable prettier/prettier */
import React, { useMemo, useReducer } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Stars from '../../../../../components/Stars';
import { EachFarmerStyles } from './styles';

const distanceAndMeters = (distance) => {
    console.log('distance');
    return `${distance}m`;
}

export default function EachFarmer({ name, image, distance, stars }) {
    const [ selected, dispatch ] = useReducer(
        (selected) => !selected,
        false
    );


    const TextDistance = useMemo(
        () => distanceAndMeters(distance),
        [distance]
    );

    return <TouchableOpacity
            style = {  EachFarmerStyles.card }
            onPress = {dispatch}
    >
        <Image source = { image } style = { EachFarmerStyles.image } accessiblityLabel = { name } />
        <View style = { EachFarmerStyles.info }>
            <View>
                <Text style = { EachFarmerStyles.name }>{ name }</Text>
                <Stars
                amount = {stars}
                editable = {selected}
                big = {selected} />
            </View>
            <Text style = { EachFarmerStyles.distance }>{ TextDistance }</Text>
        </View>
    </TouchableOpacity>;
}
