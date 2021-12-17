const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    
    console.log('event fired');
    event.preventDefault();
    const username = form.elements.email.value;
    const password = form.elements.password.value;
    if(password == 'SmartServTest@123'){
        window.open('./dashboard.html','_self')
    }else{
        validateEmail(username);
        validatePassword(password);
    }
    
})

function validateEmail(username){
    console.log('Hello there')
    if(!username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        
        alert('Your input email format is not correct');
    }
}

function validatePassword(password){
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(password)){
        alert('Only @ is allowed as special character');
    }
    if(!checkUpperCase(password)){
        alert('One Uppercase letter is required');
    }
    if(!checkNumber(password)){
        alert('One Number is required');
    }
}

function checkUpperCase(password){
    for(a in password){
        if(password[a] >='A' && password[a]<='Z'){
            return true;
        }
    }
    return false;
}
function checkNumber(password){
    for(a in password){
        if(password[a] >='0' && password[a]<='9'){
            return true;
        }
    }
    return false;
}