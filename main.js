// Definimos una clase para representar a un alumno.
class Alumno {
    // El constructor se llama cuando creamos un nuevo alumno.
    // Asigna el nombre dado al alumno y crea un array vacío para las notas.
    constructor(nombre) {
      this.nombre = nombre;
      this.notas = [];
    }
    
    // Método para agregar una nota al array de notas del alumno.
    agregarNota(nota) {
      this.notas.push(nota);
    }
    
    // Método para calcular el promedio de las notas del alumno.
    calcularPromedio() {
      // Suma todas las notas y luego divide por la cantidad de notas para obtener el promedio.
      const suma = this.notas.reduce(function(a, b) { return a + b; }, 0);
      return suma / this.notas.length;
    }
    
    // Método para verificar si el alumno aprobó o reprobó, basado en su promedio.
    verificarAprobacion(minimoParaAprobar = 4.0) {
      return this.calcularPromedio() >= minimoParaAprobar ? "Aprobó" : "Reprobó";
    }
  }
  
  // Función para solicitar los datos de un alumno al usuario.
  function solicitarDatosAlumno() {
    let nombre = prompt("Por favor, ingresa el nombre del alumno:");
    let alumno = new Alumno(nombre);
    
    // Solicitamos 4 notas y las agregamos al alumno.
    for (let i = 0; i < 4; i++) {
      let nota = parseFloat(prompt("Por favor, ingresa la nota " + (i + 1) + " del alumno:"));
      alumno.agregarNota(nota);
    }
    
    // Devolvemos el alumno completo.
    return alumno;
  }
  
  // Función para calcular el promedio de toda la clase.
  function calcularPromedioClase(alumnos) {
    // Sumamos todos los promedios de los alumnos y luego dividimos por la cantidad de alumnos.
    const sumaPromedios = alumnos.reduce(function(suma, alumno) { return suma + alumno.calcularPromedio(); }, 0);
    return sumaPromedios / alumnos.length;
  }
  
  // Creamos un array para almacenar a todos los alumnos.
  let alumnos = [];
  let cantidadAlumnos = prompt("¿Cuántos alumnos desea agregar?");
  
  // Verificamos si la cantidad de alumnos es un número válido.
  if(cantidadAlumnos !== null) {
    cantidadAlumnos = parseInt(cantidadAlumnos);
  
    // Si la cantidad de alumnos es un número, procedemos a solicitar los datos de cada alumno.
    if(!isNaN(cantidadAlumnos)) {
      for (let i = 0; i < cantidadAlumnos; i++) {
        let alumno = solicitarDatosAlumno();
        alumnos.push(alumno);
  
        // Imprimimos el promedio y el estado de aprobación de cada alumno.
        console.log("El promedio de " + alumno.nombre + " es " + alumno.calcularPromedio());
        console.log("El alumno " + alumno.nombre + " " + alumno.verificarAprobacion());
      }
  
      // Imprimimos el promedio de la clase.
      console.log("El promedio de la clase es " + calcularPromedioClase(alumnos));
    } else {
      // Si la cantidad de alumnos no es un número, imprimimos un error.
      console.log("No has introducido un número válido de alumnos.");
    }
  } else {
    // Si la cantidad de alumnos es null (porque el usuario presionó cancelar), imprimimos un error.
    console.log("No has introducido un número de alumnos.");
  }
  