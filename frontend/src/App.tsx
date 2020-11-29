import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { DocumentCreatePage, DocumentSearchPage } from './pages';
import { Layout } from './components/Layout';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/documents/create">
            <DocumentCreatePage />
          </Route>
          <Route path="/documents" exact>
            <DocumentSearchPage />
          </Route>
          <Redirect to="/documents" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
