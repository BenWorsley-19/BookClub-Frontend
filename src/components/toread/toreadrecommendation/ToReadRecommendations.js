import { useState, useEffect, useCallback } from 'react';

import classes from './ToReadRecommendations.module.css';
import NewRecommendationForm from "./NewRecommendationForm";
import useHttp from '../../../hooks/use-http';
import { getAllRecommendations } from '../../../lib/api';
import LoadingSpinner from '../../UI/LoadingSpinner';
import ToReadRecommendationsList from './ToReadRecommendationsList';

const ToReadRecommendations = () => {
    const toReadListId = 1;

    const { sendRequest: callGetAllReccomendations, status, data: loadedRecommendations } = useHttp(getAllRecommendations);

    useEffect(() => {
        callGetAllReccomendations(toReadListId);
    }, [toReadListId, callGetAllReccomendations]);

    const addedRecommendationHandler = useCallback(() => {
        callGetAllReccomendations(toReadListId);
    }, [toReadListId, callGetAllReccomendations]);

    let recommendations;
    if (status === 'pending') {
        recommendations = (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }
    if (status === 'completed' && loadedRecommendations && loadedRecommendations.length > 0) {
        recommendations = <ToReadRecommendationsList recommendations={loadedRecommendations} />;
    }
    if (status === 'completed' &&
        (!loadedRecommendations || loadedRecommendations.length === 0)) {
        recommendations = <p className='centered'>No reccomendations</p>;
    }  

    return (
        <section className={classes.toReadRecommendations}>
            <h2>Recommendations</h2>
            <NewRecommendationForm
                toReadListId={toReadListId}
                onAddedRecommendation={addedRecommendationHandler}
            />
            {recommendations}
        </section>
    );
};

export default ToReadRecommendations;