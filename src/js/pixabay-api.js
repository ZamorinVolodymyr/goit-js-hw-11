import axios from "axios";

export function getImagesByQuery(query) {
  const API_KEY = "53528183-124d750022db572161729f08a";
  const BASE_URL = "https://pixabay.com/api/";

  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params }).then((response) => response.data);
}