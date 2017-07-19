var React=require('react');

class Users extends React.Component {
  render() {

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {/*Create an <li> for every name in the list array who is also your friend*/
          this.props.list.filter(user=>{
            return user.friend===true
          })          
            .map((obj)=>{
            if(obj.friend===true)
            return (<li key={obj.name}>{obj.name}</li>)
          })
          }
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {/*Create an <li> for every name in the list array who is NOT your friend*/
            this.props.list.map((obj)=>{
            if(obj.friend===false)
            return (<li key={obj.name}>{obj.name}</li>)
          })
          }
        </ul>        
      </div>
    )
  }
}