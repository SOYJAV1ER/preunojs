

let edad=prompt("¿que edad tienes muchachito?");

if(edad < 18){
    alert("¡vuelve a la escuela mocoso!")
    
}else{
    alert("mmm... de acuerdo, pasa... debería pedirte tu documento");
    let nombre=prompt("¿como te llamas?");
    alert("toma asiento " + nombre);
    alert("Te advierto... en esta taberna no hay mas fiado!")
    let dinero=prompt("¿cuanto dinero tienes para gastar?");
    if(dinero < 5){
        alert("oye muchachito... sal de mi taberna y regresa con mas dinero")
    }else{
        alert("de acuerdo " + nombre  +  " toma una cerveza!");
        let valorCerveza=5
        for (let i = 2; i <= dinero ; i++) {
            let resultado = valorCerveza * i;
            console.log (resultado);
            console.log(dinero);
        if(resultado <= dinero){
            alert("¿otra cerveza? toma!");
        }else{
            alert("Es todo por hoy " + nombre  + " ya no te alcanza el dinero y estás ebrio! ve a casa...");
        break;}
        }
    }
}






