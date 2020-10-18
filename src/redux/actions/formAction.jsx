export function addSurrnameToForm(payload) {
    return {
        type: 'ADD_SURRNAME_TO_FORM',
        payload
    }
}

export function addNameToForm(payload) {
    return {
        type: 'ADD_NAME_TO_FORM',
        payload
    }
}

export function addJobToForm(payload) {
    return {
        type: 'ADD_JOB_TO_FORM',
        payload
    }
}

export function addSalaryToForm(payload) {
    return {
        type: 'ADD_SALARY_TO_FORM',
        payload
    }
}

export function addEmployeeToForm(payload) {
    return {
        type: 'ADD_EMPLOYEE_TO_FORM',
        payload
    }
}

export function filterSalary(payload) {
    return {
        type: 'FILTER_SALARY',
        payload
    }
}

export function sortEmployeesBySurname(payload) {
    return {
        type: 'SORT_EMPLOYEES_BY_SURNAME',
        payload
    }
}

export function sortEmployeesBySalary(payload) {
    return {
        type: 'SORT_EMPLOYEES_BY_SALARY',
        payload
    }
}

export function resetIsDisplayed() {
    return {
        type: 'RESET_IS_DISPLAYED'
    }
}