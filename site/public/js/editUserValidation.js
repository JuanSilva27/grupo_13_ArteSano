window.addEventListener("load",()=>{

    let provincia= document.querySelector("#provincia")
let localidad= document.querySelector("#localidad")
let userProv=document.querySelector("#userProv")
let userLoc=document.querySelector("#userLoc")

fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(resultado => {
        return resultado.json()
    })
    .then(provData => {
        let prov = provData.provincias.map(provincia=>{
            return provincia.nombre
        })
        let provAz= prov.sort()
        
        
        for (let i = 0; i < provAz.length; i++) {
            if(userProv.value===provAz[i]){
            provincia.innerHTML += `<option value="${provAz[i]}" selected  > ${provAz[i]} </option>`
            }else{
            provincia.innerHTML += `<option value="${provAz[i]}"> ${provAz[i]} </option>`
            }
        }
    }).then(()=>{
        if(provincia.value==="Ciudad Autónoma de Buenos Aires" || provincia.value==="Santiago del Estero" || provincia.value==="Santa Cruz"|| provincia.value==="Entre Ríos"){
                fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia.value}&max=300`)
                .then(resultado => {
                    
                    return resultado.json()
                })
                .then(data => {
                    let localidades= data.localidades.map(element=>{
                        return element.nombre
                    })
                    console.log(localidades)
                    let localidadesAz= localidades.sort()
                    for (let i = 0; i < localidadesAz.length; i++) {
                        if(localidadesAz[i]===userLoc.value){
                        localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]} selected>${localidadesAz[i]} </option>`
                        }else{
                            localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]}>${localidadesAz[i]} </option>`
                        }
                    }
                })
            }
            fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.value}&max=300`)
                .then(resultado => {
                    
                    return resultado.json()
                })
                .then(data => {
                    let muni= data.municipios.map(element=>{
                        return element.nombre
                    })
                    let muniAz= muni.sort()
                    for (let i = 0; i < muniAz.length; i++) {
                        if(muniAz[i]===userLoc.value){
                        localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]} selected>${muniAz[i]} </option>`
                        }else{
                            localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]}>${muniAz[i]} </option>`
                        }
                    }
                })
    })
    provincia.addEventListener("change", () => {
        if(provincia.value==="Ciudad Autónoma de Buenos Aires" || provincia.value==="Santiago del Estero" || provincia.value==="Santa Cruz"|| provincia.value==="Entre Ríos"){
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia.value}&max=300`)
            .then(resultado => {
                
                return resultado.json()
            })
            .then(data => {
                localidad.innerHTML = `<option class="optionProv" value="0" disabled selected> Seleccione tu localidad </option>`
                let localidades= data.localidades.map(element=>{
                    return element.nombre
                })
                console.log(localidades)
                let localidadesAz= localidades.sort()
                for (let i = 0; i < localidadesAz.length; i++) {
                    localidad.innerHTML += `<option class="optionProv" value=${localidadesAz[i]}>${localidadesAz[i]} </option>`
                }
            })
        }
        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.value}&max=300`)
            .then(resultado => {
                
                return resultado.json()
            })
            .then(data => {
                localidad.innerHTML = `<option class="optionProv" value="0" disabled selected> Seleccione tu localidad </option>`
                let muni= data.municipios.map(element=>{
                    return element.nombre
                })
                let muniAz= muni.sort()
                for (let i = 0; i < muniAz.length; i++) {
                    localidad.innerHTML += `<option class="optionProv" value=${muniAz[i]} >${muniAz[i]} </option>`
                }
            })
    })
    
            





})