<?php             
    $db = "castillo";
    $host = "127.0.0.1";
    $user = "root";
    $pass = "";

    $response = "";
    
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellido"];
    $correo = $_POST["correo"];
    $contra = $_POST["contrasena"];

    if ( isset($nombre) 
        && isset($apellidos)
        && isset($correo)
        && isset($contra)
        ){

        $mysqli = mysqli_connect($host, $user, $pass, $db);

        if (!$mysqli) {
            echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
            echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
            echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }

        $query = "insert into usuario ( nombre , apellidos , correo , contrasena ) " .
            "values ('".$nombre."' , '".$apellidos."' , '".$correo."' , '".$contra."')";

        $result = $mysqli->query($query);
        $mysqli->close();

        $response = [ "status" => $result ];
    } else {
        $response = [ "status" => false ];
    }

    echo json_encode($response);
?>