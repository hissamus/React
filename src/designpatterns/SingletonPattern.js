var singleton=(()=>{

    function SingletonClass(options){
        var x=options.x||0;
        var y=options.y||0;
        var z=options.z||0;
        var name="Co-ordinate";

       return {
           getX: getX=()=>{
            return x;
        },
        getZ:getZ=()=>{
            return z;
        },
        getY: getY=()=>{
            return y;
        }
       }
    }

    var _instance;

    return {
        getInstance:(options)=>{
         if(_instance === undefined){
            _instance=new SingletonClass(options);
         }
         return _instance;
        }
    }

})();

exports.singleton=singleton;