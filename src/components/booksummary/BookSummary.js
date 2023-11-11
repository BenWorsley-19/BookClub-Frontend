import {Fragment} from 'react';

const BookSummary = (props) => {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <p>{props.averageRating}</p>
            <p>{props.description}</p>
        </Fragment>
    );
};

export default BookSummary;