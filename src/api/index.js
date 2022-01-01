import { httpGet, httpPost } from "./sender";

const predictCarPrice = payload => {
    return new Promise((rs => {
        setTimeout(() => {
            rs(fakeData);
        }, 2000);
    }))
    return httpPost("/predict", payload);
}

const API = {
    predictCarPrice
};
export default API;

const fakeData = {
    "status": "success",
    "car_price": 100000000

}