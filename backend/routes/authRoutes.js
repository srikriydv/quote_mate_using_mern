import express from "express";
import registerUser from "../controllers/auth/registerController.js";
import verifyUserEmail from "../controllers/auth/verifyEmailController.js";
import loginUser from "../controllers/auth/loginController.js";
import { loginLimiter } from "../middleware/apiLimiter.js";
import newAccessToken from "../controllers/auth/refreshTokenController.js";
import resendEmailVerificationToken from "../controllers/auth/resendVerifyEmailController.js";
import logoutUser from "../controllers/auth/logoutController.js";
import {
	resetPassword,
	resetPasswordRequest,
} from "../controllers/auth/passwordResetController.js";


const router = express.Router();

router.post("/register", registerUser);

router.get("/verify/:emailToken/:userId", verifyUserEmail);

router.post("/login", loginLimiter, loginUser);

router.get("/new_access_token", newAccessToken);

router.post("/resend_email_token", resendEmailVerificationToken);

router.post("/reset_password_request", resetPasswordRequest);

router.post("/reset_password", resetPassword);

router.get("/logout", logoutUser);

export default router;