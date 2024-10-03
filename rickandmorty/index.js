//* Mostrar los personajes pero sin filtrar
//* Tenemos que obtener todos los personajes llamando a la api
//* Renderizar en el dom
//* Cuando cambien los filtros se tiene que hacer un llamado nuevo a la api
//* Se debe renderizar nuevamente

//! COMENZAR CON LA LOGICA EN JAVASCRIPT


const characterEl=document.querySelector('#characters')
const nameFilterEl=document.querySelector('#name-filters')
const statusFilter=document.querySelector('#status-filter')

async function getCharacters(name,status) {
    let url='https://rickandmortyapi.com/api/character'

    if(name|| status){
        url+='?'
        if(name){
            url+=`name=${name}&`
        }
        if(status){
            url+=`status=${status}&`

        }
    }
    const respuesta= await fetch(url)
    const data=await respuesta.json()
    console.log(data.results);
    return data.results
}
getCharacters()

async function displayCharacters(name,status){

    const characters=await getCharacters(name,status)
    characterEl.innerHTML=''
    for (const character of characters) {
        const card=document.createElement('div')
        card.classList.add('character-card')

        card.innerHTML=`
            <img src="${character.image}">
            <h2>${character.name}</h2>
            <p> Status ${character.status}</p>
            <p>Especie ${character.species}</p>
        `
        characterEl.appendChild(card)
    }

}

nameFilterEl.addEventListener('input',()=>{
    // console.log(nameFilterEl.value);
    displayCharacters(nameFilterEl.value,statusFilter.value)
    
})
statusFilter.addEventListener('change',()=>{
    displayCharacters(nameFilterEl.value,statusFilter.value)
})