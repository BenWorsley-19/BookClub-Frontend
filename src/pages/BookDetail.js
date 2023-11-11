import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import BookSummary from '../components/booksummary/BookSummary'
import ReviewSummaryList from '../components/reviews/ReviewSummaryList'

const DUMMY_REVIEWS_DATA = {
    id: 1,
    title: "Underground Railroad",
    author: "Colson Whitehead",
    averageRating: 4.7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus eget arcu luctus viverra. Aenean iaculis tortor ut tellus condimentum vestibulum. Proin mollis nisi ut lectus tristique, convallis finibus libero lacinia. Nulla dui arcu, vehicula vel viverra vitae, sollicitudin eu lorem. Vivamus volutpat libero eu diam varius, et mollis sem dignissim. Donec quis tortor vestibulum, iaculis sem ut, dignissim erat. Ut pharetra in risus vel auctor. Ut sit amet dapibus tortor, non vestibulum tellus. Aliquam id quam scelerisque nulla molestie aliquet quis auctor tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget aliquam neque.",
    reviewSummaries: [
        {
            id: 1,
            reviewerName: "LillyK12",
            rating: 4,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus eget arcu luctus viverra."
        },
        {
            id: 2,
            reviewerName: "JohnLequip54",
            rating: 5,
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus eget arcu luctus viverra."
        }
    ]
};


const BookDetail = () => {
    const params = useParams();
    const { bookId } = params;

    return (
        <Fragment>
            <BookSummary
                title={DUMMY_REVIEWS_DATA.title}
                averageRating={DUMMY_REVIEWS_DATA.averageRating}
                description={DUMMY_REVIEWS_DATA.description}
            />
            <ReviewSummaryList reviewSummaries={DUMMY_REVIEWS_DATA.reviewSummaries} />
        </Fragment>
    );
};

export default BookDetail;