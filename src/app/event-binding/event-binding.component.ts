import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName="My button";
  VariavelDeIncrementoDoMetodoInc = 0;
  constructor() { }
  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName ="Escreva seu nome";

  ngOnInit(): void {
  }

  save(){
    console.log("Click");
  }

  inc(){
    this.VariavelDeIncrementoDoMetodoInc++;
    this.buttonName = "It was clicked "+ this.VariavelDeIncrementoDoMetodoInc + "times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    },3000);
  }

  cbChange(event){
    //console.log("clicked");
    //console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    //console.log(event),
    this.selectedOption = event.value
  }

/*TWO WAY DATA BINDING

  inputEvent(event){
    console.log(event.target.value);
    console.log(this.inputName);
  }
*/
}
