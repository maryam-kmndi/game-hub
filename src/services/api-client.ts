import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'd9cdf94889c34790abc39338bb1458a1'
    }
})