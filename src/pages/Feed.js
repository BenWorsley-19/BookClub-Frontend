import { Link } from 'react-router-dom';

const Feed = () => {
    return (
        <Link className='btn' to={`/profile`}>
            Profile
        </Link>
    );
};

export default Feed;