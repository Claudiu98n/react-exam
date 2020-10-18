const initialState = {
    surname: '',
    name: '',
    job: '',
    salary: '',
    dateOfEmployment: '',
    isDisplayed: false,
    filteredEmployees: [],
    employees: []
}

export function formReducer(state=initialState, action) {
    switch(action.type) {
        
        case 'ADD_SURRNAME_TO_FORM':
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();    
            today = yyyy + '-' + mm + '-' + dd;

            return Object.assign({}, state, {
                surname: action.payload,
                dateOfEmployment: today
            })

        case 'ADD_NAME_TO_FORM':
            return Object.assign({}, state, {
                name: action.payload
            })

        case 'ADD_JOB_TO_FORM':
            return Object.assign({}, state, {
                job: action.payload
            })

        case 'ADD_SALARY_TO_FORM':
            return Object.assign({}, state, {
                salary: action.payload
            })
        
        case 'ADD_EMPLOYEE_TO_FORM':
            const employee = action.payload.employee;
            action.payload.event.preventDefault();
            if(employee.name === '' || employee.surname === '' || employee.job === '' || employee.salary === '') {
                alert('Trebuie completate valorile tuturor campurilor din formular');
                window.location.reload(false);
            } else {
                const newState = {
                    ...state,
                    employees: [
                        ...state.employees,
                        {
                            ...action.payload.employee
                        }
                    ]
                }
                return newState;
            }
            break;
        
        case 'FILTER_SALARY':
            const toFilter = action.payload.split('-');
            return Object.assign({}, state, {
                isDisplayed: true,
                filteredEmployees: state.employees.filter(employee=> employee.salary >= Number(toFilter[0]) && employee.salary <= Number(toFilter[1]))
            })

        case 'SORT_EMPLOYEES_BY_SURNAME':
            const copyOfEmployees = [...state.employees];
            return Object.assign({}, state, {
                isDisplayed: true,
                filteredEmployees: copyOfEmployees.sort((a,b) => (a.surname.toLowerCase() > b.surname.toLowerCase()) ? 1 : ((b.surname.toLowerCase() > a.surname.toLowerCase()) ? -1 : 0))
            })
        
        case 'SORT_EMPLOYEES_BY_SALARY':
            const secondCopyOfEmployees = [...state.employees];
            return Object.assign({}, state, {
                isDisplayed: true,
                filteredEmployees: secondCopyOfEmployees.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary))
            })

        case 'RESET_IS_DISPLAYED':
            return Object.assign({}, state, {
                isDisplayed: false
            })

        default:
            return state;
    }
}