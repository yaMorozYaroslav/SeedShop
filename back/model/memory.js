import mongoose from 'mongoose'

const memoSchema = mongoose.Schema({

	title: String,
	message: String,
	creator: String,
    createdAt: {
	type: Date,
	default: new Date()
   }
})

export const Memo = mongoose.model('memo', memoSchema)