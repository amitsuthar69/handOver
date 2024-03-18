export interface RequestData {
  senderId: string;
  receiverId: string;
  itemId: string;
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
