import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSurrnameToForm , addNameToForm, addJobToForm, addSalaryToForm, addEmployeeToForm} from '../redux/actions/formAction';

function Home(props) {
    const { addSurrnameToForm, addNameToForm, addJobToForm, addSalaryToForm, addEmployeeToForm } = props;
    const { surname, name, job, salary, date } = props;
    return (
    <div>
        <div className="card mx-xl-5">

            <div className="card-body">
                <form 
                    onSubmit={(event) => addEmployeeToForm({
                        event,
                        employee: {
                            surname,
                            name,
                            job,
                            salary,
                            date
                        }
                    })}
                >
                    <p className="h4 text-center py-4">Introduceti datele dumneavoastra</p>

                    <label htmlFor="surname" className="grey-text font-weight-light mt-2">Nume de familie:</label>
                    <input 
                        type="text" 
                        id="surname" 
                        className="form-control"
                        onChange = {(event) => addSurrnameToForm(event.target.value)}
                    />

                    <label htmlFor="name" className="grey-text font-weight-light mt-2">Prenume:</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-control"
                        onChange = {(event) => addNameToForm(event.target.value)}
                    />

                    <label htmlFor="job" className="grey-text font-weight-light mt-2">Meserie:</label>
                    <input 
                        type="text" 
                        id="job" 
                        className="form-control"
                        onChange = {(event) => addJobToForm(event.target.value)} 
                    />

                    <label htmlFor="salary" className="grey-text font-weight-light mt-2">Salariu (LEI):</label>
                    <input 
                        type="number" 
                        id="salary" 
                        className="form-control"
                        min="1" 
                        max="50000"
                        onChange = {(event) => addSalaryToForm(event.target.value)}
                    />

                    <label htmlFor="date-of-employment" className="grey-text font-weight-light mt-2">Data angajarii:</label>
                    <input 
                        type="date" 
                        id="date-of-employment" 
                        className="form-control"
                        value={date}
                        readOnly
                    />
                    
                    <div className="d-flex flex-column text-center py-4 mt-3">
                            <button 
                                className="btn btn-outline-purple" 
                                type="submit"
                            >
                                Trimiteti datele
                            </button>
                            <Link to="/people">
                                <button className="btn btn-info mt-4">Spre pagina cu Angajati</button>
                            </Link>       
                    </div>

                </form>
            </div>
        </div>
    </div>
    )
}
    
function mapStateToProps(state) {
    return {
        surname: state.surname,
        name: state.name,
        job: state.job,
        salary: state.salary,
        date: state.dateOfEmployment
    }
}

function mapDispatchToProps(dispatch) {
    return {
    addSurrnameToForm: (payload) => dispatch(addSurrnameToForm(payload)),
    addNameToForm: (payload) => dispatch(addNameToForm(payload)),
    addJobToForm: (payload) => dispatch(addJobToForm(payload)),
    addSalaryToForm: (payload) => dispatch(addSalaryToForm(payload)),
    addEmployeeToForm: (payload) => dispatch(addEmployeeToForm(payload))
    };
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Home);
