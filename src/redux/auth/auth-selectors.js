const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getError = state => state.auth.error;

const getLoading = state => state.auth.loading;

const authSelectors = {
    getIsAuthenticated,
    getUsername,
    getError,
    getLoading,
};

export default authSelectors;