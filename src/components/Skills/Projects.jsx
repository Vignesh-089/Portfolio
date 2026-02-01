import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  IconButton,
  useTheme,
  alpha,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Slide,
} from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

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

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    detailedDescription: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, checkout process, payment integration, order management, and admin dashboard for inventory and sales tracking.',
    image: 'https://source.unsplash.com/random/1200x800/?ecommerce,shopping,technology',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'JWT', 'AWS S3'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'User authentication & authorization',
      'Admin dashboard for analytics',
      'Product search and filtering',
      'Order tracking system'
    ],
    category: 'Full Stack',
    status: 'Completed',
    year: '2023'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-drop interface, real-time updates, and team collaboration features.',
    detailedDescription: 'A real-time collaborative task management application that enables teams to organize, track, and manage their work efficiently. Features include drag-and-drop interface, real-time updates, team collaboration, file attachments, and progress tracking.',
    image: 'https://source.unsplash.com/random/1200x800/?task,management,productivity',
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io', 'TypeScript', 'React DnD'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Drag-and-drop task management',
      'Real-time collaboration',
      'Team member assignment',
      'Progress tracking & analytics',
      'File attachments',
      'Notifications system'
    ],
    category: 'Frontend',
    status: 'Live',
    year: '2023'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with interactive maps, forecasts, and location-based alerts.',
    detailedDescription: 'An advanced weather dashboard providing real-time weather data, 7-day forecasts, interactive maps, and location-based alerts. The application uses multiple weather APIs to provide accurate and comprehensive weather information.',
    image: 'https://source.unsplash.com/random/1200x800/?weather,dashboard,map',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Leaflet', 'Axios'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Real-time weather updates',
      '7-day weather forecast',
      'Interactive weather maps',
      'Location-based alerts',
      'Multiple measurement units',
      'Favorite locations'
    ],
    category: 'Frontend',
    status: 'Live',
    year: '2023'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media platforms with data visualization and insights generation.',
    detailedDescription: 'A comprehensive social media analytics platform that aggregates data from multiple platforms, provides insights, and generates detailed reports. Features include real-time analytics, sentiment analysis, competitor tracking, and customizable dashboards.',
    image: 'https://source.unsplash.com/random/1200x800/?analytics,dashboard,data',
    technologies: ['Next.js', 'Python', 'D3.js', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Multi-platform social media analytics',
      'Real-time data visualization',
      'Sentiment analysis',
      'Competitor tracking',
      'Customizable dashboards',
      'Automated report generation'
    ],
    category: 'Full Stack',
    status: 'In Development',
    year: '2024'
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform with natural language processing and content optimization.',
    detailedDescription: 'An advanced AI content generation platform that uses natural language processing to create, optimize, and personalize content. The platform supports multiple content types including articles, social media posts, and marketing copy.',
    image: 'https://source.unsplash.com/random/1200x800/?ai,machine-learning,content',
    technologies: ['React', 'Python', 'OpenAI API', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'Redis'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'AI-powered content generation',
      'Content optimization suggestions',
      'Multiple content types',
      'Plagiarism detection',
      'SEO optimization',
      'Content analytics'
    ],
    category: 'AI/ML',
    status: 'Completed',
    year: '2023'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.',
    detailedDescription: 'A complete fitness solution that helps users track workouts, monitor nutrition, set goals, and analyze progress. The app includes personalized workout plans, nutrition tracking, progress photos, and community features.',
    image: 'https://source.unsplash.com/random/1200x800/?fitness,workout,health',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'GraphQL', 'Firebase', 'Expo'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Personalized workout plans',
      'Nutrition tracking',
      'Progress analytics',
      'Workout video library',
      'Community features',
      'Goal setting & tracking'
    ],
    category: 'Mobile',
    status: 'Live',
    year: '2023'
  },
];

