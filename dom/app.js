// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);

// document.getElementById
// let item = document.getElementById('test');
// input.value = 'Bu bir input';
// input.className = 'test-class'



// let item = document.getElementById('test');


// // console.log(item.textContent);
// // console.log(item.innerText);
// // console.log(item.innerHTML);

// item.style.border = 'dashed 2px';





// document.getElementsByClassName
// let items = document.getElementsByClassName('list-group-item');

// items[3].textContent = 'Hello';
// items[0].style.backgroundColor = 'red';

// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor = 'red';
// }

// console.log(items[3])



// document.getElementsByTagName
// let items = document.getElementsByTagName('button');
// console.log(items[0])

// document.getElementsByName

// let items = document.getElementsByName('check');
// console.log(items)





// document.querySelector

// let item = document.querySelector('.list-group-item:nth-child(2)');

// console.log(item)

// console.log(item.lastChild);
// console.log(item.lastChild);
// console.log(item.lastElementChild.style.backgroundColor = 'red');



// create element

// let button = document.createElement('button');
// button.className = 'btn btn-success';
// button.innerHTML = 'Created button';
// button.setAttribute('id', 'yeni_buton');
// button.setAttribute('data', 'button_data');

// let div = document.querySelector('#test');

// div.appendChild(button);

// console.log(button)


// events



// function tikla() {
//     console.log('Butona tiklandi');
//     alert('asdljasda')
// }

// let button = document.querySelector('#test_event');

// button.addEventListener('click', function (ele) {
//     console.log(ele.target)

//     // console.log(e.layerX)
//     // console.log(e.layerY)
//     // console.log('funksion calisti')
// });


// let input = document.querySelector('#exampleInputPassword1');

// // input.addEventListener('focus', focus);

// input.addEventListener('change', function (e) {


//     console.log(e.target.value)
// });

// function focus() {
//     console.log('focus calisti')
// }


let link = document.querySelector('#test_link');

link.addEventListener('click', function (e) {
    console.log(e.target);
    e.preventDefault();

    console.log('link calisti');

    // .....
    // .....
    // .....
    // .....
    // .....
    // .....
    // .....
    // .....

    location.href = "http://google.com"
});
