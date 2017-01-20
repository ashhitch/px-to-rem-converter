import { Component, OnInit } from '@angular/core';
import { RemSettings } from '../rem-settings';
import {  MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-px-rem',
  templateUrl: './px-rem.component.html',
  styleUrls: ['./px-rem.component.scss'],
  providers: [MdSnackBar]
})
export class PxRemComponent implements OnInit {

  model: RemSettings;
  result: any;

  constructor(public snackBar: MdSnackBar) {

    const pxValues = '6,8,9,10,11,12,13,14,15,16,18,20,21,22,23,24,26,27,28,29,30,32,34,36,38,40,50,60,70';
    const baseValue = 16;

    this.model = new RemSettings(pxValues, baseValue);

    this.result = [];
   }

  ngOnInit() {

    this.calc();
  }

updated() {
  this.snackBar.open('Results Updated', 'Updated');
}

  calc() {

    this.result = [];
    const output  = this.model.pxValues.split(',');
    const accuracy = 4;

    output.map(val => {
        const px = parseInt(val, 10);
        const rem =  parseFloat( ( px / this.model.baseValue ).toPrecision( accuracy ) );
        const isBase = (rem===1) ? true : false;

        const outputVal = {
          px,
          rem,
          isBase
        }

       this.result.push(outputVal);


    });



  }

}
