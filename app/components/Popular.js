var React =require('react');
var PropsTypes=require('prop-types');
var api=require('../utils/api');

function RepoGrid(props){
    return(
        <ul className='popular-list'>
            {
                props.repos.map((repo, index)=>{
                    return(
                            <li key={repo.name} className="popular-item">
                                <div className="popular-rank"> #{index+1}</div>
                                <ul className="space-list-items">
                                    <li>
                                        <img className="avatar" src={repo.owner.avatar_url} alt={'Avatar for '+repo.owner.login}/>
                                    </li>
                                    <li><a href={repo.html_url}>{repo.name}</a></li>
                                    <li>@{repo.owner.login}</li>
                                    <li>{repo.stargazers_count} Stars</li>
                                </ul>
                            </li>
                    )
                })
            }
        </ul>
    )
}
RepoGrid.PropsTypes={
    repos:PropsTypes.array.isRequired
}


function SelectLanguage(props){
         var languages=["All","JavaScript","Ruby","Java","CSS","Python"];
    return (            
           <ul className='languages'>
              
               {
                   languages.map((lang)=>{                       
                        return (
                            <li 
                            style={lang===props.selectedLanguage?{color:'#d0021b'}:null}
                            key={lang} 
                            onClick={props.updateLanguage.bind(null,lang)}>                           
                                {lang}
                            </li>
                        )
                   })
               }
               </ul>
        )
}
SelectLanguage.PropsTypes={
    selectedLanguage:PropsTypes.string.isRequired,
    updateLanguage:PropsTypes.func.isRequired
}

 class Popular extends React.Component{
     constructor(props){
        super(props);
        this.state={
            selectedLanguage:'All',
        };

        this.updateLanguage=this.updateLanguage.bind(this);        
     }
     componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage);
     }

     updateLanguage(lang){       
         this.setState(function (){
             return {
                    selectedLanguage:lang,
                    repos:null
             }
            });
        api.fetchPopularRepos(lang)
        .then((resp)=>{
                console.log(resp);
                this.setState(()=>{
                    return {
                        repos:resp
                    }
                })
        })
        ;
     }

     render(){
      
        return (
                 <div>
                     <SelectLanguage 
                        selectedLanguage={this.state.selectedLanguage}
                        updateLanguage={this.updateLanguage }
                     />
                     {this.state.repos?<RepoGrid repos={this.state.repos}/>:<p className="loading">LOADING....</p>}                   
                 </div>
         )
     }

}



 
module.exports=Popular