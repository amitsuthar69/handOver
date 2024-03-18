export type ItemType = {
  id: string;
  description: string;
  price?: string;
  author: {
    id: string,
    name: string;
    phone: string;
  };
  imageUrl: string;
  publicId?: string;
  authorEmail: string;
  createdAt: number;
  catName: string;
  requests?: Request[];
};

export type Category = {
  id: string;
  catName: string;
  href?: string;
};

export type Request = {
  id: string;
  senderId: string;
  receiverId: string;
  itemId: string;
  status: string;
  createdAt: number;
};
