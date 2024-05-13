import api from './configApi.json';
import axios from "axios";

// Base URL: https://cloudmanager.bizsys.com.br/api/apprequest/
export const API_URL = api.api_url;



// End point API POST
export async function POST_API(sessionKey, participated) {
    const response = await axios.post(API_URL, {
        "fk_id_project": 12,
        "session_key": sessionKey,
        "participated": participated // 0 ou 1
    },
    {
        headers: {"Content-type": "application/json; charset=UTF-8", "Authorization": "Bearer $2y$10$L5q1Zr45A2VZQbtE4zZQuN3kMH69h4ZDlaCHC3XYdLRQq6onTL99"}
    }
    );

    // console.log(response);
    return response;
}