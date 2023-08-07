import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item.service";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM', error);
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem };