import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha,
  CircularProgress,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Custom animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
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
    href: 'https://github.com/Vignesh-089', 
    label: 'GitHub',
    color: '#333',
    gradient: 'linear-gradient(135deg, #333333, #6e5494)'
  },
  { 
    icon: <LinkedInIcon />, 
    href: 'https://linkedin.com', 
    label: 'LinkedIn',
    color: '#0077B5',
    gradient: 'linear-gradient(135deg, #0077B5, #00A0DC)'
  },
  { 
    icon: <InstagramIcon />, 
    href: 'https://www.instagram.com/_vicky_014/?next=%2F&hl=en', 
    label: 'Instagram',
    color: '#E4405F',
    gradient: 'linear-gradient(135deg, #E4405F, #833AB4)'
  },
];

// Custom Tooltip Component
const CustomTooltip = ({ children, title, theme }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Box
      sx={{ display: 'inline-flex', position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen(true)}
      onTouchEnd={() => setTimeout(() => setOpen(false), 1500)}
    >
      {children}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '6px 10px',
            borderRadius: '6px',
            fontSize: '0.7rem',
            zIndex: 9999,
            backdropFilter: 'blur(10px)',
            top: '100%',
            marginTop: '6px',
            whiteSpace: 'nowrap',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {title}
          <Box
            sx={{
              position: 'absolute',
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '8px',
              background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.8)',
              // transform: 'rotate(45deg)',
            }}
          />
        </motion.div>
      )}
    </Box>
  );
};

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [hoveredContact, setHoveredContact] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSnackbarMessage('Message sent successfully! I will get back to you within 24 hours.');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbarMessage('Failed to send message. Please try again or email me directly.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'solaivignesh60@gmail.com',
      href: 'mailto:solaivignesh60@gmail.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      copy: true,
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+91 9345377252',
      href: 'tel:+919345377252',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      copy: true,
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Bengaluru, Karnataka, India',
      gradient: 'linear-gradient(135deg, #4ade80 0%, #06b6d4 100%)',
      copy: false,
    },
  ];

  const paperBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)';

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSnackbarMessage(`Copied ${text} to clipboard!`);
        setSnackbarSeverity('info');
        setOpenSnackbar(true);
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 3, sm: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.08), transparent), radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.08), transparent)'
          : 'radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.04), transparent), radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.04), transparent)',
      }}
    >
      {/* Animated background elements - hidden on mobile */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '100px', sm: '150px', md: '180px' },
              height: { xs: '100px', sm: '150px', md: '180px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
              top: '10%',
              right: { xs: '-50px', sm: '-75px', md: '-90px' },
              animation: `${floatAnimation} 20s ease-in-out infinite`,
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '80px', sm: '120px', md: '140px' },
              height: { xs: '80px', sm: '120px', md: '140px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
              bottom: '20%',
              left: { xs: '-40px', sm: '-60px', md: '-70px' },
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
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
            }}
          >
            Let's Connect
          </Typography>
          
          <Box
            sx={{
              width: { xs: '50px', sm: '60px', md: '70px' },
              height: '2px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: '8px auto 16px',
              borderRadius: '1px',
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
                animation: `${shimmer} 2s infinite`,
              },
            }}
          />
        </motion.div>

        <Typography
          variant="body1"
          align="center"
          sx={{ 
            mb: { xs: 3, sm: 4 },
            color: 'text.secondary', 
            maxWidth: { xs: '100%', sm: '600px', md: '700px' }, 
            mx: 'auto',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            px: { xs: 1, sm: 0 },
            lineHeight: 1.5,
          }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out. 
          I'm always open to discussing new opportunities and creative ideas.
        </Typography>

        {/* Contact Cards & Form */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div variants={fadeInUp}>
                <Paper
                  elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                  sx={{
                    p: { xs: 1.5, sm: 2.5, md: 3 },
                    borderRadius: { xs: 2, sm: 2.5, md: 3 },
                    height: '100%',
                    background: paperBg,
                    border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.25, 
                    mb: { xs: 2, sm: 2.5 } 
                  }}>
                    <Box
                      sx={{
                        width: { xs: 40, sm: 44, md: 48 },
                        height: { xs: 40, sm: 44, md: 48 },
                        borderRadius: { xs: '10px', sm: '12px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                        animation: !isMobile ? `${floatAnimation} 3s ease-in-out infinite` : 'none',
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                      }}
                    >
                      📱
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight={600} 
                        sx={{ 
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          lineHeight: 1.2,
                        }}
                      >
                        Contact Info
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } 
                        }}
                      >
                        Get in touch through any channel
                      </Typography>
                    </Box>
                  </Box>

                  {/* Contact Cards */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, mb: { xs: 2, sm: 2.5 } }}>
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        variants={fadeInUp}
                        custom={index}
                        whileHover={{ scale: isMobile ? 1 : 1.02 }}
                        onHoverStart={() => !isMobile && setHoveredContact(info.title)}
                        onHoverEnd={() => !isMobile && setHoveredContact(null)}
                        onTouchStart={() => setHoveredContact(info.title)}
                        onTouchEnd={() => setTimeout(() => setHoveredContact(null), 300)}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: { xs: 1.25, sm: 1.5 },
                            borderRadius: { xs: 1.5, sm: 2 },
                            background: alpha(theme.palette.background.paper, 0.5),
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            cursor: info.href || info.copy ? 'pointer' : 'default',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '2px',
                              background: info.gradient,
                              transform: hoveredContact === info.title ? 'scaleX(1)' : 'scaleX(0)',
                              transformOrigin: 'left',
                              transition: 'transform 0.3s ease',
                            },
                            '&:hover': {
                              borderColor: alpha(theme.palette.primary.main, 0.2),
                              boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.08)}`,
                            },
                            '&:active': {
                              transform: isMobile ? 'scale(0.98)' : 'none',
                            },
                          }}
                          onClick={() => {
                            if (info.copy) {
                              handleCopy(info.value);
                            } else if (info.href) {
                              window.open(info.href, '_blank');
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.25, sm: 1.5 } }}>
                            <Box
                              sx={{
                                width: { xs: 36, sm: 40, md: 44 },
                                height: { xs: 36, sm: 40, md: 44 },
                                borderRadius: { xs: '8px', sm: '10px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: info.gradient,
                                color: 'white',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                transition: 'all 0.2s ease',
                                transform: hoveredContact === info.title && !isMobile ? 'rotate(8deg) scale(1.05)' : 'none',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.25 }}>
                                <Typography 
                                  variant="subtitle2" 
                                  fontWeight={500} 
                                  sx={{ 
                                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {info.title}
                                </Typography>
                                {info.copy && !isMobile && (
                                  <Typography 
                                    variant="caption" 
                                    sx={{ 
                                      color: theme.palette.primary.main,
                                      fontWeight: 500,
                                      opacity: hoveredContact === info.title ? 1 : 0,
                                      transition: 'opacity 0.2s ease',
                                      fontSize: '0.65rem',
                                    }}
                                  >
                                    Click to copy
                                  </Typography>
                                )}
                              </Box>
                              <Typography 
                                variant="body2" 
                                color="text.primary" 
                                sx={{ 
                                  fontWeight: 500, 
                                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                                  lineHeight: 1.3,
                                  wordBreak: 'break-word',
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>

                  <Divider sx={{ 
                    my: { xs: 2, sm: 2.5 }, 
                    opacity: 0.2,
                    borderWidth: '0.5px',
                  }} />

                  {/* Social Links */}
                  <Box>
                    <Typography 
                      variant="subtitle1" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      }}
                    >
                      Follow Me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: isMobile ? 1 : 1.05, rotate: 3 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CustomTooltip title={social.label} theme={theme}>
                            <IconButton
                              href={social.href}
                              target="_blank"
                              sx={{
                                width: { xs: 40, sm: 44, md: 48 },
                                height: { xs: 40, sm: 44, md: 48 },
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
                                  transform: isMobile ? 'none' : 'translateY(-2px)',
                                  boxShadow: `0 4px 12px ${alpha(social.color, 0.2)}`,
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
                          </CustomTooltip>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>

                  {/* Quick Stats */}
                  <Box sx={{ 
                    mt: { xs: 2, sm: 2.5 }, 
                    pt: { xs: 2, sm: 2.5 }, 
                    borderTop: `1px dashed ${alpha(theme.palette.divider, 0.15)}` 
                  }}>
                    <Grid container spacing={1}>
                      {[
                        { value: '24h', label: 'Response Time' },
                        { value: '100%', label: 'Response Rate' },
                        { value: '10+', label: 'Projects Done' },
                      ].map((stat, index) => (
                        <Grid item xs={4} key={stat.label}>
                          <Box sx={{ textAlign: 'center', p: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                mb: 0.25,
                                fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                                lineHeight: 1,
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              color="text.secondary" 
                              sx={{ 
                                fontSize: { xs: '0.6rem', sm: '0.65rem' },
                                lineHeight: 1.2,
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeInUp}>
                <Paper
                  elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                  sx={{
                    p: { xs: 1.5, sm: 2.5, md: 3 },
                    borderRadius: { xs: 2, sm: 2.5, md: 3 },
                    background: paperBg,
                    border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.25, 
                    mb: { xs: 2, sm: 2.5 } 
                  }}>
                    <Box
                      sx={{
                        width: { xs: 40, sm: 44, md: 48 },
                        height: { xs: 40, sm: 44, md: 48 },
                        borderRadius: { xs: '10px', sm: '12px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        color: 'white',
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                      }}
                    >
                      ✉️
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight={600} 
                        sx={{ 
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          lineHeight: 1.2,
                        }}
                      >
                        Send a Message
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' } 
                        }}
                      >
                        Fill out the form below
                      </Typography>
                    </Box>
                  </Box>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                      {[
                        { name: 'name', label: 'Your Name', gridSize: { xs: 12, sm: 6 } },
                        { name: 'email', label: 'Email Address', gridSize: { xs: 12, sm: 6 }, type: 'email' },
                        { name: 'subject', label: 'Subject', gridSize: { xs: 12 } },
                      ].map((field, index) => (
                        <Grid item xs={field.gridSize.xs} sm={field.gridSize.sm} key={field.name}>
                          <motion.div
                            variants={fadeInUp}
                            custom={index}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                          >
                            <TextField
                              required
                              fullWidth
                              label={field.label}
                              name={field.name}
                              type={field.type || 'text'}
                              value={formData[field.name]}
                              onChange={handleChange}
                              variant="outlined"
                              size="small"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 1.25,
                                  transition: 'all 0.2s ease',
                                  background: alpha(theme.palette.background.paper, 0.5),
                                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                  '& fieldset': {
                                    borderColor: alpha(theme.palette.divider, 0.2),
                                    borderWidth: '1px',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: focusedField === field.name 
                                      ? theme.palette.primary.main 
                                      : alpha(theme.palette.primary.main, 0.3),
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.primary.main,
                                    borderWidth: '1.5px',
                                  },
                                },
                                '& .MuiInputLabel-root': {
                                  color: focusedField === field.name 
                                    ? theme.palette.primary.main 
                                    : 'text.secondary',
                                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                },
                                '& .MuiInputBase-input': {
                                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                  padding: { xs: '9px 12px', sm: '10.5px 14px' },
                                },
                              }}
                            />
                          </motion.div>
                        </Grid>
                      ))}

                      <Grid item xs={12}>
                        <motion.div
                          variants={fadeInUp}
                          custom={3}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                        >
                          <TextField
                            required
                            fullWidth
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={isMobile ? 4 : 5}
                            variant="outlined"
                            size="small"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 1.25,
                                transition: 'all 0.2s ease',
                                background: alpha(theme.palette.background.paper, 0.5),
                                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                '& fieldset': {
                                  borderColor: alpha(theme.palette.divider, 0.2),
                                  borderWidth: '1px',
                                },
                                '&:hover fieldset': {
                                  borderColor: focusedField === 'message' 
                                    ? theme.palette.primary.main 
                                    : alpha(theme.palette.primary.main, 0.3),
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                  borderWidth: '1.5px',
                                },
                                '& textarea': {
                                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: focusedField === 'message' 
                                  ? theme.palette.primary.main 
                                  : 'text.secondary',
                                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                              },
                            }}
                          />
                        </motion.div>
                      </Grid>

                      <Grid item xs={12}>
                        <motion.div
                          variants={fadeInUp}
                          custom={4}
                          whileHover={{ scale: isMobile ? 1 : 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="medium"
                            disabled={loading}
                            endIcon={
                              loading ? (
                                <CircularProgress size={16} color="inherit" />
                              ) : (
                                <SendIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
                              )
                            }
                            fullWidth
                            sx={{
                              py: { xs: 1, sm: 1.25 },
                              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                              fontWeight: 600,
                              borderRadius: 1.25,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.2)}`,
                              transition: 'all 0.2s ease',
                              position: 'relative',
                              overflow: 'hidden',
                              '&:hover': {
                                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                                boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                                transform: isMobile ? 'none' : 'translateY(-2px)',
                              },
                              '&:active': {
                                transform: 'scale(0.98)',
                              },
                              '&:disabled': {
                                background: theme.palette.action.disabledBackground,
                                boxShadow: 'none',
                              },
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                                transition: 'left 0.5s ease',
                              },
                              '&:hover::before': {
                                left: '100%',
                              },
                            }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>

                  {/* Form Footer */}
                  <Box sx={{ 
                    mt: { xs: 2, sm: 2.5 }, 
                    pt: { xs: 2, sm: 2.5 }, 
                    borderTop: `1px dashed ${alpha(theme.palette.divider, 0.15)}` 
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}>
                      <CheckCircleIcon sx={{ 
                        color: theme.palette.success.main, 
                        fontSize: { xs: 16, sm: 18 } 
                      }} />
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                          textAlign: { xs: 'center', sm: 'left' },
                          flex: 1,
                        }}
                      >
                        I typically respond within 24 hours
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        sx={{ 
                          fontSize: { xs: '0.6rem', sm: '0.65rem' },
                          opacity: 0.7,
                        }}
                      >
                        All fields are required
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ 
          vertical: isMobile ? 'top' : 'bottom', 
          horizontal: isMobile ? 'center' : 'right' 
        }}
        sx={{ 
          mb: isMobile ? 0 : 2, 
          mr: isMobile ? 0 : 2,
          top: isMobile ? '20px' : 'auto',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ width: isMobile ? '90%' : 'auto' }}
        >
          <Alert
            severity={snackbarSeverity}
            onClose={() => setOpenSnackbar(false)}
            sx={{
              borderRadius: 1.25,
              boxShadow: theme.palette.mode === 'dark'
                ? '0 4px 20px rgba(0,0,0,0.25)'
                : '0 4px 20px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              background: alpha(theme.palette.background.paper, 0.95),
              fontSize: '0.85rem',
              width: '100%',
            }}
            icon={false}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {snackbarSeverity === 'success' && '🎉'}
              {snackbarSeverity === 'error' && '❌'}
              {snackbarSeverity === 'info' && '📋'}
              <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>
                {snackbarMessage}
              </Typography>
            </Box>
          </Alert>
        </motion.div>
      </Snackbar>
    </Box>
  );
}

export default Contact;