import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Blogs from './components/blog.jsx'
import NavigationBar from './components/navigationBar.jsx'

ReactDOM.render(<div><NavigationBar /><Blogs /></div>, document.getElementById('root'));