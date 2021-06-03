//Funcion del Boton Área Triangulo.

function areatriang (base,altura){
    var base = parseFloat (prompt ('Escribe la base del tringulo : '));
    var altura = parseFloat (prompt ('Escriba la altura del tringulo: '));
    var resultado = (base * altura) / 2;
    alert ('La Operación Que Realizó Fue : '+ base + ' * ' + altura + ' = ?'); 
    alert ('El Área Del Triangulo Es: ' + resultado);
    }

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//Funcion Operaciones Aritmeticas.

function aritmeticas(num1,num2){
    var num1 = parseFloat (prompt('Por favor, ingrese un número: '));
    var num2 = parseFloat (prompt('Por favor, ingrese un número: '));
    
    //Operaciones.
    var suma = (num1 + num2);
    var resta = (num1 - num2)
    var multi = (num1 * num2)
    var div = (num1 / num2)

    alert (' La suma es : ' + suma + '\n La resta es : ' + resta + '\n La multiplicación es : ' + multi + '\n La división es : ' + div );
}
    
//Funcion Edad Del Participante.

function logicos (edad){
    var edad = parseInt(prompt('Por favor, indique su edad : '))

    if (edad >= 18 && edad <= 29){
        alert ('Usted Ha Sido Aceptado En EL Programa de Generation!!!! :D')
    }

    else{
        alert ('Usted No Cumple Los Requisitos!!!! :C')
    }
    }

//Funcion Sueldo Del Trabajador.

function sueldo (quin_brut,quin_neto,mens_bruto,mens_neto){
    alert ('A continuación se mostrará el estatus quincenal y mensual.');
    var sal_diario = parseFloat(prompt ('Por favor, escriba su salario diario:'));

    //Salario Quincenal Bruto (Supeniendo que descanza sab/dom).
    var quin_bruto = (sal_diario * 10);

    //Salario Quincenal Neto.
    var quin_neto = (quin_bruto * .40);

    //Salario Mensual Bruto (4 semanas).
    var mens_bruto = (sal_diario * 20);

    //Salario Mensual Neto.
    var mens_neto = (mens_bruto * .40);

    //Información a Detalle.
    var detalle_mens = String (' Salario Mensual Bruto: '+ mens_bruto +' \n Salario Mensual Neto: '+ mens_neto +'');

    var detalle_quin = String ('\n Salario Quincenal Bruto: '+ quin_bruto +' \n Salario Quincenal Neto: '+ quin_neto +'');


    //Muestra toda la información.
    alert ('Detalle Mensual: \n' + detalle_mens + '\nDetalle Quincenal: ' + detalle_quin);
}
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//Funcion Suma.

function suma ( num1 , num2 ){

    var num1 = parseFloat ( prompt ('Por Favor, Escriba Un Numero: ') ) ;
    var num2 = parseFloat ( prompt ('Por Favor, Escriba Otro Numero: ') ) ;
    var resultado = ( num1 + num2 ) ;
    alert ( 'La Operación Es : ' + num1 + ' + ' + num2 + ' = ?' + '\nEl Resultado Es : ' + resultado )
}

//Arreglo De Meses (Arreglo y Ciclo).




    


    