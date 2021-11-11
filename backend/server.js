// importing packages
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import { generateToken } from "./utils.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(session({
    key: "userId",
    secret: "for valuenable",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}));

const saltRounds = 10;

// connection for MySql 

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "valuenable",
});

// post route for register user in database
app.post("/api/registerUser", (req, res) => {
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const phone = req.body.phone;

    // using bcrypt for hashing passwords (encrypting password)
    bcrypt.hash(password, saltRounds, (err, hash) => {
        const sqlRegister = "INSERT INTO users (firstName, lastName, email, password, phone, gender) VALUES (?,?,?,?,?,?)";
        db.query(sqlRegister, [fName, lName, email, hash, phone, gender], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        })
    })

})


app.get("/api/userFound", (req,res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
        console.log({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

// post route for login user in system 
app.post("/api/loginUser", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sqlLogin = "SELECT * FROM users WHERE email = ?";
    db.query(sqlLogin, email, (err, result) => {
        if (err) {
            res.send({err: err})
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    req.session.user = result;
                    // console.log(req.session.user);
                    // res.send(result)
                    res.send({
                        id: result[0].id,
                        fName: result[0].firstName,
                        lName: result[0].lastName,
                        email: result[0].email,
                        gender: result[0].gender,
                        token: generateToken(result)
                    })
                } else {
                    res.send({message: "User does not exist"})
                }
            })
        } else {
            
        }
    })
})

// route for fetching menu data from database
app.get("/api/menu", (req, res) => {
    const sqlSelect = "SELECT * from food_menu";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

// port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
