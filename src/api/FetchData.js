const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function fetchData(
  endpoint,
  method = "GET",
  data = null,
  headers = {}
) {
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
      options.body = data; // Use the FormData directly
    } else {
      options.headers["Content-Type"] = headers["Content-Type"]
        ? headers["Content-Type"]
        : "application/json";
      options.body = JSON.stringify(data);
    }
  }

  try {
    const response = await fetch(url, options);

    // Check if the response is an image
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.startsWith("image/")) {
      return { blob: await response.blob() };
    }

    const responseData = await response.json();

    if (response.ok) {
      // If the response status is in the range 200-299
      return responseData;
    } else {
      // Throw the server's error message
      throw new Error(responseData.message || "An unexpected error occurred");
    }
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be handled by the calling code
  }
}
