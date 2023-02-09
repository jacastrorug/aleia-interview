import allData from "@/database/data";
import { HouseModel } from "@/models/HouseModel";

class Database {
    constructor() {};

    async getAll(): Promise<HouseModel[]> {
        const houses = allData;
        await randomDelay();

        return houses;
    }

};

const randomDelay = (): Promise<number> => {
    return new Promise((resolve) => {
        const max = 350;
        const min = 100;
        const delay = Math.floor(Math.random() * (max - min + 1)) + 1;

        setTimeout(resolve, delay);
    });
};

export default Database;