const express = require('express')

const { listObject, getFile, deleteFile } = require('./getFile')

const app = express()

const getAllFiles = 
app.get('/getFiles', async (req, res) => {
   try {
      const result = await listObject(req.file)

      return res.json(result)
      
   } catch (error) {
      res.status(404)
      console.log(error)
      
   }
})

const getFileById = 
app.get('/getFile/:id', async (req, res) => {
   try {
      const result = await getFile(req.file.id)

      return res.json(result)

   } catch (error) {
      res.status(404)
      console.log(error)
      
   }
})

const deleteFileById = 
app.delete('/deleteFile/:id', async (req, res) => {
   try {
      const result = await deleteFile(req.file.id)

      return res.json(result) //return the remaining files
   } catch (error) {
      
   }
})