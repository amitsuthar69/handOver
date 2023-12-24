const deleteItem = async (id: string): Promise<Response | null> => {
  try {
    const res = await fetch(`/api/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log("Error in deleteItem.ts file : ", error);
  }
  return null;
};

export { deleteItem };
