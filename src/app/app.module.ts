import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CervejasListagemComponent } from './cervejas-listagem/cervejas-listagem.component';
import { CervejaService } from './cerveja.service';

@NgModule({
  declarations: [
    AppComponent,
    CervejasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CervejaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
