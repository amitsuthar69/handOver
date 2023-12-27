const removeImg = async (publicId: string) => {
  try {
    const res = await fetch("/api/removeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });
    if (res.ok) {
      return res;
    }
  } catch (error) {
    console.log("error in frontend: ", error);
  }
};

export { removeImg };
