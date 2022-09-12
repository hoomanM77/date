const registerButton=document.querySelector('.create-btn')
const dateTag=document.getElementById('date')

const validation = () => {
    let userDate=dateTag.value
    const regEx=/^(\d{4})\-(0[1-9]|1[012]|[1-9])\-(0[1-9]|[12]\d|3[01]|[1-9])$/

    if(regEx.test(userDate)){
        alert('You are registered successfully!')
    }else{
        alert('Enter your date of birth correctly!')
    }

}
registerButton.addEventListener('click',validation)