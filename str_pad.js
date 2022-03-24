const readPad = (request, response) => {
    const {input1,input2} = request.body;
    //input 1 the number
    //input2 the limit length number
    var str = input1;
    
    var num = parseInt(input2) - str.length;

    console.log('str :'+str);
    console.log('num:'+num);
    console.log('input2:'+input2);


    if (num<= parseInt(input2)){
        num=num+(input2-num);
    }
    var res = str.padStart(num,'0');
    console.log(res);
    response.status(200).send({success:true,data: res});
}

module.exports = {
    readPad
}