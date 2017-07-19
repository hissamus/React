var React =require(react);
//var PropType=require('prop-types');

class PlayerInput extends React.Component{
    render(){

        return{
            
        }
    }
}

class Battle extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            playerOneName:'',
            playerTwoName:'',
            playerOneImage:null,
            playerTwoImage:null,
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(id,username){
        this.setState(function(){
            var newState={};
            newState[id +'Name']=username;
            newState[id +'Image']="https://github.com"+username+".png?size=200";
            return newState;
        });
    }

    render(){
        var playerOne=this.state.playerOneName;
        var playerTwo=this.state.playerTwoName;
<div><div className="row">
        {!playerOne &&
        <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit} />
        }

         {!playerOne &&
        <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />        
        }
    }
    </div></div>
}