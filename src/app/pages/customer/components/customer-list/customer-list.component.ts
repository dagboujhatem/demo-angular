import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  selectedCustomer?: Customer = new Customer();
  showDetail = false;

  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Rahuld Dravid',
      address: '',
      city: 'Banglaore',
      state: 'Karnataka',
      country: 'India',
    },
    {
      customerNo: 2,
      name: 'Sachin Tendulkar',
      address: '',
      city: 'Mumbai',
      state: 'Maharastra',
      country: 'India',
    },
    {
      customerNo: 3,
      name: 'Saurrav Ganguly',
      address: '',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
    },
    {
      customerNo: 4,
      name: 'Mahendra Singh Dhoni',
      address: '',
      city: 'Ranchi',
      state: 'Bihar',
      country: 'India',
    },
    {
      customerNo: 5,
      name: 'Virat Kohli',
      address: '',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  showDetails(customer: Customer) {
    this.selectedCustomer = Object.assign({}, customer);
    this.showDetail = true;

  }

  update(customer: Customer) {
    console.log(customer);

    var custIndex = this.customers.findIndex(
      (e) => e.customerNo == customer.customerNo
    );
    // Object.assign(cust, customer);
    this.customers[custIndex] = customer;

    alert('Customer Saved');
    this.showDetail = false;

  }
  cancel(){
    this.showDetail = false;

  }
}
