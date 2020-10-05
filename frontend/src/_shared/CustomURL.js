export const API_URL = "http://localhost:5200/api/";

// CustomURL, is meant to hold and iterate the url by its queries
export const CustomURL = {
  original: API_URL,
  queries: {},
  // Builds url based on queries available
  get: function () {
    // Sorts url parameters for non allowed characters
    // * Uses encodeURIComponent
    // * Replaces " " with +(by replacing "%20" after encoding)
    const sort = (val) =>
      encodeURIComponent(val.toString()).split("%20").join("+");
    let result = this.original;
    //  Runs the url build logic if queries is 'valid'
    if (this.queries) {
      Object.entries(this.queries).forEach(([key, value], i) => {
        result += `${i === 0 ? "?" : "&"}${sort(key)}=${sort(value)}`;
      });
    }
    return result;
  },
};
