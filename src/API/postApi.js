import api from './config.json';
import axios from "axios";

// Base URL: https://cloudmanager.bizsys.com.br/api/apprequest/
// const api = require('./config.json');
export const API_URL = api.api_url;


// End point Website POST
export async function CALL_SERVER(sessionKey) {
    const response = await axios.post(API_URL, {
        "fk_id_project": 9,
        "session_key": sessionKey,
    },
    {
        headers: {"Content-type": "application/json; charset=UTF-8", "Authorization": "Bearer $2y$10$FL0I5NgdhfhbFShdsvTLbuuN.wUxwtAnwTN2vq1ofSzZoohmxs5b"}
    }
    )

    console.log(response);
}

