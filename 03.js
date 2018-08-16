
var i=1;

setInterval(function () {
  
    console.log(i++);
    
},1000);
//是否已经按下Ctrl+C
var exiting=false;
//SIGINT事件
process.on('SIGINT',()=>{

    if(exiting){
        process.exit();
    }
    else{
        exiting=true;
        console.log('再按一下"Ctrl+C"退出');
        setTimeout(() => {
            exiting=false;
        }, 1000);
    }

  

});