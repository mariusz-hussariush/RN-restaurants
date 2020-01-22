import { Dish } from '../Models/models';

export const FetchUrl: ((query: string) => string) = (query: string) => `https://api.yelp.com/v3/businesses/search?term=$${query}&latitude=52.520008&longitude=13.404954`;

export const FilterCriteria: Dish[] = ['sushi', 'pizza', 'burger']

// export const FilterCriteriaMap = new Map<string, object>()
// FilterCriteria.forEach((item: string) => {
//     FilterCriteriaMap.set(item, { key: item, label: item.capit() })
// }) 