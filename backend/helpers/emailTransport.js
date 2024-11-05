import "dotenv/config";
import nodemailer from "nodemailer";

let transporter;

if (process.env.NODE_ENV === "development") {
    transporter = nodemailer.createTransport({
        host: "localhost",
        port: 1025,
    });
} else if (process.env.NODE_ENV === "production") {
    transporter = nodemailer.createTransport(
        // production settings
    );
}

export default transporter;