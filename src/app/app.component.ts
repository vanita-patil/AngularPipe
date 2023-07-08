import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students=[
    {name:'raj patil',course:'MCA',marks:520,DOB:new Date('11-12-1990'),gender:'male',fees:10000,per:0.60},
    {name:'riya sharma',course:'MBA',marks:580,DOB:new Date('09-10-1995'),gender:'female',fees:20000,per:0.60},
    {name:'priya verma',course:'MCA',marks:300,DOB:new Date('06-07-2000'),gender:'female',fees:10000,per:0.60},
    {name:'guru desai',course:'MCA',marks:400,DOB:new Date('11-12-1998'),gender:'male',fees:10000,per:0.60},
    {name:'tina patil',course:'MBA',marks:550,DOB:new Date('11-12-1996'),gender:'female',fees:20000,per:0.60}
    ];
    total:number=600;
  }

