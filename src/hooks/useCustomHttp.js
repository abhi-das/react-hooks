
import { useState, useEffect } from 'react';


export const useCustomHttp = (url, deps) => {

    const [isLoading, setIsLoading] = useState(false);
    const [loadedData, setLoadedData] = useState(null);

    useEffect((url) => {
        console.log('caled')
        setIsLoading(true);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Fail to load")
                }
                return res.json();
            })
            .then(dt => {
                // console.log(dt)
                setIsLoading(false);
                setLoadedData(dt);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, deps);

    return [isLoading, loadedData];
}
