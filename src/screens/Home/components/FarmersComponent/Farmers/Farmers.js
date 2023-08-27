import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { loadFarmers } from '../../../../../services/loadData';

import EachFarmer from '../EachFarmer/EachFarmer';
import { FarmersStyles } from './styles';

export default function Farmers({ header: Header }) {
    const [ title, setTitle ] = useState('');
    const [ list, setList ] = useState([]);

    useEffect(() => {
        const callback = loadFarmers();
        setTitle(callback.title);
        setList(callback.list);
    }, []);

    const HeaderList = () => {
        return (
            <>
                <Header />
                    <Text style = { FarmersStyles.title }>{ title }</Text>
            </>
        );
    };

    return (
        <FlatList
        data = {list}
        renderItem = {({item}) => <EachFarmer {...item} />}
        keyExtractor= {(name) => name}
        ListHeaderComponent = {HeaderList}
        />
    );
}
