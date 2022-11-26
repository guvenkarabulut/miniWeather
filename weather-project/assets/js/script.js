const url='https://api.openweathermap.org/data/2.5/'
const key='7877f6563f0c7e57b230144397f14b37'

function setQuery(){
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //https://api.openweathermap.org/data/2.5weather?q=Ankara&appid=7877f6563f0c7e57b230144397f14b37&units=metric&lang=tr
    //let query = ('${url}weather?q=${5}&appid=${key}&units=metric&lang=tr')
    let query=(url+'weather?q='+inputText.value+'&appid='+key+'&units=metric&lang=tr')
    console.log(query);
     fetch(query)
     .then(weather => {
         return weather.json()
    })
    .then(displayResult)
}
function displayResult(result){
    console.log(result);
}

const inputText=document.getElementById('textBar')
const button=document.getElementById('button-addon1')

button.addEventListener('click',setQuery)