// Reducer Flags
export const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";
export const UPDATE_TOTAL_PAGES = "UPDATE_TOTAL_PAGES";
export const HANDLED_NEW_CURRENT = "HANDLED_NEW_CURRENT";
export const IS_LOADING = "IS_LOADING";
export const IS_LOADING_DONE = "IS_LOADING_DONE";
export const HANDLED_IS_LOADING_NEW = "HANDLED_IS_LOADING_NEW";
export const NEW_SEARCH = "NEW_SEARCH";
export const NEW_SEARCH_HANDLED = "NEW_SEARCH_HANDLED";
export const UPDATE_JOBS = "UPDATE_JOBS";
export const IS_SEARCH_ITEM = "IS_SEARCH_ITEM";
export const IS_SEARCH_ITEM_DONE = "IS_SEARCH_ITEM_DONE";

// Initial states
const general = {
  r_changed_page: false,
  r_pages_current: 1,
  r_pages_total: 0,
  is_loading: true,
  is_loading_new_action: false,
  new_search: false,
  jobs: [],
  is_search_item_view: false,
};

// Reducer - General
const generalReducer = (state = general, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        r_pages_current: action.payload,
        r_changed_page: true,
      };
    case UPDATE_TOTAL_PAGES:
      return { ...state, r_pages_total: action.payload };
    case HANDLED_NEW_CURRENT:
      return { ...state, r_changed_page: false };
    case IS_LOADING:
      return { ...state, is_loading: true, is_loading_new_action: true };
    case IS_LOADING_DONE:
      return { ...state, is_loading: false, is_loading_new_action: true };
    case HANDLED_IS_LOADING_NEW:
      return { ...state, is_loading_new_action: false };
    case NEW_SEARCH:
      return { ...state, new_search: action.payload };
    case NEW_SEARCH_HANDLED:
      return { ...state, new_search: false };
    case UPDATE_JOBS:
      return { ...state, jobs: action.payload };
    case IS_SEARCH_ITEM:
      return { ...state, is_search_item_view: true };
    case IS_SEARCH_ITEM_DONE:
      return { ...state, is_search_item_view: false };
    default:
      return state;
  }
};

export default generalReducer;
