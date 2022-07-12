let dice = Math.trunc(Math.random() * 6) + 1;

if(dice===6){

    console.log(`Congratulations, you got a ${dice}`)
}

else{

    while(dice!==6){
    
        console.log(`The entered number is ${dice}`);
        dice = Math.trunc(Math.random() * 6);
        dice++;
        if(dice===6){
    
            console.log("Congratulations, You got a 6")
        }
    }
}
