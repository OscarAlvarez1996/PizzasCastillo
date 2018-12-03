<?php             
    $db = "castillo";
    $host = "127.0.0.1";
    $user = "root";
    $pass = "";

    echo var_dump($_GET["nombre"]);
    
    /*
    $usuario = $_GET["usuario"];
    $pass = $_GET["pass"];

    if ( isset($usuario) && isset($pass)){

        $mysqli = mysqli_connect($host, $user, $pass, $db);

        if (!$mysqli) {
            echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
            echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
            echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }

        $nombre = "";
        $apellidos = "";
        $correo = "";
        $contra = "";

        $query = "insert into usuario ( nombre , apellidos , correo , contrasena ) " .
            "values ('".$nombre."' , '".$apellidos."' , '".$coreo."' , '".$contra."')";

        echo $query;

        $mysqli->query($query);
        $mysqli->close();
    } else {

    }
    */
?>