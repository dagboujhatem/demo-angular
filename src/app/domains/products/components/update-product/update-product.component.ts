import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productForm?: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stock: new FormArray([
        new FormGroup({
          size: new FormControl('', [Validators.required]),
          quantity: new FormControl('', [Validators.required]),
        })
      ]),
    });
  }

  get stock(): FormArray {
    return this.productForm?.get('stock') as FormArray;
  }

  addNew(): void {
    this.stock.push(new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
    }))
  }

  clearAll(): void {
    this.stock.clear();
  }

  deleteControl(i: number): void {
    this.stock.removeAt(i);
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
