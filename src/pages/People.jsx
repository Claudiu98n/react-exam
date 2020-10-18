import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PeopleList from '../components/PeopleList';
import BaseListSideBar from '../components/BaseListSideBar';
import FilteredPeopleList from '../components/FilteredPeopleList';
import { resetIsDisplayed } from '../redux/actions/formAction';

function People(props) {
    return (
        <div>
            <div className="container-fluid text-center border border-primary my-4">
                <div className="row">
                    <div className="col-4 p-5">
                        <BaseListSideBar />
                    </div>
                    <div className="col-8 mb-5 mt-1">
                        {
                            props.isDisplayed === false
                            ? <PeopleList />
                            : <FilteredPeopleList />
                        }        
                    </div>
                </div>
            </div>

            <div className="my-4 text-center">
                <Link to="/">
                    <button className="btn btn-info p-2" onClick={() => props.resetIsDisplayed()}>
                        Spre pagina principala
                    </button>
                </Link>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        resetIsDisplayed: (payload) => dispatch(resetIsDisplayed(payload))
    }
}

function mapStateToProps(state) {
    return {
        isDisplayed: state.isDisplayed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);