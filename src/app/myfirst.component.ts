import { Component } from "@angular/core";

@Component({
    selector:'myfirst',
    //selector:'[myfirst]', ----> NO app.component.html fica <div class="myfirst"></div>
    //selector:'.myfirst', ----> NO app.component.html fica <div class="myfirst"></div>
    /*
    template:`
        <h1>My first component</h1>
    `
    */
    templateUrl:'./myfirst.component.html',
    //CRIANDO ESTILOS
    /*
    styles: [`
    .box1{
        width: 200px;
        height: 100px;
        background: chartreuse;
        box-shadow: 5px 10px #CCCCCC;
    }
    `]
    */
    styleUrls:['./myfirst.components.css']
})

export class MyFirstCompnent{

}