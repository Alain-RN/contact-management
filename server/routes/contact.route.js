 /* eslint-disable no-undef */
 
import express from "express";
import  controllerTab from "../controller/contact.controller.js"

const router = express.Router()

router.get("/", controllerTab[0])

router.post("/", controllerTab[1])

router.delete("/:id", controllerTab[2])

router.put("/:id", controllerTab[3])

router.get("/:id", controllerTab[4])


export default router