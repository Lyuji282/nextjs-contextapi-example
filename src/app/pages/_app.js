import React from 'react';
import Head from 'next/Head';

import GlobalProvider from '../contexts/providers/GlobalProvider';

const MyApp = (props) => {

    const {Component, pageProps} = props;

    return (

        <>

            <Head/>

            <GlobalProvider>
                <Component {...pageProps}/>
            </GlobalProvider>

        </>
    )
};

export default MyApp;