import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTE = `${__dirname}`;
const router = Router();

//? Clean name of fileName return first name
const cleanName = (fileName: string) => {
    return fileName.split(".").shift();
};

//? Scanner files in PATH_ROUTE
readdirSync(PATH_ROUTE).filter(fileName => {
    const name = cleanName(fileName);

    if (name === "index") return;

    try {
        //* Dynamic import
        import(`./${fileName}`).then(moduleRouter => {
            console.log(`✔  Load route --> ${name}`);
            router.use(`/${name}`, moduleRouter.router);
        });
    } catch (error) {
        console.log(`❌ Error load route --> ${name}`);
        console.log(`${name}: ${error}`);
    }
});

export default router;
