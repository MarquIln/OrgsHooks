import React, { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import EachStar from './EachStar';

export default function Stars({
    amount : oldAmount,
    editable = false,
    big = false,
}) {
    const [ amount, setAmount] = useState(oldAmount);

    const RenderStars = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <EachStar
                    key = {i}
                    onPress = {() => setAmount(i + 1) }
                    active = {editable}
                    full = {i < amount}
                    big = {big} />
            );
        }
        return starsList;
    };

    return <View style = {styles.allStars}>
        <RenderStars />
    </View>;
}

const styles = StyleSheet.create({
    allStars: {
        flexDirection: 'row',
    },
});
