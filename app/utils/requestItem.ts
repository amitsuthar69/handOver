export interface RequestData {
  senderId: string;
  receiverId: string;
  itemId: string;
  url?: string;
}

const makeRequest = async (requestData: RequestData) => {
  try {
    const res = await fetch(`/api/wishlist`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const item = await res.json();
    return item.status;
  } catch (error) {
    console.log("error creating item from frontend: ", error);
  }
};

export default makeRequest;

const getItemStatus = async (id: string) => {
  try {
    const res = await fetch(`/api/request/${id}`);
    const request = await res.json();
    return request;
  } catch (error) {
    console.log(error);
  }
};

export { getItemStatus };

const deleteRequest = async (id: string): Promise<Response | null> => {
  try {
    const res = await fetch(`/api/handleRequest/${id}`, {
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

export { deleteRequest };

const updateStatus = async (id: string) => {
  try {
    const res = await fetch(`/api/handleRequest/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.ok) {
      return res;
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export { updateStatus };
