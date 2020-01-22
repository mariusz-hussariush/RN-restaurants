export type Cuisine = 'sushi' | 'burger' | 'pizza'

export type DataConsumer = {
    restaurants: any
    updateCuisine: (value: Cuisine) => void
}