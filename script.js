const button = document.querySelector('.button');
const welcomeP = document.querySelector('.pHG');
const accBox2 = document.querySelector('.accBox');
const pinBox = document.querySelector('.pinBox');
const btnLabel = document.querySelector('.btnLabel');
const pinInput = document.querySelector('.pinInput');
const pTimer = document.querySelector('.pTimer');
const pinP = document.querySelector('.pinP');
const mario = document.querySelector('.mariopic');


const userAcc = {
    userName: null,
    userLastName: null,
    generatedPin: 'undefined',
}

const getData = function(){
    userAcc.userName = document.querySelector("#name").value;
    userAcc.userLastName = document.querySelector('#lname').value;
};





button.addEventListener('click', function(){
    
    function checkNums(str){
        return /^[0-9]+$/.test(str);
        
    };

    if(checkNums(userAcc.userName)==true) return alert("Numbers not allowed, only letters.");
    if(userAcc.userName.length <= 0 || userAcc.userLastName.length <= 0) return alert("You have to fill in the blanks");
    
    if(userAcc.generatedPin === 'undefined' ){
        const userNameCheck = userAcc.userName;
        if(typeof userAcc.userName === 'string' ){
            welcomeP.classList.add('opacity');
            pinBox.style.opacity = 1;
            const generatedPin = userAcc.userName.charAt(0).toUpperCase()+userAcc.userLastName.charAt(0).toUpperCase()+Math.trunc(Math.random(1)*500);
            userAcc.generatedPin = generatedPin;
            welcomeP.insertAdjacentText('beforeend', `Welcome ${userAcc.userName.charAt(0).toUpperCase()+userAcc.userName.substring(1)} 👋 \n Your pin number is: ${generatedPin} `);
            accBox2.classList.add('opacity1');
            
        }else alert("deneme");


        
}
else alert("You already get your pin!");
})



btnLabel.addEventListener('click',function(){
    if(pinInput.value === userAcc.generatedPin) {alert("You have successfully logged in")
    pinP.style.opacity = 1;
    mario.style.opacity = 1;
    setTimeout(() => {
        document.location.reload();
    }, 10000);} 
    else {return alert("Pin is wrong!") };

})











