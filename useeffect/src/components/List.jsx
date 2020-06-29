import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import shortid from "shortid";
import '../App';

const List = ({handleInfo}) => {
    const [names, setNames] = useState([]);
    const [chosen, setChosen] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_INITIAL_URL}users.json`)
            .then(res => setNames(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleChosen = (id, name) => {
        setChosen(id);
        handleInfo(id, name);
    };

    return (
        <div className="profile-list">
            <ul type='none'>
                {names.map(({id, name}) => (
                    <li
                        className={`${id === chosen ? "active" : ""}`}
                        key={shortid.generate()}
                        onClick={() => handleChosen(id, name)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

List.propTypes = {
    handleInfo: PropTypes.func.isRequired
};

export default List;
