import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  alpha,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { keyframes } from '@emotion/react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
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
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Software Developer',
    company: 'Why Digit System Pvt Ltd',
    period: '2024 - Present',
    description: 'Developing scalable React web applications with a strong focus on performance and clean, reusable UI components.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Material UI'],
    achievements: [
      'Developed responsive and reusable React components used multiple modules',
      'Improved application performance and reduced load time for code optimization',
      'Integrated REST APIs and handled state management efficiently',
      'Assisted in deployment and CI/CD workflows using Git and cloud services'
    ],
    location: 'Bengaluru, Karnataka',
    icon: '💼',
  },
  {
    id: 2,
    type: 'work',
    title: 'Web Developer Intern',
    company: 'Fieldez Technologies',
    period: '2024 (Internship)',
    description: 'Built and maintained client websites using modern web technologies.',
    technologies: ['HTML/CSS', 'JavaScript', 'React'],
    achievements: [
      'Developed client websites',
      'Improved site loading speed by 50%',
      'Implemented responsive design for all projects',
      'Received "Outstanding Intern" award'
    ],
    location: 'Bengaluru, Karnataka',
    icon: '🚀',
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor in Electronics and Communication Engineering',
    company: 'SNS College of Technology',
    period: '2020 - 2024',
    description: 'Focused on core electronics, communication systems, and foundational software engineering concepts.',
    technologies: ['Digital Electronics', 'Communication Systems', 'Data Structures', 'Web Development', 'Embedded Systems'],
    achievements: [
      'Completed Bachelor\'s degree in Electronics and Communication Engineering',
      'Developed academic projects integrating software and electronics concepts',
      'Actively participated in technical workshops and seminars',
      'Built web-based projects alongside core engineering coursework'
    ],
    location: 'Coimbatore, Tamil Nadu',
    icon: '🎓',
  }
];

