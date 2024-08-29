import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:8080/restaurants'; // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  // Method to add a restaurant with menu items
  addRestaurant(restaurantData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, restaurantData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // For debugging purposes
    throw new Error('Something went wrong. Please try again later.');
  }
}
