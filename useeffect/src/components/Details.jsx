import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import axios from "axios";


const Details = ({ info }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!info.id) return;

        axios
            .get(`${process.env.REACT_APP_INITIAL_URL}${info.id}.json`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [info.id, data]);

    if (!data) return null;

    return (
        <div className="profile-info">
            <div className="profile-photo">
                <img src={data.avatar} alt="avatar" />
            </div>
            <div className="profile-details">
                <p >{data.name}</p>
                {Object.keys(data.details).map(key => (
                    <p key={shortId.generate()}>
                        <b>{key}</b>: {data.details[key]}
                    </p>
                ))}
            </div>
        </div>
    );
};

Details.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
};


export default Details;