const certifications = [
  { name: 'Software Developer', issuer: 'Fieldez', date: '2024', icon: '⚛️' },
  { name: 'Mern Stack Developer', issuer: 'Meta', date: '2022', icon: '⚛️' }
];

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const handleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const filteredExperiences = experiences.filter(exp =>
    activeTab === 'all' ? true : exp.type === activeTab
  );

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  const paperBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)';

  const cardGradient = theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.08))'
    : 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(168, 85, 247, 0.04))';

  const tabs = [
    { id: 'all', label: 'All', count: experiences.length },
    { id: 'work', label: 'Work', count: workExperiences.length },
    { id: 'education', label: 'Education', count: educationExperiences.length },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(ellipse at 20% 15%, rgba(99, 102, 241, 0.08), transparent), radial-gradient(ellipse at 80% 85%, rgba(236, 72, 153, 0.08), transparent)'
          : 'radial-gradient(ellipse at 20% 15%, rgba(99, 102, 241, 0.04), transparent), radial-gradient(ellipse at 80% 85%, rgba(236, 72, 153, 0.04), transparent)',
      }}
    >
      {/* Background elements - hidden on mobile for performance */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '120px', md: '150px' },
              height: { xs: '120px', md: '150px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
              top: '5%',
              left: '-60px',
              animation: `${floatAnimation} 20s ease-in-out infinite`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '100px', md: '120px' },
              height: { xs: '100px', md: '120px' },
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
              bottom: '5%',
              right: '-50px',
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
              mb: 0.5,
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            Journey & Experience
          </Typography>

          <Box
            sx={{
              width: { xs: '50px', md: '60px' },
              height: '1.5px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: '6px auto 8px',
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
          variant="body2"
          align="center"
          sx={{
            mb: { xs: 2, sm: 3 },
            color: 'text.secondary',
            maxWidth: { xs: '100%', sm: '500px', md: '600px' },
            mx: 'auto',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
            px: { xs: 1, sm: 0 },
            lineHeight: 1.4,
          }}
        >
          My professional journey, education, and certifications that shaped my career
        </Typography>

        {/* Filter Tabs - Mobile optimized */}
        <Box sx={{ 
          mb: { xs: 2, sm: 3 },
          display: 'flex', 
          justifyContent: 'center', 
          gap: 1,
          flexWrap: 'wrap',
          px: { xs: 0.5, sm: 0 },
        }}>
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginBottom: '4px' }}
            >
              <Chip
                label={isMobile ? tab.label : `${tab.label} (${tab.count})`}
                onClick={() => setActiveTab(tab.id)}
                sx={{
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.5, sm: 0.75 },
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  fontWeight: 600,
                  background: activeTab === tab.id
                    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                    : theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.04)',
                  color: activeTab === tab.id ? 'white' : 'text.primary',
                  border: activeTab === tab.id
                    ? 'none'
                    : `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                  transition: 'all 0.2s ease',
                  height: { xs: '28px', sm: '32px' },
                  '&:hover': {
                    background: activeTab === tab.id
                      ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.06)',
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>

        {/* Main Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
            {/* Left Column - Timeline */}
            <Grid item xs={12} lg={8}>
              <Paper
                elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: { xs: 2, sm: 2.5 },
                  background: paperBg,
                  border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                  backdropFilter: 'blur(8px)',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  mb: { xs: 2, sm: 2.5 },
                }}>
                  <Box
                    sx={{
                      width: { xs: 40, sm: 44 },
                      height: { xs: 40, sm: 44 },
                      borderRadius: { xs: '10px', sm: '12px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      animation: !isMobile ? `${floatAnimation} 3s ease-in-out infinite` : 'none',
                      flexShrink: 0,
                    }}
                  >
                    <WorkHistoryIcon sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' } }}>
                      Career Timeline
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                      {filteredExperiences.length} experiences
                    </Typography>
                  </Box>
                </Box>

                {/* Timeline */}
                <Box sx={{ position: 'relative', pl: { xs: 1.5, sm: 2 } }}>
                  {/* Timeline line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 6, sm: 10, md: 14 },
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background: `linear-gradient(to bottom, 
                        ${alpha(theme.palette.primary.main, 0.15)} 0%, 
                        ${alpha(theme.palette.secondary.main, 0.6)} 50%, 
                        ${alpha(theme.palette.primary.main, 0.15)} 100%)`,
                    }}
                  />

                  <AnimatePresence>
                    {filteredExperiences.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Box sx={{ position: 'relative', mb: { xs: 2, sm: 2.5 } }}>
                          {/* Timeline dot */}
                          <Box
                            sx={{
                              position: 'absolute',
                              left: { xs: -6, sm: -8, md: -10 },
                              top: 0,
                              width: { xs: 14, sm: 18, md: 20 },
                              height: { xs: 14, sm: 18, md: 20 },
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              border: `3px solid ${paperBg}`,
                              zIndex: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                              color: 'white',
                            }}
                          >
                            {exp.icon}
                          </Box>

                          {/* Experience Card */}
                          <motion.div
                            whileHover={{ x: isMobile ? 0 : 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Paper
                              elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                              sx={{
                                p: { xs: 1.5, sm: 2 },
                                borderRadius: { xs: 1.5, sm: 2 },
                                background: cardGradient,
                                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                ml: { xs: 1.5, sm: 2.5 },
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  borderColor: alpha(theme.palette.primary.main, 0.3),
                                  boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                                },
                              }}
                            >
                              {/* Card Header */}
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: { xs: 'column', sm: 'row' },
                                  justifyContent: 'space-between',
                                  alignItems: { xs: 'flex-start', sm: 'flex-start' },
                                  gap: 1,
                                  mb: 1,
                                  cursor: 'pointer',
                                }}
                                onClick={() => handleExpand(exp.id)}
                              >
                                <Box sx={{ flex: 1 }}>
                                  <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: 0.75, 
                                    mb: 0.5,
                                    flexWrap: 'wrap',
                                  }}>
                                    <Typography
                                      variant="subtitle1"
                                      fontWeight={700}
                                      sx={{
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                                        lineHeight: 1.2,
                                      }}
                                    >
                                      {exp.title}
                                    </Typography>
                                    <Chip
                                      label={exp.type === 'work' ? 'Work' : 'Education'}
                                      size="small"
                                      icon={
                                        exp.type === 'work' ?
                                          <WorkHistoryIcon sx={{ fontSize: 10 }} /> :
                                          <SchoolIcon sx={{ fontSize: 10 }} />
                                      }
                                      sx={{
                                        background: alpha(
                                          exp.type === 'work' ?
                                            theme.palette.primary.main :
                                            theme.palette.secondary.main,
                                          0.1
                                        ),
                                        color: exp.type === 'work' ?
                                          theme.palette.primary.main :
                                          theme.palette.secondary.main,
                                        fontWeight: 600,
                                        fontSize: { xs: '0.6rem', sm: '0.65rem' },
                                        height: { xs: '20px', sm: '22px' },
                                      }}
                                    />
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ 
                                      fontWeight: 600, 
                                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                      lineHeight: 1.3,
                                    }}
                                  >
                                    {exp.company}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ 
                                      display: 'block',
                                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                                      mt: 0.25,
                                    }}
                                  >
                                    {exp.location}
                                  </Typography>
                                </Box>
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: 0.5,
                                  alignSelf: { xs: 'flex-end', sm: 'flex-start' },
                                }}>
                                  <Chip
                                    label={exp.period}
                                    size="small"
                                    sx={{
                                      background: alpha(theme.palette.primary.main, 0.1),
                                      color: theme.palette.primary.main,
                                      fontWeight: 600,
                                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                                      height: { xs: '22px', sm: '24px' },
                                    }}
                                  />
                                  <IconButton 
                                    size="small" 
                                    sx={{ 
                                      p: 0.5,
                                      minWidth: 'auto',
                                    }}
                                  >
                                    {expandedItem === exp.id ?
                                      <ExpandLessIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} /> :
                                      <ExpandMoreIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
                                    }
                                  </IconButton>
                                </Box>
                              </Box>

                              {/* Description */}
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  mb: 1.5, 
                                  color: 'text.secondary', 
                                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                  lineHeight: 1.4,
                                }}
                              >
                                {exp.description}
                              </Typography>

                              {/* Technologies - Mobile optimized */}
                              <Box sx={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: 0.5, 
                                mb: expandedItem === exp.id ? 1.5 : 0,
                              }}>
                                {exp.technologies.slice(0, isMobile ? 3 : 5).map((tech) => (
                                  <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                      background: alpha(theme.palette.primary.main, 0.05),
                                      border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                                      color: 'text.primary',
                                      fontWeight: 500,
                                      fontSize: { xs: '0.6rem', sm: '0.65rem' },
                                      height: { xs: '20px', sm: '22px' },
                                    }}
                                  />
                                ))}
                                {exp.technologies.length > (isMobile ? 3 : 5) && (
                                  <Chip
                                    label={`+${exp.technologies.length - (isMobile ? 3 : 5)}`}
                                    size="small"
                                    sx={{
                                      background: alpha(theme.palette.primary.main, 0.1),
                                      color: theme.palette.primary.main,
                                      fontWeight: 600,
                                      fontSize: { xs: '0.6rem', sm: '0.65rem' },
                                      height: { xs: '20px', sm: '22px' },
                                    }}
                                  />
                                )}
                              </Box>

                              {/* Expandable achievements section */}
                              <AnimatePresence>
                                {expandedItem === exp.id && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    <Box sx={{ 
                                      mt: 1.5, 
                                      pt: 1.5, 
                                      borderTop: `1px dashed ${alpha(theme.palette.divider, 0.15)}` 
                                    }}>
                                      <Typography 
                                        variant="subtitle2" 
                                        fontWeight={600} 
                                        gutterBottom 
                                        sx={{ 
                                          fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                          mb: 1,
                                        }}
                                      >
                                        Key Achievements:
                                      </Typography>
                                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                                        {exp.achievements.map((achievement, idx) => (
                                          <Box
                                            key={idx}
                                            sx={{
                                              display: 'flex',
                                              alignItems: 'flex-start',
                                              gap: 0.75,
                                              p: 0.75,
                                              borderRadius: 0.75,
                                              background: alpha(theme.palette.primary.main, 0.02),
                                            }}
                                          >
                                            <CheckCircleIcon
                                              sx={{
                                                fontSize: { xs: 12, sm: 13 },
                                                color: theme.palette.primary.main,
                                                mt: 0.125,
                                                flexShrink: 0,
                                              }}
                                            />
                                            <Typography 
                                              variant="body2" 
                                              sx={{ 
                                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                                lineHeight: 1.4,
                                              }}
                                            >
                                              {achievement}
                                            </Typography>
                                          </Box>
                                        ))}
                                      </Box>
                                    </Box>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </Paper>
                          </motion.div>
                        </Box>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - Certifications & Stats */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2.5 }, height: '100%' }}>
                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: { xs: 2, sm: 2.5 },
                      background: paperBg,
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1.5, 
                      mb: { xs: 1.5, sm: 2 },
                    }}>
                      <Box
                        sx={{
                          width: { xs: 36, sm: 40 },
                          height: { xs: 36, sm: 40 },
                          borderRadius: { xs: '8px', sm: '10px' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.info.main})`,
                          color: 'white',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          flexShrink: 0,
                        }}
                      >
                        📜
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={700} sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                          Certifications
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                          {certifications.length} professional certifications
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.name}
                          initial={{ opacity: 0, x: 15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: { xs: 1, sm: 1.25 },
                              borderRadius: 1.25,
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.02)'
                                : 'rgba(0, 0, 0, 0.015)',
                              border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'translateX(3px)',
                                borderColor: alpha(theme.palette.success.main, 0.3),
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                              <Box sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>{cert.icon}</Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography 
                                  fontWeight={600} 
                                  sx={{ 
                                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {cert.name}
                                </Typography>
                                <Box sx={{ 
                                  display: 'flex', 
                                  justifyContent: 'space-between', 
                                  alignItems: 'center',
                                  mt: 0.25,
                                }}>
                                  <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    sx={{ fontSize: { xs: '0.65rem', sm: '0.7rem' } }}
                                  >
                                    {cert.issuer}
                                  </Typography>
                                  <Typography 
                                    variant="caption" 
                                    color="text.secondary" 
                                    sx={{ fontSize: { xs: '0.6rem', sm: '0.65rem' } }}
                                  >
                                    {cert.date}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Paper>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Paper
                    elevation={isMobile ? 0 : theme.palette.mode === 'dark' ? 1 : 0}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: { xs: 2, sm: 2.5 },
                      background: paperBg,
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight={700} 
                      gutterBottom
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                    >
                      Career Stats
                    </Typography>
                    <Grid container spacing={1}>
                      {[
                        { value: '1+', label: 'Years Experience' },
                        { value: '10+', label: 'Projects Completed' },
                        { value: '5+', label: 'Technologies' },
                        { value: '100%', label: 'Client Satisfaction' },
                      ].map((stat, index) => (
                        <Grid item xs={6} key={stat.label}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <Box sx={{ 
                              textAlign: 'center', 
                              p: { xs: 1, sm: 1.25 },
                              height: '100%',
                            }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: 700,
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  mb: 0.25,
                                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '1.9rem' },
                                  lineHeight: 1,
                                }}
                              >
                                {stat.value}
                              </Typography>
                              <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                sx={{ 
                                  fontSize: { xs: '0.65rem', sm: '0.7rem' },
                                  lineHeight: 1.2,
                                  display: 'block',
                                }}
                              >
                                {stat.label}
                              </Typography>
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;