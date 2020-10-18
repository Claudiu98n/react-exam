import React from 'react';
import { connect } from 'react-redux';
import { filterSalary, sortEmployeesBySurname, sortEmployeesBySalary, resetIsDisplayed } from '../redux/actions/formAction';

function BaseListSideBar(props) {
    const { filterSalary, sortEmployeesBySurname, sortEmployeesBySalary, resetIsDisplayed } = props;
    return (
        <div>
            <div className="d-flex flex-column">
                <p className="h4"> Sorteaza dupa: </p>
                <button className="btn btn-light mt-1" value="surname" onClick={(event) => sortEmployeesBySurname(event.target.value)}>Dupa nume</button>
                <button className="btn btn-light mt-1" value="salary" onClick={(event) => sortEmployeesBySalary(event.target.value)}>Dupa salariu</button>
            </div>
            <div className="d-flex flex-column mt-2">
                <p className="h4"> Filtreaza dupa salariu: </p>
                <button className="btn btn-light mt-1" value="1-2500" onClick={(event) => filterSalary(event.target.value)}> 1-2500 LEI </button>
                <button className="btn btn-light mt-1" value="2500-4000" onClick={(event) => filterSalary(event.target.value)}> 2500-4000 LEI </button>
                <button className="btn btn-light mt-1" value="4000-50000" onClick={(event) => filterSalary(event.target.value)}> 4000-50000 LEI </button>
                <button className="btn btn-light mt-4" onClick={() => resetIsDisplayed()}>Afiseaza angajatii in ordinea originala</button>
            </div>
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        filterSalary: (payload) => dispatch(filterSalary(payload)),
        sortEmployeesBySurname: (payload) => dispatch(sortEmployeesBySurname(payload)),
        sortEmployeesBySalary: (payload) => dispatch(sortEmployeesBySalary(payload)),
        resetIsDisplayed: (payload) => dispatch(resetIsDisplayed(payload))
    }
}

export default connect(null, mapDispatchToProps)(BaseListSideBar);
