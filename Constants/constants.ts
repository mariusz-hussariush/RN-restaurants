import { Dish, Location } from '../Models/models';

export const defaultLocation: Location = { lat: 52.520008, lng: 13.404954} 
export const FilterCriteria: Dish[] = ['sushi', 'pizza', 'burger']
export const FetchUrl: ((query: Dish, location:Location) => string) = (query, location) => `https://api.yelp.com/v3/businesses/search?term=$${query}&latitude=${location.lat}&longitude=${location.lng}`;

