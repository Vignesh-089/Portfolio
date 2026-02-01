import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  IconButton,
  useTheme,
  alpha,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import profileImg from '../../assets/projects/MyImage.jpeg';

function Hero({ darkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Box
      id="home"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      sx={{
        minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '20px',
        pt: { xs: 3, md: 4 },
        pb: { xs: 4, md: 6 },
        background: theme.palette.background.gradient,
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: { xs: '180px', md: '250px' },
          height: { xs: '180px', md: '250px' },
          borderRadius: '50%',
          background: theme.palette.gradient.primary,
          opacity: 0.08,
          filter: 'blur(60px)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: isMobile ? 'none' : 'transform 0.1s ease-out',
        }}
      />

      <Container maxWidth="lg" sx={{
        position: 'relative',
        zIndex: 1,
        px: { xs: 3, md: 4 },
      }}>
        <Grid
          container
          spacing={{ xs: 2, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Text Content - Increased font sizes */}
          <Grid item xs={12} md={6} sx={{
            pr: { md: 1 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              style={{ width: '100%' }}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: '20px',
                      height: '2px',
                      background: theme.palette.gradient.primary,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  />
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 1,
                    fontWeight: 800,
                    background: theme.palette.gradient.primary,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 3s ease infinite',
                    fontSize: {
                      xs: '2.2rem',
                      sm: '2.6rem',
                      md: '3.2rem',
                      lg: '3.5rem'
                    },
                    lineHeight: 1.1,
                  }}
                >
                  Vignesh S
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{
                  mb: 1.5,
                  minHeight: { xs: '40px', md: '48px' },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: {
                        xs: '1.3rem',
                        sm: '1.5rem',
                        md: '1.8rem',
                        lg: '2rem'
                      },
                    }}
                  >
                    <TypeAnimation
                      sequence={[
                        'Mern Stack Developer',
                        2000,
                        'React Developer',
                        2000,
                        'UI/UX Designer',
                        2000,
                        'Problem Solver',
                        2000,
                        'Software Developer',
                        2000,
                        'Frontend Developer',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      style={{ fontSize: 'inherit' }}
                    />
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2.5,
                    fontSize: {
                      xs: '0.95rem',
                      md: '1.05rem'
                    },
                    lineHeight: 1.6,
                    maxWidth: { xs: '100%', md: '550px' },
                    color: 'text.secondary',
                    mx: { xs: 'auto', md: 0 },
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  I create fast, responsive, and accessible web interfaces
                  using React, with a strong focus on UI and user experience.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  mb: 2.5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  {['React', 'JavaScript', 'Tailwind', 'MySQL', 'Node.js', 'HTML/CSS'].map(
                    (tech, index) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Chip
                          label={tech}
                          size="medium"
                          sx={{
                            background: theme.palette.background.card,
                            fontWeight: 500,
                            border: `1px solid ${theme.palette.divider}`,
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            height: { xs: '28px', md: '32px' },
                            '&:hover': {
                              background: theme.palette.gradient.primary,
                              color: 'white',
                            },
                          }}
                        />
                      </motion.div>
                    )
                  )}
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    mt: 2,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    width: '100%',
                  }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={() => scrollToSection('contact')}
                      sx={{
                        px: 3,
                        py: 1,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        minWidth: { xs: '140px', md: 'auto' },
                        fontWeight: 600,
                      }}
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outlined"
                      size="medium"
                      startIcon={<DownloadIcon />}
                      component="a"
                      href="/resume.pdf"
                      download="Vignesh_Resume.pdf"
                      sx={{
                        px: 3,
                        py: 1,
                        borderWidth: 2,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        minWidth: { xs: '140px', md: 'auto' },
                        fontWeight: 600,
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{
                  display: 'flex',
                  gap: 1,
                  mt: 2.5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  {[
                    { icon: <GitHubIcon />, href: 'https://github.com/Vignesh-089' },
                    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/vignesh060' },
                    { icon: <EmailIcon />, href: 'mailto:solaivignesh60@gmail.com' },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.href}
                        target="_blank"
                        size="medium"
                        sx={{
                          background: theme.palette.background.card,
                          color: theme.palette.text.primary,
                          width: { xs: 44, md: 48 },
                          height: { xs: 44, md: 48 },
                          '&:hover': {
                            background: theme.palette.gradient.primary,
                            color: 'white',
                          },
                          '& svg': {
                            fontSize: { xs: '1.2rem', md: '1.3rem' },
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Image Content - Reduced gap and made more compact */}
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            mt: { xs: 2, md: 0 },
            mb: { xs: 2, md: 0 },
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '300px', md: '380px' },
              margin: { xs: '0 auto', md: '0' },
            }}>
              {/* Floating circles */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: { xs: '60px', md: '80px' },
                  height: { xs: '60px', md: '80px' },
                  borderRadius: '50%',
                  background: theme.palette.gradient.secondary,
                  opacity: 0.2,
                  filter: 'blur(12px)',
                  animation: 'float 6s ease-in-out infinite',
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-15px',
                  width: { xs: '50px', md: '70px' },
                  height: { xs: '50px', md: '70px' },
                  borderRadius: '50%',
                  background: theme.palette.gradient.primary,
                  opacity: 0.15,
                  filter: 'blur(10px)',
                  animation: 'float 8s ease-in-out infinite reverse',
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
                whileHover={{ scale: isMobile ? 1 : 1.03 }}
                style={{
                  width: '100%',
                  margin: '0 auto',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: `3px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    boxShadow: `0 15px 35px ${alpha(theme.palette.primary.main, 0.2)}`,
                    width: '100%',
                    aspectRatio: '1/1.05',
                  }}
                >
                  <Avatar
                    src={profileImg}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(5%) contrast(1.05)',
                    }}
                  />

                  {/* Glow effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.gradient.primary,
                      opacity: 0.08,
                      mixBlendMode: 'overlay',
                    }}
                  />
                </Box>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    background: theme.palette.gradient.primary,
                    color: 'white',
                    padding: { xs: '6px 12px', md: '8px 16px' },
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                    animation: 'pulse 3s infinite',
                    whiteSpace: 'nowrap',
                  }}
                >
                  1+ Year Experience
                </Box>
              </motion.div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: { xs: '0px', md: '-10px' },
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    background: theme.palette.background.card,
                    color: theme.palette.text.primary,
                    padding: { xs: '5px 10px', md: '6px 12px' },
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    border: `1.5px solid ${alpha(theme.palette.divider, 0.2)}`,
                    maxWidth: { xs: '120px', md: '140px' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  📍 {isMobile ? 'Bengaluru' : 'Bengaluru, India'}
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Scroll indicator - Only on larger screens */}
        {!isMobile && (
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '30px',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: alpha(theme.palette.text.secondary, 0.8),
              cursor: 'pointer',
              zIndex: 10,
            }}
            onClick={() => scrollToSection('about')}
          >
            <Typography
              variant="body2"
              sx={{
                mb: 0.5,
                fontWeight: 500,
                fontSize: '0.8rem',
                opacity: 0.8,
              }}
            >
              Scroll Down
            </Typography>
            <ArrowDownwardIcon sx={{ fontSize: '1.1rem' }} />
          </motion.div>
        )}
      </Container>
    </Box>
  );
}

export default Hero;