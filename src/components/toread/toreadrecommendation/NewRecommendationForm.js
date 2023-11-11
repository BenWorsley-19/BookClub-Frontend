import { useRef, useEffect } from 'react';

import useHttp from '../../../hooks/use-http';
import { addRecommendation } from '../../../lib/api';
import LoadingSpinner from '../../UI/LoadingSpinner';
import classes from './NewRecommendationForm.module.css';

const NewRecommendationForm = (props) => {
    const titleTextRef = useRef();
    const authorTextRef = useRef();

    const { sendRequest, status, error } = useHttp(addRecommendation);

    const { onAddedRecommendation } = props;

    console.log(status);
    console.log(error);


    useEffect(() => {
      if (status === 'completed' && !error) {
        console.log("yup")
        onAddedRecommendation();
      }
    }, [status, error, onAddedRecommendation]);

    const submitFormHandler = (event) => {
        event.preventDefault();
    
        const titleText = titleTextRef.current.value;
        const authorText = authorTextRef.current.value;
    
        // optional: Could validate here
    
        sendRequest({ recommendationData: { title: titleText, author: authorText }, toReadListId: props.toReadListId });
      };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
          {status === 'pending' && (
            <div className='centered'>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <textarea id='title' rows='1' ref={titleTextRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <textarea id='author' rows='1' ref={authorTextRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Recommend!</button>
          </div>
        </form>
      );
};

export default NewRecommendationForm;