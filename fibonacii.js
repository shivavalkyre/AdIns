

  const readFibonacii = (request, response) => {
    const limit = parseInt(request.params.numbers)
   
    arr = fib(limit)

    for( var i = 0; i < arr.length; i++){ 
                                   
      if ( arr[i] === 0) { 
          arr.splice(i, 1); 
          i--; 
      }
  }

    response.status(200).send({success:true,data: arr});
      
  }

  function fib(num) {
    var x = 0;
    var y = 1;
    var fibarray = [0];
    
    while(y <= num) {
        fibarray.push(y);
        y += x;
        x = y - x;
    }
    
    return fibarray;
    }

  module.exports = {
      readFibonacii
  }