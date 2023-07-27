const userStore = {
    state: {
        isLogin: false,
        user: "",
    },
    mutations: {
        setUserInfo(state, payload) {
            state.user = payload;
        }
    },
    actions: {}
};

export default userStore;
