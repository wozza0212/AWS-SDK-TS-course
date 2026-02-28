import { JsonError } from "./DataValidator"
import { v4 } from "uuid";

export const parseJSON = (arg: string) => {
    try {
        return JSON.parse(arg)
    } catch (error) {
        throw new JsonError(error.message)
    }
}

export const createRandomId = () => {
    const randomId = v4();
    return randomId
}