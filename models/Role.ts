import { Schema, model } from 'mongoose';
//Interfaces
import { Roles } from '../Interfaces/Roles';

const RoleSchema = new Schema<Roles>({
    rol:{
        type: String,
        required:[true, 'Rol is required']
    }
});

export default model('Role', RoleSchema);