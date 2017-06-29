import React from 'react';
import Footer from './Footer';
import Header from './Header';
import TopNav from './TopNav';
import '../styles/index.css';

const BasePage = (props) => (
    <div>
        <Header />
        <div className="dashboard-main">
          <TopNav />
          {props.children}
        </div>
        <Footer />
    </div>
);
export default BasePage;