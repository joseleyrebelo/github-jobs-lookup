const axios = require("axios");

const getPagesAmount = async (CustomURL) => {
  let page_amount_found = false;

  // Gets amount of items in page
  const getPageItemsAmount = async (number, CustomURL) => {
    CustomURL.queries["page"] = number;
    return await axios
      .get(CustomURL.get())
      .then((response) => {
        return response.data.length;
      })
      .catch((error) => {
        throw error;
      });
  };

  // Starts at 1 since first page results have already been found
  let page_count = 1;
  let page_items_amount = 0;
  // Iterates though page queries
  // * Until results are inclusive and between 0 to 49
  while (!page_amount_found) {
    page_count += 1;
    page_items_amount = await getPageItemsAmount(page_count, CustomURL);
    if (page_items_amount === 0) {
      page_amount_found = true;
      // Reducing page_count since this page has zero items
      // * The previous page - which contained 50 items - was the last
      page_count -= 1;
    } else if (page_items_amount > 0 && page_items_amount <= 49) {
      page_amount_found = true;
    } else {
      page_amount_found = false;
    }
  }

  return page_count;
};

const sortPagesAmount = async (results_size, CustomURL) => {
  return results_size === 50 ? await getPagesAmount(CustomURL) : 1;
};

// General api handler
const main = async (req, res, next) => {
  const search = req.query.s;
  const page = req.query.page;
  // CustomURL, is meant to hold and iterate the url by its queries
  let CustomURL = {
    original: "https://jobs.github.com/positions.json",
    queries: {},
    // Builds url based on queries available
    get: function () {
      const sort = (val) =>
        encodeURIComponent(val.toString()).split("%20").join("+");
      let result = this.original;
      if (this.queries) {
        Object.entries(this.queries).forEach(([key, value], i) => {
          result += `${i === 0 ? "?" : "&"}${sort(key)}=${sort(value)}`;
        });
      }
      console.log(result);
      return result;
    },
  };
  let type_query = "search_query";

  // Sorting jobs API query search parameter
  // * CLI logs
  if (search === undefined) {
    console.log("> querying for all ");
  } else {
    console.log(`> querying for ${search}`);
    CustomURL.queries["search"] = search;
  }

  // * Sorting page parameter
  if (page !== undefined) {
    CustomURL.queries["page"] = page;
    type_query = "page_query";
  }

  // Sorts reply object
  let reply = await axios
    .get(CustomURL.get())
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
      };
    });

  // Sorts pages amount
  if (reply.success && type_query === "search_query") {
    reply["pages"] = await sortPagesAmount(reply.data.length, CustomURL);
  }

  res.status(200).json(reply);
};

exports.main = main;
