import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

// Conectarse a la base de datos PostgreSQL
connectDB();

const app = express();

// Middleware de logging para desarrollo
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middleware para manejar JSON
app.use(express.json());

// Rutas de usuario
app.use("/api/users", userRoutes);

// Middleware para servir archivos estáticos y rutas de la aplicación en producción
if (process.env.NODE_ENV === "production") {
  // Servir los archivos estáticos del front end
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // Ruta principal que sirve el archivo HTML de la aplicación de React
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  // Ruta de prueba en entorno de desarrollo
  app.get("/", (req, res) => {
    res.send("API is running......");
  });
}

// Middleware de manejo de errores
app.use(notFound);
app.use(errorHandler);

// Puerto de escucha del servidor
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
