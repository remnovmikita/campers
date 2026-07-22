type Amenities =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";



export type Camper = {
    id: string,
      name: string,
      price: number,
      rating: number,
      location: string,
      form: string,
      length: string,
      width: string,
      height: string,
      tank: string,
      consumption: string,
      transmission: string,
      description:string, 
      engine: string,
      amenities: Amenities[],
      coverImage: string,
      totalReviews: number
}

export type AllCampersResponse = {
     page: number,
  perPage: number,
  total: number,
  totalPages: number,
  campers: Camper[]
}