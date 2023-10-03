const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function fetchData(
  endpoint, // change this to endpoint
  method = "GET",
  data = null,
  headers = {} // add headers parameter here
) {
  const url = `${API_ENDPOINT}${endpoint}`; // use API_ENDPOINT here

  const options = {
    method: method,
    headers: {
      ...headers, // spread the headers here
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    // Check if the response is an image
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.startsWith("image/")) {
      return { blob: await response.blob() };
    }

    const responseData = await response.json();

    switch (response.status) {
      case 200: // OK
      case 201: // Created
      case 400: // Bad Request
      case 401: // Unauthorized
      case 403: // Forbidden
      case 404: // Not Found
      case 409: // Conflict
      case 500: // Internal Server Error
        return responseData;
      default:
        throw new Error(responseData.error || "An unexpected error occurred");
    }
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be handled by the calling code
  }
}
