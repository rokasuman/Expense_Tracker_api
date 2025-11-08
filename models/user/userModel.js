import userSchema from "./userSchema.js";

// Peforming the create operatio

// creat operation
export const insertUser =(userObj) =>{
    return userSchema(userObj).save()
};


// read operation 

export const getUserByEmail = (email) =>{
    return userSchema.findOne({email})
}
