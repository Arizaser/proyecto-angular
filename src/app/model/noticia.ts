export class Noticia{
  constructor(
    public id: number,
    public consulta_sql:string,
    public fecha:Date,
    public fechaInicio:Date,
    public fechaFinal:Date,

  ){

  }
}
