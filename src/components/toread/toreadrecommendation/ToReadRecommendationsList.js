
const ToReadRecommendationsList = (props) => {
    // probably not the right place for this?
    const addRecToListHandler = (props) => {
      console.log("bob");
      console.log(props);
    }

    return (
        <ul>
          {props.recommendations.map((recommendation) => (
            <li key={recommendation.id}>
                <p>{recommendation.title}</p>
                <p>{recommendation.author}</p>
                <button onClick={addRecToListHandler}>+</button>
            </li>
          ))}
        </ul>
      );
};

export default ToReadRecommendationsList;