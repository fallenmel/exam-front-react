import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Signup from '../pages/signup';
import SuccessPage from '../pages/success';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={Signup} />
          <Route path='/success/:id' exact component={SuccessPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
