const express = require('express');

const router = express.Router();

router.post("/", async (req, res, next) => {
    try{
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        //translates INSERT INTO posts (title, contents) VALUES(?,?);

        //const [id] = await db.select("*").from("posts").insert(payload)
        const [id] = await db("car-Info").insert(payload)
        res.json(await db ("car-Info").where("id", id).first())
        
    }catch (err){
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try{
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        //translate to UPDATE posts SET title = ? AND contenst = ? WHERE id = ?;
        await db("car-Info").where("id", req.params.id).update(payload)
        res.json(await db ("car-Info").where("id", req.params.id).first())
    }catch (err){
        next(err)
    }
})