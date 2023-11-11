import { Route, Switch, Redirect } from 'react-router-dom';

// import AllQuotes from './pages/AllQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';

import Layout from './components/layout/Layout';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import BookDetail from './pages/BookDetail'
import NotFound from './pages/NotFound';
import AllQuotes from './pages/AllQuotes';


function App() {

  // <Route path='/' exact>
  //   <Redirect to='/quotes' />
  // </Route>
  // <Route path='/quotes' exact>
  //   <AllQuotes />
  // </Route>
  // <Route path='/new-quote'>
  //   <NewQuote />
  // </Route>

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/feed' />
        </Route>
        <Route path='/feed' exact>
          <Feed />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/books/:bookId'>
          <BookDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
