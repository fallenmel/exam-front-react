import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Signup from '../pages/signup';

const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Signup} />
        </Switch>
      </Layout>
    </BrowserRouter>

  )

}

export default AppRoutes