import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{
  restaurantForm! : FormGroup ;


  constructor(private fb: FormBuilder, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      cuisine: ['', Validators.required],
      menuItems: this.fb.array([]) // Initialize menuItems as an empty array
    });
  }

  get menuItems(): FormArray {
    return this.restaurantForm.get('menuItems') as FormArray;
  }

  addMenuItem(): void {
    const menuItem = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]]
    });
    this.menuItems.push(menuItem);
  }

  removeMenuItem(index: number): void {
    this.menuItems.removeAt(index);
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      console.log('Form Submitted', this.restaurantForm.value); // Debug output
      this.restaurantService.addRestaurant(this.restaurantForm.value).subscribe(
        response => {
          console.log('Restaurant added successfully', response);
          this.restaurantForm.reset();
          this.menuItems.clear(); // Clear the menu items array after form submission
        },
        error => {
          console.error('Error adding restaurant', error);
        }
      );
    }
  }

}
