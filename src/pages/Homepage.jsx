import React, { Fragment } from 'react';
import Banner from '../Components/Banner/Banner';
import CoinsTable from '../Components/CoinsTable';

const Homepage = () => {
    return (
        <Fragment>
            <Banner/>
            <CoinsTable/>
        </Fragment>
    );
};

export default Homepage;