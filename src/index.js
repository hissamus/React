const react = require('react');
const reactDOM=require('react-dom');

class HelloRolo extends React.Component{
    render(){
        return ('<div>Hello World</div>');
    }
}

ReactDOM.render(<HelloRolo />, document.getElementById('app'));