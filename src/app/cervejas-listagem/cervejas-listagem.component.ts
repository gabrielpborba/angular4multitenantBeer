import { Component, OnInit } from '@angular/core';
import { CervejaService } from '../cerveja.service';

@Component({
  selector: 'app-cervejas-listagem',
  templateUrl: './cervejas-listagem.component.html',
  styleUrls: ['./cervejas-listagem.component.css']
})
export class CervejasListagemComponent implements OnInit {

  cervejas: Array<any>;

  constructor(private cervejaService: CervejaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.cervejaService.listar().subscribe(dados => this.cervejas = dados);
  }
}
