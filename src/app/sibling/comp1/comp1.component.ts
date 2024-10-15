import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  count1: number = 0;
  showData1: number = 0;

  constructor(private dataService: SharedServiceService){

    this.dataService.dataSubject.subscribe({
      next: data=>{
        this.showData1 = data;
      }
    })

  }

  sendData(){
    this.count1+=1;
    this.dataService.dataSubject.next(this.count1);
  }

}
