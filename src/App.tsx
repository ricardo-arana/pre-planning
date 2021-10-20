import React from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Home from './presentation/pages/home/home';

function App() {
  return (
    <ChakraProvider>
    <Home></Home>
  </ChakraProvider>
  );
}

export default App;
