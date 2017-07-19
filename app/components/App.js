
var React =require('react');
var Popular =require('./Popular');
var Router=require('react-router-dom').BrowserRouter;
var Route=require('react-router-dom').Route;
var Switch=require('react-router-dom').Switch;
//import {Route} from 'react-router-dom';

function NotFound(){
    return (
        <div>
            <p>404 Page not found......</p>
            Click<NavLink to="/"> here</NavLink> to goto Home
            </div>
    )
}
function Battle(){
    return (
        <div>Battle</div>
    )
}

function Home(){

    return (
        <div>
            <p> HOME </p>
            
            </div>
    )
}

var NavLink =require('react-router-dom').NavLink;
function Nav(){
    return(
        <ul className='nav'>
            <li><NavLink  exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/battle">Battle</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/popular">Popular</NavLink></li>
        </ul>
    )
}

class App extends React.Component{

    render(){
        return (
            <Router >
                <div className='container'>
                <Nav />
                <Switch>
                 <Route exact path="/" component={Home} />
                <Route exact path="/popular" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route render={NotFound}/>
               </Switch>
                </div>
             </Router>
        )
    }
}
/*<div className='container'><Popular /></div>*/
/*<div> Hello World!! <br />{this.props.name +""+new Date()}</div>*/
module.exports=App;