import { Link } from 'react-router-dom';

import classes from './ToReadItem.module.css';

const ToReadItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.title}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/books/${props.id}`}>
        Book Summary
      </Link> 
    </li>
  );
};

export default ToReadItem;