import React, { Fragment } from 'react'
import TopNav from '../Navs/TopNav';
import Header from '../common/Header';
import MainNav from './../Navs/MainNav';
import Footer from '../common/Footer';

const MainLayout = (props) => {
  return (
    <Fragment>
      <div className="landing-layer">
        <div className="container">
          <TopNav />
          <Header />
        </div>
      </div>

      <MainNav />
      <main id="home-page">
        <div className="container">

          {props.children}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;