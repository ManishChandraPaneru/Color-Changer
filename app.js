const buttons=document.querySelectorAll('.box');
const body1=document.querySelector('body');

buttons.forEach(function(box){
    box.addEventListener('click',function(mk){
        console.log(mk);
        console.log(mk.target);
        if(mk.target.id==='lavender'){
            body1.style.backgroundColor=mk.target.id;
        }
        if(mk.target.id==='rebeccapurple'){
            body1.style.backgroundColor=mk.target.id;  
        }
        if(mk.target.id==='gray'){
            body1.style.backgroundColor=mk.target.id;
        }
        if(mk.target.id==='palegoldenrod'){
            body1.style.backgroundColor=mk.target.id;
        }

    })
});