export const INITIAL_STATE = {
  auth: {
    token: '',
  },
  users: {
    isLoading: false,
    hasError: false,
    error: '',
    // Hidden -> This might be usede in an idea I have to realise other stuff later
    data: [],
  },
};
