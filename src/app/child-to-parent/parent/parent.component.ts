import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  i: number = 0;
  @Output() dataEmitter: any = new EventEmitter<number>();

  sendData(){
    this.i+=1;
    this.dataEmitter.emit(this.i);
  }

}
