import {Request, Response} from "express";

const express = require('express')
const app = express()
const port = 3000

app.post('/echo', (req: Request, res: Response) => {
    res.status(200)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})