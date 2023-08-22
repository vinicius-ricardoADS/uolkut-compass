import axios from "axios";
import { User } from "../types/User";

const baseUrl = "http://localhost:5173/api/users";

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

export const put = async (userId: number, user: User) => {
    try {
        const response = await axios.put(`${baseUrl}/${userId}`, user);
        return response.data;
    } catch (error) {
        return {
            message: error
        }
    }
};