const categories = ['All', 'Frontend', 'Full Stack', 'Mobile', 'AI/ML'];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Projects() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const paperBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)';

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    const index = projects.findIndex(p => p.id === project.id);
    setCurrentProjectIndex(index);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setCurrentProjectIndex(nextIndex);
  };

  const handlePreviousProject = () => {
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    setCurrentProjectIndex(prevIndex);
  };

  return (
    <Box 
      id="projects" 
      sx={{ 
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(ellipse at 50% 20%, rgba(99, 102, 241, 0.1), transparent), radial-gradient(ellipse at 20% 80%, rgba(236, 72, 153, 0.1), transparent)'
          : 'radial-gradient(ellipse at 50% 20%, rgba(99, 102, 241, 0.05), transparent), radial-gradient(ellipse at 20% 80%, rgba(236, 72, 153, 0.05), transparent)',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
          top: '15%',
          right: '-125px',
          animation: `${floatAnimation} 20s ease-in-out infinite`,
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          bottom: '15%',
          left: '-100px',
          animation: `${floatAnimation} 15s ease-in-out infinite reverse`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              mb: 1.5,
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '2.5rem', md: '3rem' },
            }}
          >
            My Projects
          </Typography>
          
          <Box
            sx={{
              width: '80px',
              height: '4px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: '16px auto 24px',
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
                animation: `${shimmer} 2s infinite`,
              },
            }}
          />
        </motion.div>

        <Typography
          variant="body1"
          align="center"
          sx={{ 
            mb: 6, 
            color: 'text.secondary', 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: { xs: '0.95rem', md: '1rem' },
          }}
        >
          Here are some of my recent projects that showcase my skills and expertise
        </Typography>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1, 
            mb: 6,
            flexWrap: 'wrap',
          }}>
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Chip
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: selectedCategory === category
                      ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.05)',
                    color: selectedCategory === category ? 'white' : 'text.primary',
                    border: selectedCategory === category
                      ? 'none'
                      : `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: selectedCategory === category
                        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                        : theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.08)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: paperBg,
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .project-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Project Status Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          background: project.status === 'Live' 
                            ? theme.palette.success.main 
                            : project.status === 'Completed'
                            ? theme.palette.primary.main
                            : theme.palette.warning.main,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          height: 24,
                        }}
                      />
                    </Box>

                    {/* Project Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          background: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          height: 24,
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      />
                    </Box>

                    {/* Image Container */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                        }}
                      />
                      {/* Overlay */}
                      <Box
                        className="project-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to top, ${alpha(theme.palette.background.paper, 0.9)} 0%, transparent 100%)`,
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          padding: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleProjectClick(project)}
                          sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            color: 'white',
                            fontWeight: 600,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          mb: 3,
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: alpha(theme.palette.primary.main, 0.05),
                              color: 'text.primary',
                              border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              height: 24,
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4}`}
                            size="small"
                            sx={{
                              background: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 24,
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>

                    <CardActions sx={{ 
                      justifyContent: 'space-between', 
                      p: 2.5, 
                      pt: 0,
                      borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    }}>
                      <Box>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          aria-label="github"
                          size="small"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          href={project.live}
                          target="_blank"
                          aria-label="live demo"
                          size="small"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Button
                        size="small"
                        onClick={() => handleProjectClick(project)}
                        endIcon={<LaunchIcon />}
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            background: alpha(theme.palette.primary.main, 0.1),
                          },
                        }}
                      >
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              href="https://github.com"
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                borderColor: alpha(theme.palette.primary.main, 0.3),
                color: theme.palette.primary.main,
                fontWeight: 600,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  background: alpha(theme.palette.primary.main, 0.1),
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
              endIcon={<GitHubIcon />}
            >
              View All Projects on GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: paperBg,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ 
              p: 0,
              position: 'relative',
            }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  color: 'text.primary',
                  '&:hover': {
                    background: alpha(theme.palette.background.paper, 0.9),
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
              
              {/* Navigation Arrows */}
              <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: 16, 
                right: 16,
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <IconButton
                  onClick={handlePreviousProject}
                  sx={{
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    color: 'text.primary',
                    '&:hover': {
                      background: alpha(theme.palette.background.paper, 0.9),
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextProject}
                  sx={{
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    color: 'text.primary',
                    '&:hover': {
                      background: alpha(theme.palette.background.paper, 0.9),
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            
            <DialogContent sx={{ p: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h4" fontWeight={700}>
                    {selectedProject.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip
                      label={selectedProject.category}
                      size="small"
                      sx={{
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={selectedProject.status}
                      size="small"
                      sx={{
                        background: selectedProject.status === 'Live' 
                          ? theme.palette.success.main 
                          : selectedProject.status === 'Completed'
                          ? theme.palette.primary.main
                          : theme.palette.warning.main,
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Box>
                
                <Typography variant="body1" color="text.secondary" paragraph>
                  {selectedProject.detailedDescription}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    <DesignServicesIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {selectedProject.features.map((feature, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          background: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            
            <DialogActions sx={{ 
              p: 3, 
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              justifyContent: 'space-between',
            }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href={selectedProject.github}
                  target="_blank"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    '&:hover': {
                      background: theme.palette.primary.main,
                      color: 'white',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={selectedProject.live}
                  target="_blank"
                  sx={{
                    background: alpha(theme.palette.secondary.main, 0.1),
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      background: theme.palette.secondary.main,
                      color: 'white',
                    },
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              </Box>
              <Button onClick={handleClose} sx={{ fontWeight: 600 }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default Projects;