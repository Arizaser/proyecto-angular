import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiasService } from 'src/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public title:string;
  public noticias:Noticia[];

  constructor(
    private __noticiasService: NoticiasService,
  ) { }

  ngOnInit(): void {
    this.__noticiasService.getNoticia().subscribe(
      result => {
        if(result['code'] != 200){
          console.log(result);
        }else{
          this.noticias = result['data'];
        }
      },
      error => {
        console.log(<any>error);
      }

    )
  }

}
