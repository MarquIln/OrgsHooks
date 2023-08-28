/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text } from 'react-native';
import useFarmers from '../../../../../hooks/useFarmers';

import EachFarmer from '../EachFarmer/EachFarmer';
import { FarmersStyles } from './styles';

export default function Farmers({ header: Header }) {
    const [title, list ] = useFarmers();

    // eslint-disable-next-line react/no-unstable-nested-components
    const HeaderList = () => {
        return <>
            <Header />
            <Text style = { FarmersStyles.title }>{ title }</Text>
        </>;
    };

    return <FlatList
        data = {list}
        renderItem = {({item}) => <EachFarmer {...item} />}
        keyExtractor= {(name) => name}
        ListHeaderComponent = {HeaderList}
    />;
}
