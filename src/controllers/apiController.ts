import { Request, Response } from "express";
import axios from "axios";

type Endpoints = {
    (page: number, perPage: number, search: string, language: string, category: string, subcategory: string, free: boolean, editorsChoices: boolean): string;
}

// "https://www.real.discount/api-web/all-courses/?store=&page=1&per_page=10&orderby=undefined&free=1&search=&language=&cat=&subcat=&editorschoices=";


const endpointCreator: Endpoints = (page: number, perPage: number, search: string, language: string, category: string, subcategory: string, free: boolean, editorsChoices: boolean) => {
    let endpoint = "https://www.real.discount/api-web/all-courses/?store=Udemy&page=" + page + "&per_page=" + perPage + "&orderby=undefined&free=" + free + "&search=" + search + "&language=" + language + "&cat=" + category + "&subcat=" + subcategory + "&editorschoices=" + editorsChoices;
    return endpoint;
}

// All courses endpoints
const allCoursesController = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(endpointCreator(1, 100, "", "All", "All", "", false, false));
        res.json(response.data);
    } catch (error) {
        res.json(error);
    }
}




const hindiController = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(endpointCreator(1,100, "", "Hindi", "All", "", false, false));
        res.json(response.data);
    } catch (error) {
        res.json(error);
    }
}





export default {allCoursesController,hindiController};