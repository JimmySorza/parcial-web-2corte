var name = prompt("Introduce tu nombre");
var age = prompt("Introduce tu edad");
const url = 'https://api.agify.io/?name='+name

fetch(url).then((response)=>{
    return response.json();  // converting byte data to json
}).then(data=>{
    if (data.age === age){
        alert("segun nuestras predicciones, si tienes "+ data.age + " años de edad")
    } else  {
        alert("Nuestras predicciones dicen que tienes en realidad "+ data.age + " años de edad")
    }
})
