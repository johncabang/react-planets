import React from "react";

import { PlanetProvider } from "./context/PlanetContext";

import Home from "./pages/Home";
import { StyledContainer } from "./styles/AppElements";
import { motion } from "framer-motion";

function App() {
  return (
    <StyledContainer>
      <PlanetProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 2 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
        </motion.div>
      </PlanetProvider>
    </StyledContainer>
  );
}

export default App;
