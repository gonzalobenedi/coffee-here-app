import { Coordinates } from "./Coordinates";

export interface CoffeeStore {
  id: string;
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  coordinates: Coordinates;
  usersRating: number;
}
