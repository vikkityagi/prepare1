import { Component } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {
  comingdata: any = 0;

  receiveData(data:any){
    console.log('i',data);
    this.comingdata = data;

  }

}
