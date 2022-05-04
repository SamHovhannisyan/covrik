export const SHOP_GET = "SHOP_GET";
export const SHOP_POST = "SHOP_POST";
export const SHOP_CAR_GET = "SHOP_CAR_GET";
export const SHOP_CAR_MODEL_GET = "SHOP_CAR_MODEL_GET";
export const PRICE_GET = "PRICE_GET";
export const ERROR_GET = "ERROR_GET";
export const PRICE_GET_CUPE = "PRICE_GET_CUPE";

const initialState = {
  shopGet: [],
  shopPost: [],
  shopCar: [],
  shopCarModel: [],
  priceGet: 0,
  error: false,
  priceGetCupe: []
};

export const shopReducers = (state = initialState, action) => {
  switch (action.type) {
      case SHOP_GET:

        return {...state, shopGet: action.payload}

    case SHOP_POST:

      return {...state, shopPost: action.payload}

    case SHOP_CAR_GET:

      return {...state, shopCar: action.payload}

    case SHOP_CAR_MODEL_GET:

      return {...state, shopCarModel: action.payload}

    case PRICE_GET:

      return {...state, priceGet: action.payload}

    case ERROR_GET:

      return {...state, error: action.payload}

    case PRICE_GET_CUPE:

      return {...state, priceGetCupe: action.payload}

    default:
      return state;
  }
};
