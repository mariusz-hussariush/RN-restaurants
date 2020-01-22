
export const FetchUrl: ((query: string) => string) = (query: string) => `https://api.yelp.com/v3/businesses/search?term=$${query}&latitude=52.520008&longitude=13.404954`;
// export const FetchUrl: string = `https://api.yelp.com/v3/businesses/search?term=$`;
// export const FetchUrlLocation: string = `&latitude=52.520008&longitude=13.404954`;