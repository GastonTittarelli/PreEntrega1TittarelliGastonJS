let usuario = "1";
let distrib = "2";

function sistema() {
    //Este sería el caso de formar parte del equipo de trabajo (distrib)
    let ingreso = prompt("Ingrese 1 si es cliente o 2 si forma parte del equipo de trabajo")
    if (ingreso === distrib) {
        let savedPIN = "4364";

        function login() {
            let ingresar = false;

            for (let i = 2; i >= 0; i--) {
                let userPIN = prompt("Ingresa tu PIN . Tenés " + (i + 1) + " Oportunidades");

                if (userPIN === savedPIN) {
                    alert("Ingreso exitoso");
                    ingresar = true;
                    break;
                } else {
                    alert("Error. Te quedan " + i + " intentos");
                }
            }
            return ingresar;
        }

        let exito = login();
        //Esta dentro de la cuenta de la empresa
        if (exito) {
            //Accedemos a la info de la cuenta si la hubiese    
            let opcion = prompt(
                "Bienvenido trabajador de Distribuidora Tittarelli! \nElegí una opción: \n1 - Saludar. \n2 - Despedir. \nPresioná X para finalizar."
            );
            while (opcion != "X" && opcion != "x") {
                switch (opcion) {
                    case "1":
                        alert("¡Hola que tengas un buen día!");
                        break;
                    case "2":
                        alert("¡Chau, que tengas un buen día!");
                        break;
                    default:
                        alert("Opción no valida");
                        break;
                }
                opcion = prompt(
                    "Bienvenido trabajador de Distribuidora Tittarelli! \nElegí una opción: \n1 - Saludar. \n2 - Despedir. \nPresioná X para finalizar.");
            }
        }
    }
    //Este sería el caso del ingreso del cliente 
    else if (ingreso === usuario) {
        let producto = prompt("Elegí un producto para consultar el precio: \n1- Cerveza Corona 330ml. \n2 - Fernet Branca 750ml. \n3 - Beefeater 1000ml. \nX - para salir");
        while (producto != "X" && producto != "x") {
            switch (producto) {
                case "1":
                    alert("$400" + " La unidad");
                    break;
                case "2":
                    alert("$1700" + " La unidad");
                    break;
                case "3":
                    alert("$2700" + " La unidad");
                    break;
                default:
                    alert("Error, elija alguna de las opciones que se muestran en pantalla")
                    break;
            }
            producto = prompt("Elegí un producto para consultar el precio: \n1- Cerveza Corona 330ml. \n2 - Fernet Branca 750ml. \n3 - Beefeater 1000ml. \nX - para salir");
        }
    }
    //Cualquier otra opcion no propuesta en el alert
    else {
        alert("Error, ingrese las opciones propuestas en pantalla");
        sistema();
    }
}
//Ultimo mensaje al finalizar la función
sistema();
alert("Gracias por operar con nosotros");
