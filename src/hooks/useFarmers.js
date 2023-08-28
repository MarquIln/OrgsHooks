import { useState, useEffect } from 'react';
import { loadFarmers } from '../services/loadData';

export default function useFarmers() {
    const [ title, setTitle ] = useState('');
    const [ list, setList ] = useState([]);

    useEffect(() => {
        const callback = loadFarmers();
        callback.list.sort(
            (farmer1, farmer2) => farmer1.distance - farmer2.distance,
        );
        setTitle(callback.title);
        setList(callback.list);
    }, []);

    return [title, list];
}
