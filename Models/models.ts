export type Cuisine = 'sushi' | 'burger' | 'pizza'

export type DataConsumer = {
    restaurants: any
    updateCuisine: (value: Cuisine) => void
}

export interface Restaurant {
    name: string,
    location: { [key: string]: string },
    image_url: string
}