import React from 'react';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';

function PeopleList(props) {
    const { employees } = props;

    return (
        <div>
            {
                employees.length
                ?   employees.map((employee, index) => {
                        return <PeopleItem
                                    surname={employee.surname}
                                    name={employee.name}
                                    job={employee.job}
                                    salary={employee.salary}
                                    date={employee.date}
                                    key={index}
                            />
                    })
                
                :   <div className="p-5">
                        <p className="h3">Nu ati introdus angajati!</p>
                        <p className="h4">Apasati pe butonul "Spre pagina principala" pentru a introduce.</p>
                        <Arrow />
                    </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        employees: state.employees,
    }
}

export default connect(mapStateToProps)(PeopleList);
