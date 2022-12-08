const url='https://api.openweathermap.org/data/2.5/'
const key='<URL KEY HERE>'

function setQuery(){
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
    const{name}=result;
    const{icon,description}=result.weather[0];
    const{temp,humidity}=result.main;

    document.getElementById('sehir').innerHTML=`Şehir:${name}`
    document.getElementById('durum').innerHTML=`Durum:${description}`
    document.getElementById('nem').innerHTML=`Nem:${humidity}`
    document.getElementById('sicaklik').innerHTML=`Sıcaklık:${temp}`
    document.getElementById('image').setAttribute("src","http://openweathermap.org/img/wn/"+icon+"@2x.png")
}

const inputText=document.getElementById('textBar')
const button=document.getElementById('button-addon1')


button.addEventListener('click',setQuery)