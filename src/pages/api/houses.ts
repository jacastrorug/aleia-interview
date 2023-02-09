import { NextApiRequest, NextApiResponse } from "next";
import DB from "@/database/db";
import enablePublicAccess from "@/database/cors-middleware";

const GetHouses = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
        await enablePublicAccess(request, response);

        const db = new DB();

        const houses = await db.getAll();

        response.status(200).json({ houses });
    } catch (e) {
        response.status(404).end();
    }

};

export default GetHouses;