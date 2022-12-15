import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnChanges, OnInit  {

  @Input()  customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();
  @Output() cancelChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  curentCustomer? : any;
  name? : string = "";
  address? : string = "";
  city? : string = "";
  state? : string = "";
  country? : string = "";

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    const customer = changes ["customer"];
    const currentValue = customer ["currentValue"];
    this.name = currentValue ["name"];
    this.address = currentValue ["address"];
    this.city = currentValue ["city"];
    this.state = currentValue ["state"];
    this.country = currentValue ["country"]
  }

  ngOnInit(): void {}
  update() {
    this.customerChange.emit(this.customer);
  }
  cancel() {
    this.cancelChange.emit(true);
  }
  add() {
    this.addChange.emit(this.customer);
  }
}
