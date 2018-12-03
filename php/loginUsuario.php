<?php

    $email = $_POST["email"];
    $contra = $_POST["pass"];

    $db = "castillo";
    $host = "127.0.0.1";
    $user = "root";
    $pass = "";

    $response = "";

    if ( isset($email)
        && isset($contra) ){

            $mysqli = mysqli_connect($host, $user, $pass, $db);

            if ( !$mysqli ){
                $response = [ "data" => [] , "error" => true ];
                echo json_encode($response);
                echo "Error: No se pudo conectar a MySQL." .  mysqli_connect_error();
                exit;
            }

            
            $query = "select id , nombre , apellidos , correo from usuario where correo like '".$email."' and contrasena like '".$contra."'";

            if ( !$resultado = $mysqli->query($query) ) {
                $response = [ "data" => [] , "error" => true ];
                echo json_encode($response);
                exit;
            } 

            if ( $resultado->num_rows === 0 ){
                $response = [ "data" => [] , "error" => false ];
            }

            $data = array();
            while ( $usuario = $resultado->fetch_assoc()){
                $data[] = $usuario;
            }

            $response = [ "data" => $data , "error" => false ];

            echo json_encode($response);

            $resultado->free();
            $mysqli->close();

    } else {

        $response = [ "data" => [] , "error" => true ];
    }

?>