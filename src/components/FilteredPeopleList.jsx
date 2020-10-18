import React from 'react';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import {ReactComponent as SmileyFace} from '../assets/icons/smileyFace.svg'

function FilteredPeopleList(props) {
    const { filteredEmployees } = props;

    return (
        <div>
            {
                filteredEmployees.length
                ?   filteredEmployees.map((filteredEmployee, index) => {
                        return <PeopleItem
                                    surname={filteredEmployee.surname}
                                    name={filteredEmployee.name}
                                    job={filteredEmployee.job}
                                    salary={filteredEmployee.salary}
                                    date={filteredEmployee.date}
                                    key={index}
                            />
                })
                
                :   <div className="d-flex flex-column align-items-center p-5">
                        <p className="h3">Pentru acest filtru nu exista angajati</p>
                        <SmileyFace />
                    </div>
            }
        </div>
    )
}
                
function mapStateToProps(state) {
    return {
        filteredEmployees: state.filteredEmployees
    }
}
                
export default connect(mapStateToProps)(FilteredPeopleList);