export async function fetchData(
  endpoint,
  method = "GET",
  data = null,
  headers = {}
) {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const url = `${API_ENDPOINT}${endpoint}`;

  const options = {
    method: method,
    headers: {
      ...headers,
      Accept: headers.Accept ? headers.Accept : "application/json",
    },
    credentials: "include",
  };

  if (data) {
    if (data instanceof FormData) {
      options.body = data;
    } else {
      options.headers["Content-Type"] = headers["Content-Type"]
        ? headers["Content-Type"]
        : "application/json";
      options.body = JSON.stringify(data);
    }
  }

  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.startsWith("image/")) {
      return { blob: await response.blob() };
    }

    const responseData = await response.json(); // Assuming all other responses are in JSON format

    if (response.ok) {
      return responseData;
    } else {
      // Check if the server sent a specific error message and use it
      throw new Error(
        responseData.error ||
          responseData.message ||
          "An unexpected error occurred"
      );
    }
  } catch (error) {
    console.error("FetchData Error:", error);
    throw error; // Ensuring to rethrow the error for it to be caught in the calling function
  }
}
