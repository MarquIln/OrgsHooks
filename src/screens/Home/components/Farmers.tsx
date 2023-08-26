/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { loadFarmers } from '../../../services/loadData';

export default function Farmers() {
    const [ title, setTitle ] = useState('');
    const [ list, setList ] = useState([]);

    useEffect(() => {
        const callback = loadFarmers();
        setTitle(callback.title);
        setList(callback.list);
    }, []);

    return (<FlatList
        data = {list}
        renderItem = {({item: { name }}) => <Text>{name}</Text>}
        ListHeaderComponent = {() => <Text>{ title }</Text>}
        />
    );
}
