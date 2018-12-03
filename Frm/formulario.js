(function (){
    var formulario = document.getElementById('formulario')
        nombre = formulario.nombre,
        apellido = formulario.apellido,
        correo = formulario.correo,
        contrasena = formulario.contrasena,
        error = document.getElementById('error');

        function validarNombre (e){
            if(nombre.value == '' || nombre.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el nombre</li>';

                e.preventDefault();
            }else{
                error.style.display='none';
            }
        }

        function validarApellido (e){
            if(apellido.value == '' || apellido.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el apellido</li>';

                e.preventDefault();
            }else{
                error.style.display='none';
            }
        }

        function validarCorreo(e){
            if(correo.value == '' || correo.value == null ){
                console.log('Por favor pon un correo correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el correo</li>';

                e.preventDefault();
            }else{
                error.style.display='none';
            }
        }

        function validarContrasena(e){
            if(contrasena.value == '' || contrasena.value == null ){
                console.log('Por favor pon una Contraseña');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa la contraseña</li>';

                e.preventDefault();
            }else{
                error.style.display='none';
            }
        }



        function validarFormulario(e){
            error.innerHTML= '';

            validarNombre(e);
            validarApellido(e);
            validarCorreo(e);
            validarContrasena(e);
          
        }

        formulario.addEventListener('submit', validarFormulario);
}())