import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()

export const initialStage = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
}