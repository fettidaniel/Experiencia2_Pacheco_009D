function calculaEdadMascota() {
    var mascota= document.querySelector('input[name="mascota"]:checked').value;
    var edad= document.getElementById('anios').value;
    var edadPerro=0
    var edadGato=0
    if(mascota==1){
        edadPerro= edad*7
        alert('Tu mascota tiene '+ edadPerro + ' años')
    }; 
    if(mascota==0){
        if(edad==1){
            alert('Tu mascota tiene 15 años')
        }
        else{
            if(edad==2){
                alert('Tu mascota tiene 24 años')
            }
            else{
                edadGato = ((edad*4) + 25)-13+4
                alert('Tu mascota tiene '+ edadGato + ' años')
            }    
        }
    }
}