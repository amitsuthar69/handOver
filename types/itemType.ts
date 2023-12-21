export type ItemType = {
  id: string;
  description: string;
  price?: string;
  author: string;
  imageUrl: string;
  authorEmail: string;
  createdAt: number;
};

export type Category = {
  id: string,
  catName: string
}