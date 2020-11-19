import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <br />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
