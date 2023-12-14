// let array = ['Ali', 'Usman', 'Abdullah', 'Mutee', 'Abid'];
// let toInsert = document.getElementById('toInsert');

// array.forEach((name, index) => {
//     name = name.toUpperCase();
//     console.log(`${index} - Hello ${name}`);

//     if(index % 2 != 0){
//         toInsert.innerHTML += `<li style="color: red">${index} - Hello ${name}</li>`
//         toInsert.innerHTML += `<br>`
//     }
//     else{
//         toInsert.innerHTML += `<li style="color: green">${index} - Hello ${name}</li>`
//         toInsert.innerHTML += `<br>`
//     }
// })

// let checkPass = document.querySelector('.input');
// let checkBtn = document.getElementById('checkBtn');
// let checkResult = document.getElementById('checkResult');

// checkBtn.addEventListener('click', () => {
//     if(checkPass.value.length >= 8){
//         checkResult.innerHTML = 'Seems to be a Good Password';
//         checkResult.style.color = 'green';
//     }
//     else{
//         checkResult.innerHTML = 'Make Your Password 8 Characters Long';
//         checkResult.style.color = 'red';
//     }
// })

// let takeInput = document.querySelector('.input2');
// let actionBtn = document.getElementById('actionBtn2');
// let inserted = document.getElementById('Inserted');

// actionBtn.addEventListener('click', () => {
//     inserted.innerHTML = takeInput.value;
// })

// let actionBtn3 = document.getElementById('actionBtn3');
// let inserted2 = document.getElementById('Inserted2');
// let removeBtn = document.getElementById('remove');
// let removeAll = document.getElementById('removeAll');

// actionBtn3.addEventListener('click', () => {
  
//     array.forEach((name, index) => {
//         name = name.toUpperCase();

//         setTimeout(() => {
//             let div = document.createElement('div');
//             div.innerHTML = `${index + 1} - Hello ${name}`;
//             inserted2.appendChild(div);
//         }, 1000 * index);

//     })
    
// })


// removeBtn.addEventListener('click', () => {
//     inserted2.removeChild(inserted2.lastChild);
// })

// removeAll.addEventListener('click', () => {
//     inserted2.innerHTML = '';
// })  

// let array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
// , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'
// , 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4'
// , '5', '6', '7', '8', '9', '0', '!', '@', '#', '$'
// , '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'
// , '[', ']', '{', '}', ';', ':', ',', '.', '/', '?'
// , '<', '>', '|', '~', '`'];

//     let randomLetters = [];
//     for(let i = 0; i < 8; i++){
//         let random = Math.floor(Math.random() * array1.length);
//         let randomLetter = array1[random];
//         randomLetters.push(randomLetter);
//     }
//     randomLetters = randomLetters.join('');
//     console.log(randomLetters);


// let user = {
//     name: 'Ali',
//     age: 20,
//     email: 'testing@gmail.com',
//     address: 'Karachi',
//     blogs: [
//         {title: 'Blog 1', likes: 30},
//         {title: 'Blog 2', likes: 50}
//     ],
//     login: function(){
//         console.log('User Logged In');
//     },
//     logout: function(){
//         console.log('User Logged Out');
//     },
//     logHobbied: function(){
//         console.log("User's Hobbies are: ");
//         this.blogs.forEach(blog => {
//             console.log(blog.title + ' Likes ' + blog.likes);
//         })
//     }
// };

// console.log(user.hobbies[1]);

// user.login();
// user.logout();
// user.logHobbied();

// console.log(Math.round(Math.random() * 100));

//primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`Score One: ${scoreOne} Score Two: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`Score One: ${scoreOne} Score Two: ${scoreTwo}`);

//reference values
// const userOne = {name: 'Ali', age: 20};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 30;
// console.log(userOne, userTwo);

// const para = document.querySelector('p');
// console.log(para);

// const paras = document.querySelectorAll('.error');
// console.log(paras);

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras[2]);

// const para = document.querySelectorAll('p');
// para.forEach(para => {
//     if(para.textContent.includes('error')){
//         para.classList.add('error');
//     }
//     if(para.textContent.includes('success')){
//         para.classList.add('success');
//     }
// })
// const button = document.querySelector('button');
// const ul = document.querySelector('ul');
// button.addEventListener('click', () => {
//     const p = document.createElement('p');
//     p.textContent = 'New Todo';
//     ul.prepend(p);
    
// });

// const para = document.querySelectorAll('p');
// para.forEach(para => {
//     para.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();

//     });
// });

// ul.addEventListener('click', e => {
//     if(e.target.tagName === 'P'){
//         e.target.remove();
//     }
// });

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    alert('Copying the text isn\'t allowed');
});

let box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
  //console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})