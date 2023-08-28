/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { loadFarmers } from '../services/loadData';

export default function useFarmers() {
    const [ title, setTitle ] = useState('');
    const [ list, setList ] = useState([]);

    useEffect(() => {
        const callback = loadFarmers();
        setTitle(callback.title);
        setList(callback.list);
    }, []);

    return [title, list];
}
