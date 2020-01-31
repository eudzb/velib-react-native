import React from 'react';

const exo3 = () => {
    return fetch('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
    .then((response) => response.json())
    .then((velibs) => {        

        const velibsParsed = JSON.stringify(velibs);
        AsyncStorage.setItem('velibs', velibsParsed);
        AsyncStorage.getItem('velibs', (err, res) => {
        // console.log(JSON.parse(res)) exo 3
        });

        this.setState({
        isLoading: false,
        res: velibs.records,
        },() => {});
    })
    .catch((error) =>{
        console.error(error);
    });
}

export default exo3;