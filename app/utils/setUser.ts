export const setUser = async (email: string, name: string, phone: string) => {
  try {
    const res = await fetch(`/api/edituser/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    });

    if (res.ok) {
      return true;
    } else {
      throw new Error("Failed to update user");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
