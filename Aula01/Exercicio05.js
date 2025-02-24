for(let i = 1; i <= 10; i++){
    if(i == 10){
        process.stdout.write(""+i);
        return;
    }

    process.stdout.write(i+" - ");
}