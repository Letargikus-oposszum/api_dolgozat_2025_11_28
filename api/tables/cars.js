import db from "../database/databaseGN.js";

db.prepare(`CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand STRING,
    color STRING,
    lplate STRING
    )`).run();

export const getCars = () => db.prepare("SELECT * FROM cars").all();

export const postCar = (brand, color, lplate) => db.prepare("INSERT INTO cars (brand, color, lplate) VALUES (?,?,?)").run(brand, color, lplate);

export const updateCar = (brand, color, lplate, id) => db.prepare("UPDATE cars SET brand, color, lplate WHERE id = ?").all(brand, color, lplate, id);