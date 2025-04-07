class Alumno {
    constructor(username, DNI) {
      this.username = username;
      this.DNI = DNI;
    }
  
    mostrarDatos() {
      console.log(`Nombre de usuario: ${this.username}, DNI: ${this.DNI}`);
    }
}
  
module.exports = Alumno;