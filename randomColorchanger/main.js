const randomColor  = function(){
    const hex  = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let stop;
const chngeColor  = function (){

    if(!stop){
        stop = setInterval(chngeBgcolor,1000);
    }
    
    function chngeBgcolor(){
         document.querySelector('body').style.backgroundColor = randomColor();
    }
    

};
const stopColor = function(){
    clearInterval(stop);
    stop = null;
};

document.querySelector('#start').addEventListener('click',chngeColor);



document.querySelector('#stop').addEventListener('click',stopColor);
