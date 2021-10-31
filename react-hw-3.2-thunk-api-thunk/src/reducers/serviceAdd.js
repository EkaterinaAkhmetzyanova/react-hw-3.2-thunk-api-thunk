import {
    CHANGE_SERVICE_FIELD,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_FAILURE,
    ADD_SERVICE_SUCCESS,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAILURE,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: { name: '', price: '', content: '' },
    loading: false,
    error: null,
    success: null,
  };
  
  export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_SERVICE_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case ADD_SERVICE_SUCCESS:
        return {...initialState, success: true};
      case GET_SERVICE_REQUEST:
        return{...initialState, loading: true, error: null};
      case GET_SERVICE_SUCCESS:
        const {items} = action.payload;
        return {
          ...state,
          items,
          loading: false,
          error: null,
        };
      case GET_SERVICE_FAILURE: {
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      }
      case CHANGE_SERVICE_FIELD:
        const { name, value } = action.payload;
        const { item } = state;
        return {
          ...state,
          item: {
            ...item,
            [name]: value,
          }
        };
      default:
        return state;
    }
  }