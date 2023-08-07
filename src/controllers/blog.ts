import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GETBLOGM');
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        console.log('estamos en el get items');
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG');
    }
}

const createItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_BLOG');
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem };