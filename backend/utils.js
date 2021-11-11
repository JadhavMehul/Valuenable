import jwt from "jsonwebtoken";

export const generateToken = (result) => {
    return jwt.sign({
        id: result[0].id,
        fName: result[0].firstName,
        lName: result[0].lastName,
        email: result[0].email,
        gender: result[0].gender,
    }, 
        process.env.JWT_SECRET || "thisissecret",
        {
            expiresIn: "30d"
        }
    )
}