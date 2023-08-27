/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import star from '../assets/star.png';
import greyStar from '../assets/greyStar.png';

export default function EachStar({
    onPress,
    active = false,
    full,
    big = false,
}) {
    const styles = stylesFunction(big);

    const getImage = () => {
        if (full) {
            return star;
        }
        return greyStar;
    };

    return <TouchableOpacity
            onPress= {onPress}i
            disabled = {!active}
            >
    <Image source = {getImage()} style = {styles.star} />
</TouchableOpacity>;
}

const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
    },
});
