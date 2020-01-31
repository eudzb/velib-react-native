import React, { useState, useEffect } from 'react';
import { VelibContext } from '../App';

const API = "https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json";

const getVelibs = () => {
    return fetch(API)
    .then(response => response.json())
    .then(data => {
        return data;
    } );
}

const VelibProvider = ({ children }) => {
    const [velibs, setVelibs] = useState([]);

    useEffect(() => {
        getVelibs()
        .then(res => setVelibs(res))
    }, []);

    return (
        <VelibContext.Provider value={velibs}>
            {children}
        </VelibContext.Provider>
    );
};

export default VelibProvider;
