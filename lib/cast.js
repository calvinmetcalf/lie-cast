
var promise = require('lie');
function cast(thing){
    if(thing instanceof promise){
        return thing;
    }else{
        return promise.resolve(thing);
    }
}
module.exports = cast;