import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const [authorized, setAuthorized] = useState(false);

        useEffect(() => {
            setAuthorized(true);
        }, []);

        return <WrappedComponent
            {...props}
            {...{
                authorizedStatus: authorized
            }}
        />
    }
    return Wrapper;
};

export default withAuth;



