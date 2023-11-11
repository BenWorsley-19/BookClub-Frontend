// import classes from './ToReadList.module.css';

import ReviewSummaryItem from './ReviewSummaryItem';

const ReviewSummaryList = (props) => {
    const reviewSummaries = props.reviewSummaries;
    return (
        <ul>
        {reviewSummaries.map((reviewSummaryItem) => (
            <ReviewSummaryItem
            key={reviewSummaryItem.id}
            id={reviewSummaryItem.id}
            reviewerName={reviewSummaryItem.reviewerName}
            rating={reviewSummaryItem.rating}
            summary={reviewSummaryItem.summary}
            />
        ))}
        </ul>
      );

};

export default ReviewSummaryList;