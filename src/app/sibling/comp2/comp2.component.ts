import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  count2: number = 0;
  showData2: number = 0;

  constructor(private dataService: SharedServiceService){

    this.dataService.dataSubject.subscribe({
      next: data=>{
        this.showData2 = data;
      }
    })

  }

  sendData(){
    this.count2+=1;
    this.dataService.dataSubject.next(this.count2);
  }

}
