import { HouseModel } from "./HouseModel";

export interface StateModel {
    menu_is_open: false,
    favorites: string[],
    houses: HouseModel[],
}