import axios from "axios";
import toast from "react-hot-toast";

const apiForm = axios.create({
    baseURL: "/api/v1",
    headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
});

apiForm.interceptors.request.use(
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

apiForm.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response?.status === 404) {
            toast.error("Возникла ошибка сервера 404");
        }

        if (error?.response?.status === 500) {
            toast.error("Возникла ошибка сервера 500");
        }

        return Promise.reject(error);
    }
);

export default apiForm;
