//Variables
const resultado = document.querySelector(`#resultado`)
const marca = document.querySelector(`#marca`)
const year = document.querySelector(`#year`)
const minimo = document.querySelector(`#minimo`)
const maximo = document.querySelector(`#maximo`)
const puertas = document.querySelector(`#puertas`)
const transmision = document.querySelector(`#transmision`)
const color = document.querySelector(`#color`)

const max = new Date().getFullYear()
const min = max - 10 


const datosBusqueda = {
    marca : ``,
    year : ``,
    minimo : ``,
    maximo : ``,
    puertas : ``,
    transmision : ``,
    color : ``,

}
//Eventos
document.addEventListener(`DOMContentLoaded`, () => {
    mostrarAutos(autos) // Muestra los autos al cargar la pagina

        
    //Llena las opciones de años
    llenarSelect()
})

marca.addEventListener(`change`, e => {
   datosBusqueda.marca = e.target.value;

   filtrarAuto()
})
year.addEventListener(`change`, e => {
   datosBusqueda.year = parseInt(e.target.value)

   filtrarAuto()
})
minimo.addEventListener(`change`, e => {
   datosBusqueda.minimo = parseInt(e.target.value)
   
   filtrarAuto()
})
maximo.addEventListener(`change`, e => {
   datosBusqueda.maximo = parseInt(e.target.value)
   
   filtrarAuto()
})
puertas.addEventListener(`change`, e => {
   datosBusqueda.puertas = parseInt(e.target.value)
   
   filtrarAuto()
})
transmision.addEventListener(`change`, e => {
   datosBusqueda.transmision = e.target.value;
   
   filtrarAuto()
})
color.addEventListener(`change`, e => {
   datosBusqueda.color = e.target.value;
   filtrarAuto()
   
   console.log(datosBusqueda);
})




function mostrarAutos(autos){

   limpiarHTML()

    autos.forEach(auto => {
        const autoHTML = document.createElement(`p`)
        const { marca , modelo , year , precio , puertas , transmision , color} = auto 
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - ${precio} Dolares - ${color}
        
        
       
        `
        resultado.appendChild(autoHTML)
    })

}

//Limpiar HTML
function limpiarHTML(){
   while(resultado.firstChild){
      resultado.removeChild(resultado.firstChild)
   }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement(`option`)
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)//Agrega las opciones de año
    
    }

   
}
//Filtra de acuerdo a la busqueda
function filtrarAuto(){
       
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarPuertas).filter(filtrarTrans).filter(filtrarColor).filter(filtrarMax)
   /* console.log(resultado) */
   mostrarAutos(resultado)

   if( resultado.length){
      mostrarAutos(resultado)
   }else{
      noFound();
   }
}

function noFound(){
   limpiarHTML()
   const noFound = document.createElement(`div`)
   noFound.classList.add(`alerta`, `error`)
   noFound.textContent = `No hay Resultados`
   resultado.appendChild(noFound)
  
}


function filtrarMarca(auto){
   const{ marca } = datosBusqueda
if(marca){
   return auto.marca=== marca
}
return auto
}

function filtrarYear(auto){
   const{ year } = datosBusqueda
   
if(year){
   return auto.year === year
}
return auto

}

function filtrarMin(auto){
   const{ minimo } = datosBusqueda
   
if(minimo ){
   return auto.precio >= minimo
}
return auto

}

function filtrarMax(auto){
   const{ maximo } = datosBusqueda
   
if( maximo ){
   return auto.precio <= maximo
}
return auto

}

function filtrarPuertas(auto){
   const{ puertas } = datosBusqueda
   
if(puertas){
   return auto.puertas === puertas
}
return auto

}
function filtrarTrans(auto){
   const{ transmision } = datosBusqueda
   
   if(transmision){
   return auto.transmision === transmision
}
return auto

}
function filtrarColor(auto){
   const{ color } = datosBusqueda
   
   if(color){
   return auto.color === color
}
return auto

}

