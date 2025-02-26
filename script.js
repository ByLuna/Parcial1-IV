document.addEventListener('DOMContentLoaded', function() {
    // Cambia la imagen
    const imagenDengue = document.getElementById('imagenDengue');

   
    const imagen1 = 'https://agn.gt/wp-content/uploads/2024/03/Recomendaciones-para-prevenir-el-dengue.-e1710350107227.jpg';
    const imagen2 = 'https://www.salud.gob.sv/wp-content/uploads/2022/08/como-se-trasmite-el-dengue-cuidemonos-evitemos-el-dengue-800x400-1.jpg';

    
    function cambiarImagen() {
        if (imagenDengue.src === imagen1) {
            imagenDengue.src = imagen2;
            imagenDengue.alt = 'Transmisión del Dengue';
        } else {
            imagenDengue.src = imagen1; // Cambia a la primera imagen
            imagenDengue.alt = 'Prevención del Dengue';
        }
    }

  
    imagenDengue.addEventListener('click', cambiarImagen);


    class Melemento extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            this.shadowRoot.innerHTML =  `
                <p> Nombres De Estudiantes: Nelcy Nohemy Avalos -
                 Daniel Enrique Luna Benavidez </p>
                <p>
                    Primer Examen Parcial - Computo I
                </p>
        `

        }
    }
    customElements.define(footer,Melemento);

});




