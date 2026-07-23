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
  totalReviews: number,
  location: string,
  description: string,
  form: string,
  length: string,
  width: string,
  height: string,
  tank: string,
  consumption: string,
  transmission: string,
  engine: string,
  amenities: string[],
  gallery: [
    {
      id: string,
      camperId: string,
      thumb: string,
      original: string,
      order: number
    }
  ],
  createdAt: Date,
  updatedAt: Date
}


export type AllCampersResponse = {
     page: number,
  perPage: number,
  total: number,
  totalPages: number,
  campers: Camper[]
}