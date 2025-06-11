import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authURoutes from "./routes/authUser.js";
import authORoutes from "./routes/authOfficer.js";
import userRoutes from "./routes/users.js";
import officerRoutes from "./routes/officer.js";

/*middleware*/
const __filename = fileURLToPath(import.meta.url);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

/* routes */
app.use("/authUser", authURoutes);
app.use("/authOfficer", authORoutes);
app.use("/users", userRoutes);
app.use("/officer", officerRoutes);

/*file storage*/
const storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

/* MONGOOSE */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));