
const btn = document.querySelector('button');
const quoteBody = document.querySelector('p')
const quoteNumber = document.querySelector('#number')

// fetch api 
const advice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error);
    }
}




btn.addEventListener('click',()=>{
    advice().then((data)=>{
        quoteBody.textContent = data.slip.advice;
        quoteNumber.textContent = data.slip.id;
    })
})