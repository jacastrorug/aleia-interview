import { ActionModel } from "@/models/ActionModel";
import { StateModel } from "@/models/StateMode";
import { ADD_FAVORITES, REMOVE_FAVORITES, SET_HOUSES, TOOGLE_MENU } from "../types";

const INITIAL_STATE: StateModel = {
    menu_is_open: false,
    favorites: [],
    houses: [],
};

const reducer = (state: any = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case TOOGLE_MENU:
            return { ...state, menu_is_open: !state.menu_is_open }

        case ADD_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] };

        case REMOVE_FAVORITES:
            return { ...state, favorites: [...state.favorites.filter((id: string) => id !== action.payload)] };

        case SET_HOUSES:
            return { ...state, houses: [...action.payload] }

        default:
            return state;
    }
};

export default reducer
