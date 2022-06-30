import Router from "express";

export const router = Router();
import { Controller } from "../controller";

router.get("/", Controller.Home);
router.get("/hollywood/:id", Controller.Hollywood);
router.get("/bollywood/:id", Controller.Bollywood);
router.get("/korean-movie/:id", Controller.Kmovie);
router.get("/tv-series/:id", Controller.Series);
router.get("/k-drama/:id", Controller.Kdrama);
router.get("/search", Controller.Search);
router.get("/download?:id", Controller.getData);
