import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm?: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      stock: new FormArray([
        new FormControl('', [Validators.required]),
        new FormControl('', [Validators.required]),
      ]),
    });
  }

  get stock(): FormArray {
    return this.productForm?.get('stock') as FormArray;
  }

  addNew(): void {
    this.stock.push(new FormControl('', [Validators.required]))
  }

  clearAll(): void {
    this.stock.clear()
  }

  deleteControl(i: number): void {
    this.stock.removeAt(i)
  }

  createProduct(): void {
    this.submitted = true;
    if (this.productForm?.invalid) {
      return;
    }

    console.log(this.productForm?.value)
    // Call to RESTfull API


  }

}
