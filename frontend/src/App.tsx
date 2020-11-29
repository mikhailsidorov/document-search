import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components/Layout';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/documents/create">
            Create
          </Route>
          <Route path="/documents" exact>
            Search
          </Route>
          <Redirect to="/documents" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
