interface ItemData {
  description: string;
  selectedCategory: string;
  publicId: string;
  price: string;
  imageUrl: string;
}

const setItems = async (itemData: ItemData, router: any) => {
  try {
    const res = await fetch(`/api/items`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    if (res.ok) {
      router.push("/dashboard/inventory");
    }
  } catch (error) {
    console.log("error creating item from frontend: ", error);
  }
};

export default setItems;
