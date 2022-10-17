import AWS from "aws-sdk";
import cuid from "cuid";

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
});