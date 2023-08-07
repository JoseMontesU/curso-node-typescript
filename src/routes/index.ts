import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`
const router = Router();

/**
 * 
 * @returns 
 */

const cleanFileName = (filename: string) => {
    const file = filename.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((filemane) => {
    const cleanName = cleanFileName(filemane);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((routerModule) => {
            console.log(`Se esta la cargando la ruta... /${cleanName}`)
            router.use(`/${cleanName}`, routerModule.router);
        })

    }
});

export { router };