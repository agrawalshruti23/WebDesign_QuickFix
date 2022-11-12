import mongoose from 'mongoose'

const userRolesSchema = mongoose.Schema(
    {
        roleType: {
            type: String,
            required:[true, 'Please Add a Valid User Role']
        }
    },
    {
        timestamps: true
    }
)

const model = mongoose.model('userRoles', userRolesSchema, 'UserRoles')

export default model;
