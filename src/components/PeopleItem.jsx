import React from 'react';

function PeopleItem(props) {
    const {surname, name, job, salary, date} = props;
    
    return (
        <div>
            <ul className="list-group mt-5">
                <li className="list-group-item mt-2">{ surname } </li>
                <li className="list-group-item mt-2">{ name } </li>
                <li className="list-group-item mt-2">{ job } </li>
                <li className="list-group-item mt-2">{ salary } LEI </li>
                <li className="list-group-item mt-2">{ date } </li>
            </ul> 
        </div>
    )
}

export default PeopleItem;

