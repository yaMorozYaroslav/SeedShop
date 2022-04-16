import express from 'express'
import {getMemos, createMemo, updateMemo, deleteMemo} from '../ctrl/ctrlMemo.js'

const router = express.Router()

router.get('/', getMemos)
router.post('/', createMemo)
router.patch('/:id', updateMemo)
router.delete('/:id',deleteMemo)

export default router
