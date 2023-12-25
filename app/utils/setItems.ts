interface ItemData {
  description: string;
  selectedCategory: string;
  publicId: string;
  price: string;
  imageUrl: string;
}

const setItems = async (itemData: ItemData, router: any, toast: any) => {
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
      router.refresh();
      toast.success("Post created");
    } else {
      toast.error("Something went wrong :(");
    }
  } catch (error) {
    console.log("error creating item from frontend: ", error);
  }
};

export default setItems;

const updateItems = async (
  itemData: ItemData,
  router: any,
  id: string,
  toast: any
) => {
  try {
    const res = await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    if (res.ok) {
      router.push("/dashboard/inventory");
      router.refresh();
      toast.success("Post updated");
    }
  } catch (error) {
    console.log("error updating item from frontend: ", error);
  }
};

export { updateItems };
