const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

const greetingState = {
  loading: false,
  greeting: '',
  error: '',
};

export const greetingReducer = (state = greetingState,
  { type, payload }) => {
    switch (type) {
      case FETCH_GREETING_REQUEST:
        return {
          ...state,
          loading: true,
        };

      case FETCH_GREETING_SUCCESS:
        return {
          ...state,
          loading: false,
          greeting: payload,
        };

      case FETCH_GREETING_FAILURE:
        return {
          ...state,
          loading: false,
          greeting: '',
          error: payload,
        };

      default:
        return state;
    };
};

const fetchGreetings = () => async (dispatch) => {
  dispatch(fetchGreetingRequest());
  const request = await fetch('/api/greetings');
  try {
    const greetingMsg = await request.json();
    dispatch(fetchGreetingSuccess(greetingMsg.message));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchGreetingFailure(errorMsg));
  };
};

export default fetchGreetings;
