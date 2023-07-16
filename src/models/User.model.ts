import { Schema, model } from "mongoose";

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			lowercase: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const User = model("User", UserSchema);

export default User;
