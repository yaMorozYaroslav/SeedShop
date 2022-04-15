import mongoose from 'mongoose'
import {Memo} from '../model/memory.js'

export const getMemos = async(req, res) =>{

	try{
		const memos = await Memo.find() 
		res.status(200).json(memos)
	}catch(error){res.status(404).json({message: error.message})}
   }

export const createMemo = async(req,res)=>{
	const memo = req.body
	const newMemo = new Memo(memo)

	try{
		await newMemo.save() 
		res.status(201).json(newMemo)
  }catch(error){res.status(409).json({message: error.message})
 }
}
export const deleteMemo = async(req, res)=>{
	const {id} = req.params
	if(!mongoose.Types.ObjectId.isValid(id)) 
	    return res.status(404).send('Undefined')

	await Memo.findByIdAndRemove(id)
	 res.json({message: 'Deleted'})
}
