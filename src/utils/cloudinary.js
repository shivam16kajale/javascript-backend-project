import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET  
});

const uploadOnCloudinary = async (localFieldPath) => {
    try {
        if (!localFieldPath) return null
        //UPLOAD FILE ON CLODINARY
        const response = await cloudinary.uploader.upload(localFieldPath,{
            resource_type:"auto"
        })

        //file has been uploaded succesfully
        // console.log("File uploaded successfully on cloudinary ",response.url);
        fs.unlinkSync(localFieldPath)
        return response
    } catch (error) {
        fs.unlinkSync(localFieldPath) //remove the locally saved temporary file as the uplaod operations got failed
        return null;
    }
}

export {uploadOnCloudinary}