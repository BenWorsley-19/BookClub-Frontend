import { Fragment } from 'react';

import classes from './ToReadList.module.css';

import ToReadItem from './ToReadItem';
import ToReadRecommendations from './toreadrecommendation/ToReadRecommendations';

const DUMMY_READ_ITEMS = [
    { id: 1, title: "Underground Railroad", author: "Colson Whitehead"},
    { id: 2, title: "Harry Potter", author: "J.K Rowling"},
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury"}
];

const ToReadList = () => {
    const toReadItems = DUMMY_READ_ITEMS;

    return (
        <Fragment>
          <h2>To Read List</h2>
          <ul className={classes.list}>
            {toReadItems.map((toReadItem) => (
              <ToReadItem
                key={toReadItem.id}
                id={toReadItem.id}
                title={toReadItem.title}
                author={toReadItem.author}
              />
            ))}
          </ul>
          <ToReadRecommendations />
        </Fragment>
      );

};

export default ToReadList;