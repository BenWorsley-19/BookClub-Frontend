import { Link } from 'react-router-dom';


const ReviewSummaryItem = (props) => {
  return (
    <li>
      <figure>
        <blockquote>
          <p>{props.reviewerName}</p>
        </blockquote>
        <figcaption>{props.rating}</figcaption>
        <p>{props.summary}</p>
      </figure>
      <Link to={`/reviews/${props.id}`}>
        Read Full Review
      </Link>
    </li>
  );
};

export default ReviewSummaryItem;