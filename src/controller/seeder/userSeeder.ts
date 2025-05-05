import { Request, Response } from "express";
import Joi from "joi";
import { AppDataSource } from "../../data-source";
import { user, UserRole } from "../../model/user";
import { encrypt } from "../../utils/CryptoData";

const { successResponse, errorResponse, validationResponse } = require('../../utils/response')


const userRepository = AppDataSource.getRepository(user)


export const userSeeder = async (req: Request, res: Response) => {
    const User = [
        {userName : "superAdmin1",password : "superAdmin123!",UserRole : "SUPERADMIN"},
    ];
    try{
        for (const data of User){
            const newUser = new user()
            newUser.userName = data.userName
            newUser.password =  data.password
            newUser.password = encrypt(data.password); // Menggunakan fungsi encrypt  
            await userRepository.save(newUser)
        }
        console.log("User seeded successfully.");

    }catch(error){
        return res.status(400).send(errorResponse(error,400))
    }
}