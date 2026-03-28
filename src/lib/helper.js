import axios from "axios";

const instance = axios.create({
    baseURL: "",
    timeout: 95000,
    headers: {
        // 'Accept': 'text/html',
    }
});

const instanceForPut = axios.create({
    baseURL: "",
    timeout: 95000,
    headers: {
        "Content-Type": "application/json"
        // 'Accept': 'text/html',
    }
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("user");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instanceForPut.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("user");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const Helper = {
    Get: async (url) => {
        return instance
            .get(url)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },
    Get_Abort: async ({ url, data = null, signal }) => {
        return instance
            .get(url, {
                params: data || {},
                signal: signal
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },
    Post: async ({ url, data = null }) => {
        return instance
            .post(url, data)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },
    Put: async ({ url, data = null }) => {
        // data = { ...data, _method: 'PUT' };
        return instanceForPut
            .put(url, data)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },
    Delete: async ({ url, data = null }) => {
        return instance
            .delete(url, {
                data: data
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("State", serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("State");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};
