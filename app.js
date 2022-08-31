const error1 = document.querySelector('.err-msg1')
const error2 = document.querySelector('.err-msg2')
const error3 = document.querySelector('.err-msg3')
const error4 = document.querySelector('.err-msg4')
const nameInpt = document.querySelector('.name-inpt')
const cardInpt = document.querySelector('.card-inpt')
const dateInpt = document.querySelector('.date-inpt')
const cvcInpt = document.querySelector('.cvc-inpt')

nameInpt.addEventListener('blur', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(nameInpt.value)) {
        error1.style.display = 'block'
        nameInpt.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error1.style.display = 'none'
        nameInpt.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

cardInpt.addEventListener('blur', () =>{
    const cardvalue = /([0-9]){12}/;
    if(!cardvalue.test(cardInpt.value)){
        error2.style.display = 'block'
    }else{
        error2.style.display = 'none'
    }
})

dateInpt.addEventListener('blur', () => {
    const regex = /([0-9]){7}/;
    if(!regex.test(nameInpt.value)) {
        error3.style.display = 'block'
    dateInpt.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error3.style.display = 'none'
        dateInpt.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

cvcInpt.addEventListener('blur', () => {
    const regex = /([0-9]){3}/;
    if(!regex.test(nameInpt.value)) {
        error4.style.display = 'block'
    cvcInpt.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error4.style.display = 'none'
        cvcInpt.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

const input = document.querySelector('.form')
const wrap = document.querySelector('.wrapper')

input.addEventListener('submit', (e) =>{
    // console.log('submit');
    if(nameInpt.value == '' || dateInpt.value == '' || cvcInpt.value == '' || cardInpt.value == ''){
        error1.style.display = 'block'
        error2.style.display = 'block'
        error3.style.display = 'block'
        error4.style.display = 'block'
        nameInpt.style.borderColor = 'hsl(0, 100%, 66%)'
        dateInpt.style.borderColor = 'hsl(0, 100%, 66%)'
        cvcInpt.style.borderColor = 'hsl(0, 100%, 66%)'
        cardInpt.style.borderColor = 'hsl(0, 100%, 66%)'
        
        setTimeout(() => {
        error1.style.display = 'none'
        error2.style.display = 'none'
        error3.style.display = 'none'
        error4.style.display = 'none'
        nameInpt.style.borderColor = 'hsl(0, 0%, 59%)'
        dateInpt.style.borderColor = 'hsl(0, 0%, 59%)'
        cvcInpt.style.borderColor = 'hsl(0, 0%, 59%)'
        cardInpt.style.borderColor = 'hsl(0, 0%, 59%)'
        }, 3000);
    }else {
        wrap.style.display = 'block'
        input.style.display = 'none'

        setTimeout(() => {
            wrap.style.display = 'none'
            input.style.display = 'block'
            nameInpt.value = '' 
            dateInpt.value = '' 
            cvcInpt.value = '' 
            cardInpt.value = ''
            error1.style.display = 'none'
            error2.style.display = 'none'
            error3.style.display = 'none'
            error4.style.display = 'none'
            nameInpt.style.borderColor = 'hsl(0, 0%, 59%)'
            dateInpt.style.borderColor = 'hsl(0, 0%, 59%)'
            cvcInpt.style.borderColor = 'hsl(0, 0%, 59%)'
            cardInpt.style.borderColor = 'hsl(0, 0%, 59%)'
        }, 5000);
    }
    e.preventDefault()
})