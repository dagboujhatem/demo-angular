import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>();
  @Output() cancelChange:EventEmitter<boolean> =new EventEmitter<boolean>();


  
  constructor() { }

  ngOnInit(): void {
  }
  update(){
    this.customerChange.emit((this.customer))

  }
  cancel(){
    this.cancelChange.emit(true)
  }
}
