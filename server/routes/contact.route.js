 /* eslint-disable no-undef */
 
import express from "express";
import  controllerTab from "../controller/contact.controller.js"

const router = express.Router()

router.get("/", controllerTab[0])

router.post("/", controllerTab[1])

router.delete("/:id", controllerTab[2])

export default router