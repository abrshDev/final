import { v2 as cloudinary } from "cloudinary";

import multer from "multer";

cloudinary.config({
  cloud_name: "duwzuflcq",
  api_key: "441942542794491",
  api_secret: "5T3s8R-jNs42nobXfPp0_taAgTk",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

export const upload = multer({ storage });

export default imageUploadUtil;
