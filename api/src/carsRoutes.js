import * as cars from "../tables/cars.js"
import express from 'express'

export const carRoutes = express.Router();

carRoutes.get("/api/cars",(req,res)=>{
    const allCars = cars.getCars();
    return res.status(200).json(allCars);
});

carRoutes.post("/api/cars",(req,res)=>{
    const {brand, color, lplate} = req.body;
    if (!brand,!color,!lplate){
        return res.status(400).json({message:"Some data are missing!"});
    }
    const newCar = cars.postCar(brand,color,lplate);
    return res.status(201).json(newCar);
});

carRoutes.put("/api/cars/:id",(req,res)=>{
    const id = req.params.id;
    const {brand, color, lplate} = req.body;

    if (!brand,!color,!lplate){
        return res.status(400).json({message:"Some data are missing!"});
    }

    const updatedCar = cars.updateCar(brand,color,lplate,id);
    return res.status(201).json(updatedCar);
});