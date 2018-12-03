(function (){
        formulario = document.getElementById('formulario')
        nombre = formulario.nombre,
        apellido = formulario.apellido,
        correo = formulario.correo,
        contrasena = formulario.contrasena,
        error = document.getElementById('error');

        function validarNombre ( ){
            if(nombre.value == '' || nombre.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el nombre</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarApellido (){
            if(apellido.value == '' || apellido.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el apellido</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarCorreo( ){
            if(correo.value == '' || correo.value == null ){
                console.log('Por favor pon un correo correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el correo</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarContrasena( ){
            if(contrasena.value == '' || contrasena.value == null ){
                console.log('Por favor pon una Contraseña');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa la contraseña</li>';
            }else{
                error.style.display='none';
            }
        }



        function validarFormulario(e){
            e.preventDefault();
            error.innerHTML= '';

            validarNombre();
            validarApellido();
            validarCorreo();
            validarContrasena();

            if ( error.innerHTML == "" ){
                
                console.log(formulario);

                var params = {
                    method: "POST",
                    body: formulario
                }

                fetch('http://127.0.0.1/PizzasCastillo/php/registroUsuario.php' , params )
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        console.log(data);
                    });
            }
          
        }

        formulario.addEventListener('submit', validarFormulario);
}())