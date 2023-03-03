import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: "/api/v1",
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        if (error?.request?.status === 401) {
            window.location.replace("/login");
        }

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response?.status === 401) {
            window.location.replace("/login");
        }

        if (error?.response?.status === 404) {
            toast.error("Возникла ошибка сервера 404");
        }

        if (error?.response?.status === 500) {
            toast.error("Возникла ошибка сервера 500");
        }

        return Promise.reject(error);
    }
);

export default api;
