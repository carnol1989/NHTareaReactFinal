import React from 'react';
import { Router } from '@reach/router';
import HeroeDetail from '../../pages/HeroeDetail';
import HeroeEdit from '../../pages/HeroeEdit';
import HeroeNew from '../../pages/HeroeNew';
import Heroes from '../../pages/Heroes';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Heroes path="/" />
        <HeroeNew path="/heroe/new" />
        <HeroeEdit path="/heroe/:heroeId/edit" />
        <HeroeDetail path="/heroe/:heroeId/detail" />
        <NotFound default />
      </Router>
    </Layout>
  );
}

export default App;
