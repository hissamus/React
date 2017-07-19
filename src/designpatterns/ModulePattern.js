 var myModule= (()=>{

       var myPrivateVar="Hello Rolo";
       var name="";
       var age=0;
       function init(){
            myPrivateVar="Hello Hissam" ;            
        }
        
        function calculateRandom(){
            return Math.random();
        }

        function nameSetter(newName){
            if(newName!=name){
                name=newName;
                return true;
            }
            return false;
        }
        function ageSettter(newAge){
            if(age!=newAge){
                    age=newAge;
                    return true;
            }
            return false;
        }

        function ageGetter(){
            return age;
        }

        function nameGetter(){
            return name;
        }

        function describe(){
            return name+"|"+age;
        }

        return {
            setName:nameSetter,
            getName:nameGetter,
            setAge:ageSettter,
            getAge:ageGetter,
            getDescription:describe
        }

})();

exports.myModule=myModule;

//export {myModule};