import { useEffect, useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Network from 'expo-network';

export const useFetchItems = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const networkStatus = await Network.getNetworkStateAsync();
                const items = await AsyncStorage.getItem('items')
                if (items === null && networkStatus.isConnected) {
                    const resp = await axios.get(url);
                    const data = await resp?.data;

                    await AsyncStorage.setItem('items', JSON.stringify(data))
                    setApiData(data);
                    setIsLoading(false);
                    return
                }
                setApiData(JSON.parse(items));
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { isLoading, data, serverError };
};