export type ItemType = {
  id: string;
  description: string;
  price?: string;
  author: {
    name: string;
    phone: string;
  };
  imageUrl: string;
  publicId?: string;
  authorEmail: string;
  createdAt: number;
  catName: string;
};

export type Category = {
  id: string;
  catName: string;
};
