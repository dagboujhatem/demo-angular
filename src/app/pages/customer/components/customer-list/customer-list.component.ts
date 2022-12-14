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
  message = 'Customer Details';

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
    this.message = 'Customer Details';
  }

  update(customer: Customer) {
    console.log(customer);

    var custIndex = this.customers.findIndex(
      (e) => e.customerNo == customer.customerNo
    );
    // Object.assign(cust, customer);
    // this.customers[custIndex] = customer;
    this.customers.splice(custIndex, 1, customer);

    alert('Customer Saved');
    this.showDetail = false;
  }
  cancel() {
    this.showDetail = false;
  }
  ajouter() {
    this.showDetail = true;
    this.message = 'Add Customer';
    this.selectedCustomer = new Customer();
  }
  deleteCustomer(i: number) {
    this.customers.splice(i, 1);
  }
  add(customer: Customer) {
    customer.customerNo = this.customers.length + 1;
    this.customers.push(customer);
    alert('Customer added');
    this.showDetail = false;
  }
}
