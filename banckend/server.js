const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());


// MYSQL CONNECTION

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});

db.connect((err) => {

    if(err){

        console.log(err);

    }

    else{

        console.log("MySQL Connected");
    }
});


// GET TASKS

app.get("/tasks", (req, res) => {

    const sql = "SELECT * FROM tasks";

    db.query(sql, (err, result) => {

        if(err){

            res.send(err);

        }

        else{

            res.json(result);
        }
    });
});


// ADD TASK

app.post("/add-task", (req, res) => {

    const {title, description} = req.body;

    const sql =
    "INSERT INTO tasks(title,description,status) VALUES(?,?,?)";

    db.query(
        sql,
        [title, description, "Pending"],

        (err, result) => {

            if(err){

                res.send(err);

            }

            else{

                res.send("Task Added");
            }
        }
    );
});


// DELETE TASK

app.delete("/delete-task/:id", (req, res) => {

    const id = req.params.id;

    const sql =
    "DELETE FROM tasks WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if(err){

            res.send(err);

        }

        else{

            res.send("Task Deleted");
        }
    });
});


// UPDATE TASK STATUS

app.put("/complete-task/:id", (req, res) => {

    const id = req.params.id;

    const sql =
    "UPDATE tasks SET status='Completed' WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if(err){

            res.send(err);

        }

        else{

            res.send("Task Completed");
        }
    });
});


// SERVER

app.listen(5000, () => {

    console.log("Server Running On Port 5000");
});
