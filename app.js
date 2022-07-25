/**
 * Observaciones:
 * 1. Buen trabajo
 * 2. Buena organización y documentación de código
 * 3. Muestra bien los datos en la tabla
 * 4. Aplica bien las validaciones de color
 * 5. El formulario está bien validado respecto a recibir decimales con mas de dos digitos después de la coma
 * 6. Se realiza bien el cálculo
 * 7. No se realiza validacion de que no se reciban notas por debajo de 0.0 y superiores a 5.0
 * 8. No se aplica el redondeo a partir del decimal .95
 *
 * Progreso ---> 95% (Buen trabajo, pero recomiendo terminar completamente el ejercicio)
 */


window.addEventListener('load', (e) => {
    /**
     * Clase asigantura
     */
    class Asignatura {
        /**
         * @param {String} nombre El nombe de la asigantura
         * @param {Number} primerPrevio  nota primer examen 
         * @param {Number} segundoPrevio  nota segundo examen
         * @param {Number} tercerPrevio  nota tercer examen
         * @param {Number} examenFinal  nota examen final 
         */
        constructor(nombre, primerPrevio, segundoPrevio, tercerPrevio, examenFinal) {
            this.nombre = nombre;
            this.primerPrevio = primerPrevio;
            this.segundoPrevio = segundoPrevio;
            this.tercerPrevio = tercerPrevio;
            this.examenFinal = examenFinal;
        }

        /**
         * funcion visualizar objeto
         * @returns {Asignatura} devuelve datos del objeto
         */
        toString() {
            return this;
        }
    }

    /**
     *@type {array<Asignatura>} listado de asignaturas
     */
    let arrayAsignatura = Array();


    /**
     * funcion añadir una nueva asigantura
     * @param {Asignatura} info cantidad de asignaturas nuevas 
     * @returns {boolean} retorna true si fue añadido. false sino lo fue.
     */
    function crearAsignatura(info) {
        if (info != undefined) {
            arrayAsignatura.push(info);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Evento click 
     */
    boton.addEventListener('click', (e) => {
        var nombre = document.getElementById("nombre").value;
        var primerPrevio = document.getElementById("primerPrevio").value;
        var segundoPrevio = document.getElementById("segundoPrevio").value;
        var tercerPrevio = document.getElementById("tercerPrevio").value;
        var examenFinal = document.getElementById("examenFinal").value;
        if (nombre != "" && primerPrevio != "" && segundoPrevio != "" && tercerPrevio != "" && examenFinal != "") {
            let resultado = crearAsignatura(new Asignatura(nombre, primerPrevio, segundoPrevio, tercerPrevio, examenFinal));
            if (resultado == true) {
                alert("Asignatura añadida correctamente");
                calcularNota();
                visualizarArray();
                cargarTabla()
            } else {
                alert("Asignatura no añadida");
            }

        } else {
            alert("Asignatura no añadida");
        }
    });

    /**
     * Funcion visualizar vector
     * @returns {void}
     */
    function visualizarArray() {
        console.log(arrayAsignatura)
    }

    /**
     * funcion calcular nota
     * @returns {void} 
     */
    function calcularNota() {
        if (arrayAsignatura != undefined) {
            arrayAsignatura.forEach((info) => {
                let calculo = (((Number(info.primerPrevio) + Number(info.segundoPrevio) + Number(info.tercerPrevio)) / 3) * 0.7) + Number(info.examenFinal) * 0.3;
                info.definitiva = Math.ceil(calculo);
            });
        }
    }

    /**
     * funcion cargar tabla en index html
     * @returns {void}
     */
    function cargarTabla() {
        let tmp = ` 
        <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Primer Previo</th>
                        <th scope="col">Segundo Previo</th>
                        <th scope="col">Tercer previo</th>
                        <th scope="col">Examen Final</th>
                        <th scope="col">Definitiva</th>
                    </tr>
                </thead>
        <tbody>
        `;

        arrayAsignatura.map((info) => {
            tmp += `
        <tr>
          <td>${info.nombre}</td>
          <td>${info.primerPrevio}</td>
          <td>${info.segundoPrevio}</td>
          <td>${info.tercerPrevio}</td>
          <td>${info.examenFinal}</td>
          <td class="${cambiarColor(info.definitiva)}">${info.definitiva}</td>
        </tr>
       `
        });

        tmp += `</tbody>`;

        const div = document.querySelector("table");
        div.innerHTML = tmp;
    }

    /**
     * Funcion cambio de color dependiendo la nota
     * @param {Number} nota valor de la definitiva
     * @returns {String} color que representa la nota
     */
    function cambiarColor(nota) {
        let tmp = "";
        if (nota != null) {
            if (nota >= 0.0 && nota < 2.9) {
                tmp = "bg-danger";
            } else if (nota >= 3.0 && nota <= 3.9) {
                tmp = "bg-warning";
            } else if (nota >= 4.0) {
                tmp = "bg-success";
            }
        }
        return tmp;
    }
});
