import { Schema, Types, model } from "mongoose";

const StorageSchema = new Schema({
	name: {
		type: String,
		required: true,
		lowercase: true,
		trim: true
	},
	path: {
		type: String,
		required: true,
		lowercase: true,
		trim: true
	},
	url: {
		type: String,
		required: true,
		lowercase: true,
		trim: true
	},
	DownloadAmount: {
		type: Number
	},
	author: {
		type: Types.ObjectId,
		ref: "User",
		default: null
	},
	password: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now()
	}
});

const Storage = model("Storage", StorageSchema);

export default Storage;
