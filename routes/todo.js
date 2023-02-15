import express, { response } from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.get("/", async (request, response) => {
console.log(request.user);

const todos = await prisma.todo.findMany({
    where:{
        userId: request.user.id,
    }
})

response.status(200).json({
    success: true,
    });
});

export default router;