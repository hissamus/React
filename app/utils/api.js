var Axios=require('axios');


module.exports={
    fetchPopularRepos:(lang)=>{
        var encodedURI= window.encodeURI(
            'https://api.github.com/search/repositories?q=stars:>1+language:'+
             lang+
            '&sort=stars&type=Repositories'    
            );

        return Axios.get(encodedURI)
              .then((resp)=>{
                    return resp.data.items;
              })
    }
}