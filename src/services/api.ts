import axios from "axios";
import { User } from "../types/User";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:5173/api/users";

const token = Cookies.get('token');

export const post = async (user: User) => {
    try {
        const response = await axios.post(baseUrl, user);
        return response.status;
    } catch (error) {
        return {
            message: error
        }
    }
};

export const get = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        return {
            message: error
        }
    }
}

export const getUser = async (email: string) => {
    try {
        const response = await axios.get(`${baseUrl}?email=${email}`)
        return response.data[0];
    } catch (error) {
        return {
            message: error
        }
    }
}

export const put = async (userId: number, user: User) => {
    try {
        const response = await axios.put(`${baseUrl}/${userId}`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        return {
            message: error
        }
    }
};