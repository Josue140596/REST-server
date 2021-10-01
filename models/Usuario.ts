import {Schema, model} from 'mongoose'
// Document interface
interface User {
    name: string;
    email: string;
    password: string;
    img: string;
    rol: string;
    state: boolean;
    byGoogle: boolean;
  }
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
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state:{
        type: Boolean, 
        default: true
    },
    byGoogle:{
        type:Boolean,
        default: false
    }
})
export default model('User', UserSchema);