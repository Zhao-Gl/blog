import { request } from "../utils/request";

export const get = (url:string,data?:object) => {
    return request.get(
        url,
        data
    )
}