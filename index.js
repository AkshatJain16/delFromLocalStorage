const mainHeading = document.querySelector('#main-heading');
mainHeading .style.textAlign = 'right';
mainHeading .style.marginRight = '30px';

const header = document.querySelector('#header');
header.style.padding = '20px';
header.style.borderTopLeftRadius = '10px';
header.style.borderTopRightRadius = '10px';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector(".fruits");
fruits.style.listStyleType = "none";
fruits.style.padding = "30px";
fruits.style.backgroundColor= 'gray';
fruits.style.marginLeft= '30px';
fruits.style.marginRight= '30px';
fruits.style.borderRadius='5px';

const fruit = document.querySelectorAll(".fruit");
for (let i = 0; i < fruit.length; i++){
    if (i % 2 != 0) {
        fruit[i].style.backgroundColor = 'brown';
        fruit[i].style.color = 'white';
        
    }else{
        fruit[i].style.backgroundColor = 'lightgray';
        fruit[i].style.color = 'black';
    }
    fruit[i].style.margin= '5px';
    fruit[i].style.padding= '10px';
    fruit[i].style.borderRadius= '5px';
}