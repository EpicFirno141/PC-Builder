import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NotAllowed from '../NotAllowed/NotAllowed';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

function OnlyThisUser({ component, children, ...props }) {
    const dispatch = useDispatch();
    const params = useParams();

    const user = useSelector((store) => store.user);
    const pcItem = useSelector(store => store.pcItem);

    //Retrieve data from server about specific PC, stored afterwards as the reducer pcItem
    //Note: This makes a call to the server, which IS ALSO going to check the user's id.
    //This means that this isn't the last line of defense or anything, its moreso just a way
    //to CLEANLY route users away from pages they shouldn't be on in the first place 
    //before the server handles the rest of the security.
    dispatch({ type: 'FETCH_PC_ITEM', payload: { id: params.id } });

    // Component may be passed in as a "component" prop,
    // or as a child component.
    const ProtectedComponent = component || (() => children);

    // We return a Route component that gets added to our list of routes
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
