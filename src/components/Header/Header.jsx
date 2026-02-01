import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Container,
  alpha,
  Slide,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

function Header({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <Slide direction="down" in={!scrolled} timeout={500}>
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? alpha(theme.palette.background.paper, 0.9)
              : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? 3 : 0,
            transition: 'all 0.3s ease',
            py: scrolled ? 1 : 2,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      '& .logo-icon': {
                        transform: 'rotate(15deg)',
                      },
                    },
                  }}
                  onClick={() => scrollToSection('home')}
                >
                  <CodeIcon
                    className="logo-icon"
                    color="primary"
                    sx={{
                      fontSize: 32,
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      background: theme.palette.gradient.primary,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '1.5rem',
                    }}
                  >
                    PORTFOLIO
                  </Typography>
                </Box>
              </motion.div>

              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Fade in timeout={1000}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            onClick={() => scrollToSection(item.id)}
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              position: 'relative',
                              '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                width: 0,
                                height: '2px',
                                background: theme.palette.gradient.primary,
                                transition: 'all 0.3s ease',
                                transform: 'translateX(-50%)',
                              },
                              '&:hover': {
                                color: theme.palette.primary.main,
                                '&:after': {
                                  width: '100%',
                                },
                              },
                            }}
                          >
                            {item.name}
                          </Button>
                        </motion.div>
                      ))}
                    </Box>
                  </Fade>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      onClick={() => setDarkMode(!darkMode)}
                      sx={{
                        ml: 2,
                        background: theme.palette.gradient.primary,
                        color: 'white',
                        '&:hover': {
                          background: theme.palette.primary.dark,
                        },
                      }}
                    >
                      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                  </motion.div>
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            background: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h6" fontWeight={700}>
              Menu
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    borderRadius: 2,
                    py: 2,
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: 600,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  py: 2,
                  mt: 2,
                  background: theme.palette.gradient.primary,
                  color: 'white',
                  '&:hover': {
                    opacity: 0.9,
                  },
                }}
              >
                <ListItemText
                  primary={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Toolbar />
    </>
  );
}

export default Header;