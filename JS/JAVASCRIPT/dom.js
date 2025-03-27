                                    // SELECTION

          // change in html

// var sel= document.querySelector('button');

// sel.textContent = 'Starting...';

// sel.innerHTML='<i>hey</i>';

// sel.innerHTML+='<i>hey</i>';


        //change in css(style)

// var h=document.querySelector('h1');
// h.style.color='red';
// h.style.fontSize='5em';

// h.classList.add('makered');

// h.classList.remove('makered');


                                    // CREATING AND DELETEING ELEMENTS


// var n=document.createElement('img');
// n.src='https://imafoodservice.com/images/IMA-Plate-RGB.svg';

// document.querySelector('body').appendChild(n);

// document.querySelector('body').removeChild(n);


                                    //EVENT HANDLING


// var bt=document.querySelector('button');
// bt.addEventListener('mouseover',function(){
//     bt.textContent='Stated...';
//     bt.style.backgroundColor='blue';
// });

// var bt=document.querySelector('button');
// bt.addEventListener('mouseleave',function(){
//     bt.textContent='click';
//     bt.style.backgroundColor='white';
// });




// PRACTICE


// var h= document.querySelector('h1');
// h.innerHTML='hello bhaiyon';
// h.style.fontStyle='italic';
// h.style.color='red';
// h.style.backgroundColor='yellow';

// var c=document.getElementById('box')
// c.innerHTML='heyyy';

// function cl(){
//         console.log('clicked');
// }
// var b=document.querySelector('button');
// b.addEventListener('click',cl);

// var b=document.querySelector('button');
// b.addEventListener('click',function(){
//         console.log('clicked');
//         b.style.backgroundColor='blue';
//         c.style.backgroundColor='yellow';
// })



// PROJECT 1

// var a=document.querySelector('button');
// var h=document.querySelector('h3');

// var flag=0;

// a.addEventListener('click',function(){
//         if(flag==0){
//         h.innerText='Friends';
//         h.style.color='green';
//         a.innerText='Remove Friend';
//         flag=1;
// }else{
//         h.innerText='Follow';
//         h.style.color='red';
//         a.innerText='Add Friend';
//         flag=0;    
// }
// })




// PROJECT 2

var a=document.querySelector('button');
var b=document.querySelector('#box');

a.addEventListener('click',function(){
       var c1=Math.floor(Math.random()*256);
       var c2=Math.floor(Math.random()*256);
       var c3=Math.floor(Math.random()*256);

       b.style.backgroundColor='rgb('+c1+','+c2+','+c3+')';
})