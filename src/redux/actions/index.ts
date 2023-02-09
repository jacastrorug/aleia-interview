import { ActionModel } from "@/models/ActionModel"
import { TOOGLE_MENU } from "../types"

type DispatchFn = {
    (action: ActionModel): void
}

export const toogleMenu = () => (dispatch: DispatchFn) => {
    dispatch({
        type: TOOGLE_MENU,
        payload: null
    })
};

