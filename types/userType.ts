import { ItemType } from "./itemType";

export type UserType = {
  id: string;
  name: string;
  phone: string;
  email: string;
  emailVerified: string;
  image: string;
  items: ItemType[];
};
