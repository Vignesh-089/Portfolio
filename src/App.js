import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import theme from './theme/theme';
import './styles/global.css';
import './styles/animations.css';
import CursorGlow from './components/CursorGlow/CursorGlow';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const currentTheme = theme(darkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box className="App" sx={{ position: 'relative', overflow: 'hidden' }}>

        <CursorGlow />
        
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            background: darkMode 
              ? 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)',
          }}
        />
        
        {/* Floating particles */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                background: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(37, 99, 235, 0.2)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: 'float 20s infinite linear',
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </Box>

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;