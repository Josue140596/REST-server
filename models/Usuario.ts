import {Schema, model} from 'mongoose'
//Interfaces
import { User } from '../Interfaces/User';

const UserSchema = new Schema<User>({
    name:{
        type: String, 
        required: [true, 'Name is required']
    },
    email:{
        type: String, 
        required: [true, 'email is required'],
        unique: true
    },
    password:{
        type: String, 
        required: [true, 'Password is required']
    },
    img:{
        type: String, 
    },
    rol:{
        type: String, 
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE', 'SALES_ROLE']
    },
    state:{
        type: Boolean, 
        default: true
    },
    byGoogle:{
        type:Boolean,
        default: false
    }
});
/**
 * This function hide the password and __V
 * @returns @user
 */
UserSchema.methods.toJSON = function () {
    const {__v, password, ...user} = this.toObject();
    return user
}
export default model('User', UserSchema);