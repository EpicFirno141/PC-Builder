import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NotAllowed from '../NotAllowed/NotAllowed';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

// NOTE: This is NOT the last line of defense. It is the first.
// The primary function of this component is to reroute the user to a 
// nice looking page that tells them they aren't allowed to view the one
// they had tried visiting.

// All this does is make it so the user is (hopefully) never shown an incomplete
// page; because the server doesn't give them the data after checking that the
// user's id doesn't match in the database
function OnlyThisUser({ component, children, ...props }) {
    const dispatch = useDispatch();
    const params = useParams();

    const user = useSelector((store) => store.user);
    const pcItem = useSelector(store => store.pcItem);

    //Retrieve data from server about specific PC, stored afterwards as the reducer pcItem
    const checkPCMatch = () => {
        dispatch({ type: 'FETCH_PC_ITEM', payload: { id: params.id } });
        dispatch({ type: 'FETCH_COMPONENT_LIST', payload: { id: params.id } });
    }
    //dispatch({ type: 'FETCH_PC_ITEM', payload: { id: params.id } });

    const ProtectedComponent = component || (() => children);

    useEffect(() => {
        checkPCMatch();
    }, [])

    return (
    <Route
        // all props like 'exact' and 'path' that were passed in
        // are now passed along to the 'Route' Component
        {...props}
    >
        {user.id === pcItem.user_id ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the NotAllowed page
        <NotAllowed />
        }
    </Route>

    );
}

export default OnlyThisUser;
