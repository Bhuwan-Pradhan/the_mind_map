const cloudinary = require('cloudinary').v2

exports.uploadMediaToCloudinary = async (file, folder, mediaType) => {
  const options = { folder };
  console.log(mediaType);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};