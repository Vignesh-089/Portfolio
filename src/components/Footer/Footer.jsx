import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link,
  useTheme,
  useMediaQuery,
  alpha,
  Button,
  Tooltip,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';

// Custom animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialLinks = [
  {
    icon: <GitHubIcon />,
    href: 'https://github.com',
    label: 'GitHub',
    color: '#333',
    gradient: 'linear-gradient(135deg, #333333, #6e5494)',
  },
  {
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/vignesh060',
    label: 'LinkedIn',
    color: '#0077B5',
    gradient: 'linear-gradient(135deg, #0077B5, #00A0DC)',
  },
  {
    icon: <InstagramIcon />,
    href: 'https://instagram.com',
    label: 'Instagram',
    color: '#E4405F',
    gradient: 'linear-gradient(135deg, #E4405F, #833AB4)',
  },
  {
    icon: <EmailIcon />,
    href: 'mailto:solaivignesh60@gmail.com',
    label: 'Email',
    color: '#EA4335',
    gradient: 'linear-gradient(135deg, #EA4335, #FBBC05)',
  },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const techStack = [
  'React',
  'JavaScript',
  'Material-UI',
  'Node.js',
  'My SQL',
  'Firebase',
  'Tailwind CSS',
  'HTML',
  'CSS'
];

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 1) 100%)'
    : 'linear-gradient(180deg, rgba(248, 250, 252, 0.95) 0%, rgba(226, 232, 240, 1) 100%)';

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: footerBg,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {/* Animated background elements - hidden on mobile for performance */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '100px', sm: '150px', md: '200px' },
              height: { xs: '100px', sm: '150px', md: '200px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%)',
              top: { xs: '-50px', sm: '-75px', md: '-100px' },
              left: { xs: '-50px', sm: '-75px', md: '-100px' },
              animation: `${floatAnimation} 20s ease-in-out infinite`,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              width: { xs: '80px', sm: '120px', md: '150px' },
              height: { xs: '80px', sm: '120px', md: '150px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.02) 0%, transparent 70%)',
              bottom: { xs: '-40px', sm: '-60px', md: '-75px' },
              right: { xs: '-40px', sm: '-60px', md: '-75px' },
              animation: `${floatAnimation} 15s ease-in-out infinite reverse`,
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ 
        position: 'relative', 
        zIndex: 1,
        px: { xs: 2, sm: 3, md: 2 },
      }}>
        {/* Scroll to top button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            bottom: { xs: 16, sm: 20, md: 24 },
            right: { xs: 16, sm: 20, md: 24 },
            zIndex: 1000,
          }}
        >
          <Tooltip title="Back to top" arrow>
            <IconButton
              onClick={scrollToTop}
              sx={{
                width: { xs: 44, sm: 48, md: 52 },
                height: { xs: 44, sm: 48, md: 52 },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
                boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.25)}`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: isMobile ? 'scale(1.05)' : 'translateY(-3px)',
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.35)}`,
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
                transition: 'all 0.2s ease',
                animation: !isMobile ? `${floatAnimation} 3s ease-in-out infinite` : 'none',
              }}
            >
              <ArrowUpwardIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' } }} />
            </IconButton>
          </Tooltip>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Footer Content */}
          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ mb: { xs: 3, sm: 4 } }}>
            {/* Left Column - Brand & Social */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={fadeInUp}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  mb: 2.5,
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'left' },
                }}>
                  <Box
                    sx={{
                      width: { xs: 44, sm: 48 },
                      height: { xs: 44, sm: 48 },
                      borderRadius: { xs: '10px', sm: '12px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      flexShrink: 0,
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 'inherit' }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      Vignesh
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        mt: 0.5,
                      }}
                    >
                      Full Stack Developer
                    </Typography>
                  </Box>
                </Box>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2.5, 
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    lineHeight: 1.5,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Passionate about creating beautiful, functional web applications.
                  Let's build something amazing together!
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1.25,
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: isMobile ? 1 : 1.1, rotate: 3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Tooltip title={social.label} arrow>
                        <IconButton
                          href={social.href}
                          target="_blank"
                          sx={{
                            width: { xs: 40, sm: 42, md: 44 },
                            height: { xs: 40, sm: 42, md: 44 },
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.04)'
                              : 'rgba(0, 0, 0, 0.02)',
                            color: social.color,
                            border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: social.gradient,
                              color: 'white',
                              borderColor: 'transparent',
                              transform: isMobile ? 'scale(1.05)' : 'translateY(-2px)',
                              boxShadow: `0 4px 16px ${alpha(social.color, 0.25)}`,
                            },
                            '&:active': {
                              transform: 'scale(0.95)',
                            },
                            '& svg': {
                              fontSize: { xs: '1rem', sm: '1.1rem' },
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </Tooltip>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Middle Column - Quick Links */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={fadeInUp}>
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Quick Links
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.25,
                    alignItems: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      style={{ width: '100%' }}
                    >
                      <Button
                        onClick={() => handleQuickLinkClick(link.href)}
                        sx={{
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                          color: 'text.secondary',
                          fontWeight: 500,
                          py: 0.2,
                          px: 1,
                          minHeight: 'auto',
                          textTransform: 'none',
                          fontSize: { xs: '0.8rem', sm: '0.85rem' },
                          width: { xs: 'auto', sm: '100%' },
                          '&:hover': {
                            color: theme.palette.primary.main,
                            background: alpha(theme.palette.primary.main, 0.05),
                            transform: isMobile ? 'none' : 'translateX(6px)',
                          },
                          '&:active': {
                            transform: 'scale(0.98)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {link.label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column - Tech Stack */}
            <Grid item xs={12} md={4}>
              <motion.div variants={fadeInUp}>
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Tech Stack
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 0.75, 
                  mb: 2.5,
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}>
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                    >
                      <Box
                        sx={{
                          px: 1.25,
                          py: 0.4,
                          borderRadius: 0.75,
                          background: alpha(theme.palette.primary.main, 0.1),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                          fontSize: { xs: '0.7rem', sm: '0.72rem' },
                          fontWeight: 500,
                          color: theme.palette.primary.main,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tech}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    lineHeight: 1.4,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Built with modern technologies and best practices
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', sm: 'flex-start' } 
                }}>
                  <Button
                    variant="outlined"
                    startIcon={<CoffeeIcon sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }} />}
                    sx={{
                      borderRadius: 1.5,
                      borderColor: alpha(theme.palette.primary.main, 0.25),
                      color: theme.palette.primary.main,
                      fontSize: { xs: '0.8rem', sm: '0.85rem' },
                      py: 0.75,
                      px: 2,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        background: alpha(theme.palette.primary.main, 0.08),
                        transform: isMobile ? 'none' : 'translateY(-2px)',
                      },
                      '&:active': {
                        transform: 'scale(0.98)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Buy me a coffee
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Divider */}
          <motion.div variants={fadeInUp}>
            <Divider
              sx={{
                my: { xs: 3, sm: 4 },
                opacity: 0.2,
                '&::before, &::after': {
                  borderColor: alpha(theme.palette.primary.main, 0.15),
                }
              }}
            />
          </motion.div>

          {/* Bottom Section - Copyright & Links */}
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  align={isMobile ? 'center' : 'left'}
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    lineHeight: 1.4,
                  }}
                >
                  © {currentYear} Vignesh S. All rights reserved.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                gap: 1.5,
                justifyContent: isMobile ? 'center' : 'flex-end',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="#"
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    opacity: 0.5,
                  }}
                >
                  •
                </Typography>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="#"
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Terms of Service
                  </Link>
                </motion.div>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    opacity: 0.5,
                  }}
                >
                  •
                </Typography>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="#"
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Cookie Policy
                  </Link>
                </motion.div>
              </Box>
            </Grid>
          </Grid>

          {/* Made with love section */}
          <motion.div variants={fadeInUp}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.75,
              mt: 3,
              flexWrap: 'wrap',
              textAlign: 'center',
            }}>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
              >
                Made with
              </Typography>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              >
                <FavoriteIcon sx={{ 
                  fontSize: { xs: 12, sm: 13 }, 
                  color: '#ff4757', 
                  mx: 0.25,
                }} />
              </motion.div>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
              >
                using
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.25,
                px: 0.75,
                py: 0.25,
                borderRadius: 0.75,
                background: alpha(theme.palette.primary.main, 0.1),
                mx: 0.25,
              }}>
                <CodeIcon sx={{ fontSize: 12, color: theme.palette.primary.main }} />
                <Typography 
                  variant="caption" 
                  color="text.primary" 
                  fontWeight={500}
                  sx={{ fontSize: { xs: '0.65rem', sm: '0.7rem' } }}
                >
                  React
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
              >
                and
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.25,
                px: 0.75,
                py: 0.25,
                borderRadius: 0.75,
                background: alpha(theme.palette.secondary.main, 0.1),
                mx: 0.25,
              }}>
                <CodeIcon sx={{ fontSize: 12, color: theme.palette.secondary.main }} />
                <Typography 
                  variant="caption" 
                  color="text.primary" 
                  fontWeight={500}
                  sx={{ fontSize: { xs: '0.65rem', sm: '0.7rem' } }}
                >
                  Material-UI
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Visitor Counter (Demo) */}
          <motion.div variants={fadeInUp}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.75,
              mt: 2.5,
            }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: `pulse 2s ease-in-out infinite`,
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  }
                }}
              />
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
              >
                1,234 visitors this month
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Footer;