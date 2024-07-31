import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { TodoForm } from "./components/TodoForm";

const App = () => {
  return (
    <div>
      <Navbar />

      <TodoForm />
      <Footer />
    </div>
  );
};

export default App;
