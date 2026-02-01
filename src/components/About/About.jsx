import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

// Custom animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredItem, setHoveredItem] = useState(null);

  // Background colors for light/dark mode
  const paperBg = theme.palette.mode === 'dark' 
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)';

  const accentGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const secondaryGradient = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';

  return (
    <Box 
      id="about" 
      sx={{ 
        py: { xs: 5, md: 6 }, // Reduced from 6,6 to 5,6
        background: theme.palette.mode === 'dark' 
          ? 'radial-gradient(ellipse at 50% 30%, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 1) 100%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(248, 250, 252, 0.8) 0%, rgba(226, 232, 240, 1) 100%)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '300px', // Reduced from 400px
          height: '300px', // Reduced from 400px
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          top: '-80px', // Adjusted
          right: '-80px', // Adjusted
          animation: `${floatAnimation} 20s ease-in-out infinite`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '250px', // Reduced from 300px
          height: '250px', // Reduced from 300px
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)',
          bottom: '-40px', // Adjusted
          left: '-40px', // Adjusted
          animation: `${floatAnimation} 15s ease-in-out infinite reverse`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 3, // Reduced from 4
              fontWeight: 700, // Reduced from 800
              background: `linear-gradient(45deg, ${theme.palette.mode === 'dark' ? '#38bdf8, #ec4899' : '#4f46e5, #ec4899'})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              fontSize: { xs: '2rem', md: '2.4rem' }, // Reduced from 2.5rem,3rem
            }}
          >
            About Me
            <Box
              sx={{
                width: '70px', // Reduced from 80px
                height: '3px', // Reduced from 4px
                background: accentGradient,
                margin: '12px auto 20px', // Reduced from 16px auto 24px
                borderRadius: '2px',
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shimmer 2s infinite',
                },
              }}
            />
          </Typography>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={3} alignItems="stretch"> {/* Reduced from 4 */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Paper
                  elevation={theme.palette.mode === 'dark' ? 2 : 0}
                  sx={{
                    p: { xs: 2.5, md: 3.5 }, // Reduced from 3,4
                    borderRadius: 3, // Reduced from 4
                    background: paperBg,
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)', // Reduced from 8px
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 15px 30px rgba(0,0,0,0.3)' // Reduced
                        : '0 15px 30px rgba(0,0,0,0.08)', // Reduced
                    },
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2, // Reduced from 3
                      fontWeight: 600,
                      background: accentGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '1.2rem', // Added explicit size
                    }}
                  >
                    Hello! I'm Vignesh
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2.5, // Reduced from 3
                      lineHeight: 1.7,
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.9rem', md: '0.95rem' }, // Reduced from 0.95rem,1rem
                    }}
                  >
                    I'm a passionate Full Stack Developer with over 1 year of experience 
                    building innovative web applications. My expertise lies in creating 
                    scalable, efficient, and user-centric solutions using modern technologies.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, // Reduced from 4
                      lineHeight: 1.7,
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.9rem', md: '0.95rem' }, // Reduced
                    }}
                  >
                    I specialize in React, Node.js, and cloud technologies. I enjoy 
                    solving complex problems and turning ideas into reality through code. 
                    When I'm not programming, I contribute to open-source projects and 
                    write technical articles.
                  </Typography>

                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1.5, // Reduced from 2
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      fontSize: '0.95rem', // Added explicit size
                    }}
                  >
                    Core Skills
                  </Typography>
                  
                  <List>
                    {[
                      'React Developer',
                      'Front End Development',
                      'Mern Stack Web Development',
                      'UI/UX Design',
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <ListItem 
                          disableGutters
                          sx={{ 
                            py: 0.75, // Reduced from 1
                            transition: 'all 0.3s ease',
                            borderRadius: 1.5, // Reduced from 2
                            '&:hover': {
                              backgroundColor: theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.04)'
                                : 'rgba(0,0,0,0.02)',
                              transform: 'translateX(6px)', // Reduced from 8px
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}> {/* Reduced from 36 */}
                            <Box
                              sx={{
                                width: 20, // Reduced from 24
                                height: 20, // Reduced from 24
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: accentGradient,
                              }}
                            >
                              <CheckCircleIcon sx={{ fontSize: 14, color: 'white' }} /> {/* Reduced from 16 */}
                            </Box>
                          </ListItemIcon>
                          <ListItemText 
                            primary={item}
                            primaryTypographyProps={{
                              sx: { 
                                fontSize: { xs: '0.85rem', md: '0.9rem' }, // Reduced from 0.9rem,1rem
                                color: theme.palette.text.primary,
                              }
                            }}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2.5}> {/* Reduced from 3 */}
                {[
                  {
                    icon: <SchoolIcon />,
                    title: 'Education',
                    subtitle: "Bachelor's in Electronics and Communication Engineering",
                    details: 'SNS College of Technology • 2020-2024',
                    gradient: accentGradient,
                    delay: 0.2,
                  },
                  {
                    icon: <WorkIcon />,
                    title: 'Experience',
                    subtitle: 'Software Developer',
                    details: 'Why Digit System Pvt Ltd • 2024-Present',
                    gradient: secondaryGradient,
                    delay: 0.4,
                  },
                  {
                    icon: <LocationOnIcon />,
                    title: 'Location',
                    subtitle: 'Bengaluru, Karnataka, India',
                    details: 'Open to remote opportunities',
                    gradient: 'linear-gradient(135deg, #4ade80 0%, #06b6d4 100%)',
                    delay: 0.6,
                  },
                ].map((item, index) => (
                  <Grid item xs={12} key={item.title}>
                    <motion.div
                      variants={fadeInUp}
                      transition={{ delay: item.delay }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Paper
                        elevation={theme.palette.mode === 'dark' ? 2 : 0}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        sx={{
                          p: 2.5, // Reduced from 3
                          borderRadius: 2.5, // Reduced from 3
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2.5, // Reduced from 3
                          background: paperBg,
                          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px', // Reduced from 3px
                            background: item.gradient,
                            transform: hoveredItem === index ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 56, // Reduced from 64
                            height: 56, // Reduced from 64
                            background: item.gradient,
                            transition: 'all 0.3s ease',
                            transform: hoveredItem === index ? 'scale(1.08) rotate(5deg)' : 'scale(1)', // Reduced from 1.1
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              mb: 0.75, // Reduced from 1
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              fontSize: '1rem', // Added explicit size
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              mb: 0.25, // Reduced from 0.5
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                              fontSize: '0.9rem', // Added explicit size
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: theme.palette.text.secondary,
                              fontSize: '0.8rem', // Added explicit size
                            }}
                          >
                            {item.details}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Stats Section */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <Paper
                  elevation={theme.palette.mode === 'dark' ? 2 : 0}
                  sx={{
                    p: 2.5, // Reduced from 3
                    mt: 2.5, // Reduced from 3
                    borderRadius: 2.5, // Reduced from 3
                    background: paperBg,
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <Grid container spacing={1.5}> {/* Reduced from 2 */}
                    {[
                      { value: '10+', label: 'Projects Completed' },
                      { value: '1+', label: 'Years Experience' },
                      { value: '100%', label: 'Client Satisfaction' },
                      { value: '24/7', label: 'Availability' },
                    ].map((stat) => (
                      <Grid item xs={6} key={stat.label}>
                        <Box sx={{ textAlign: 'center', p: 1 }}> {/* Added padding */}
                          <Typography
                            variant="h5" // Changed from h4 to h5
                            sx={{
                              fontWeight: 700, // Reduced from 800
                              background: accentGradient,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              mb: 0.25, // Reduced from 0.5
                              fontSize: '1.5rem', // Added explicit size
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              textTransform: 'uppercase',
                              letterSpacing: 0.8, // Reduced from 1
                              fontSize: '0.7rem', // Reduced from 0.75rem
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </Box>
  );
}

export default About;