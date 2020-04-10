var i:number,j:number;
for(i=1;i<=100;i++){
    var isPrime:boolean = false;
    for(j=2;j<i;j++){
        if(i%j==0){
            break;
        }else{
            isPrime=true;
        }
    }
    if(isPrime){
        console.log(i + " ");
    }
}

