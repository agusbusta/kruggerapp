import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        throw new Error("Usuario no encontrado");
      }

      next();
    } catch (error) {
      console.error(error.message);
      res.status(401).json({ message: "Acceso no autorizado, token no válido" });
    }
  } else {
    res.status(401).json({ message: "Acceso no autorizado, no existe token" });
  }
});


const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Acceso no autorizado, necesita ser administrador");
  }
};

export { protect, isAdmin };
