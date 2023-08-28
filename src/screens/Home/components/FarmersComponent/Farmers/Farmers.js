/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text } from 'react-native';
import useFarmers from '../../../../../hooks/useFarmers';

import EachFarmer from '../EachFarmer/EachFarmer';
import { FarmersStyles } from './styles';

const HeaderList = ( Header, title ) => {
    return <>
        <Header />
        <Text style = { FarmersStyles.title }>{ title }</Text>
    </>;
};

export default function Farmers({ header: Header }) {
    const [title, list ] = useFarmers();

    return (
        <FlatList
        data = {list}
        renderItem = {({item}) => <EachFarmer {...item} />}
        keyExtractor= {(name) => name}
        ListHeaderComponent = {() => <HeaderList Header = { Header } title = { title } />}
        />
    );
}
