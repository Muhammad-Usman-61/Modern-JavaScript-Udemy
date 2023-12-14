const form = document.querySelector('.signUp-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //Validation
    const username = form.username.value;
    const result = usernamePattern.test(username);
    if(result){
        //feedback good info
        feedback.textContent = 'Username is valid!';
    }
    else{
        //feedback bad info
        feedback.textContent = 'Only letters allowed & 6 to 12 characters long!';
    }

});

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');
    }
});

// let username = 'shaunj';

// let pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);

// if(result){
//     console.log('regex test passed :)');
// }
// else{
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern);

// console.log(result);