const btn =  document.querySelectorAll('.button')
// console.log(btn);
const body = document.querySelector('body')

btn.forEach(function(b){
    console.log(b);
    b.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
     
});

