export type Dish = 'sushi' | 'burger' | 'pizza'

export type DataConsumer = {
    restaurants: any
    criterium: Dish
    updateCriterium: (value: Dish) => void
}

export interface Restaurant {
    name: string,
    location: { [key: string]: string },
    image_url: string,
    price: number,
    rating: number,
    phone: string 
}

export type Location = {
    lat: number,
    lng: number
}