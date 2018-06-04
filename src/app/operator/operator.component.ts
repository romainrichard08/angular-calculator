import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  numbers: any;
  result: number; 
  operator1: number;
  operator2: number;
  operatorSign: number;
  operatorLabel: string;
  operatorList: Array <string> = [
      "-",
      "+",
      "x"
    ];

  constructor() 
  { 
    this.generateOperation();
    this.numbers = _.range(100);
  }

  generateOperation()
  {
    this.operator1 = this.generateNumber(9);
    this.operator2 = this.generateNumber(9);
    this.operatorSign = this.generateNumber(2);

    switch(this.operatorSign) {
      case 0:
        this.result = this.operator1 - this.operator2;
        break;
      case 1:
        this.result = this.operator1 + this.operator2;
        break;
      case 2:
        this.result = this.operator1 * this.operator2;
        break;
      default: 
        break;
    }
    
    this.operatorLabel = this.operatorList[this.generateNumber(2)];
    console.log('result : ' + this.result);

  }

  generateNumber(max)
  {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  getNumber(number)
  {
    let background = "";
    if(number === this.result)
    {
      console.log("ok");
      background = "green";
      console.log(background);
      this.generateOperation();

    }
    else 
    {
      console.log("ko");
      background = "red";
      console.log(background);
    }

  }



  ngOnInit() {
  }

}
