import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @Output() i:any =  new EventEmitter<number>;

  sendData(){
    this.i.emit(this.i+=1)
  }

}
