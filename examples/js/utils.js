

module.exports = {
    assert: function assert(condition, message){
        if(condition){
            console.log(message);
        }
        else {
            console.log('Something is a miss!')
        }
    }
  };