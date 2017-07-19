
//import {React} from 'react';
//import {ReactDOM} from 'react-dom';
var React =require('react');
var ReactDOM =require('react-dom');
var App=require('./components/App');
require('./index.css');


/*ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);*/
ReactDOM.render(<App name="hissam"/>, document.getElementById('app'));

