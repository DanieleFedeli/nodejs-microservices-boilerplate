import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import accessEnv from "~/helpers/accessEnv";

const PORT = +accessEnv("PORT", "7000");

const app = express();
