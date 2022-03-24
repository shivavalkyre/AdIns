const drawBilanganGanjil = (request, response) => {
    const limit = parseInt(request.params.numbers)
    var arr2 = bilangan_ganjil(limit,limit*limit)
    //console.log(arr2);
    var str='';
    var arr3=[];

    for(k=0;k<arr2.length;k++)
    {
        console.log(str.padStart(arr2[k],'*'))
        arr3.push(str.padStart(arr2[k],'*'))
        //console.log(arr3)
    }
    response.status(200).send({success:true,data: arr3});
}
function bilangan_ganjil(counter,limit)
{
    var arr1 = [];
    var  j=0;

    for( var i = 1; i < limit-1; i++)
    {           
                       
        if (i%2!=0) { 
            //console.log('angka:'+i +' ' + 'result:'+i%2);
            //console.log(i%2);

           
            //console.log(arr1)
            if (j<=counter-1){
                arr1.push(i);
                j++;

            }
            
        }
        
    }
   return(arr1);
}

module.exports = {
    drawBilanganGanjil
}