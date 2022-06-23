const { S3 } = require("aws-sdk");


exports.listObject = async (files) => {
const s3 = new S3();

const params = files.map(file => {
   return  {
      Bucket: '',
      Key: '',
      Prefix: file
   }
})

return await Promise.all(
   params.map(param => s3.listObjectsV2(param)))

   // s3.listObjectsV2(params, function(err, data) {
   //    if (err) {
   //       console.log(err, err.stack)
   //    }
   //    else return data
   // })
}


exports.getFile = async(files => {
   const s3 = new S3();
   const params = files.map(file => {
      return {
         Bucket: '',
         Key: file.id,
         Prefix: ''
      }
   })
   return await Promise.all(
      s3.getObject(params)
   )
})

exports.deleteFile = async(files => {
   const s3 = new S3()
   const params = files.map(file => {
      return {
         Bucket: '',
         Key: file.id,
         Prefix: ''
      }
   })
   return await Promise.all(
      s3.deleteObject(param)
   )
})