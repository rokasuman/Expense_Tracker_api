import userSchema from "./userSchema.js";

// Peforming the create operatio

// creat operation
export const insertUser =(userObj) =>{
    return userSchema(userObj).save()
};

