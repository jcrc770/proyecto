class RentasModelos {
  // "r" de recoger(pick up) y "d" de dejar(drop-off)
  constructor(id, nombre, telefono, direccion, ciudad, rlugar, rfecha, rhora, dlugar, dfecha, dhora, cardN, cardE, cardH, CSV, carroId, precioF){
    this.id=id
    this.nombre=nombre
    this.telefono=telefono
    this.direccion=direccion
    this.ciudad=ciudad
    this.rlugar=rlugar
    this.rfecha=rfecha
    this.rhora=rhora
    this.dlugar=dlugar
    this.dfecha=dfecha
    this.dhora=dhora
    this.cardN=cardN
    this.cardE=cardE
    this.cardH=cardH
    this.CSV=CSV
    this.carroId=carroId
    this.precioF=precioF
  }
}
export default RentasModelos