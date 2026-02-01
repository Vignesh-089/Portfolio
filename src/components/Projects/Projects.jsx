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
import expenseImg from '../../assets/projects/expensetracker.png';
import cfoImage from '../../assets/projects/cfoimg.webp';
import hrmsImg from '../../assets/projects/hrms.jpg';
import vmsimg from '../../assets/projects/vms.avif';
import tmsimg from '../../assets/projects/tms.webp';
import ebooksImg from '../../assets/projects/ebooksimg.jfif';

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
    title: 'Expense Tracker',
    description:
      'Web application to track daily expenses, manage budgets, and analyze spending patterns.',
    detailedDescription:
      'A full-featured expense tracking application that allows users to add, edit, and categorize expenses. Includes budget management, expense summaries, and visual insights to help users manage personal finances effectively.',
    image: expenseImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Expense add/edit/delete',
      'Category-wise expense tracking',
      'Monthly budget management',
      'Expense summary dashboard',
      'Responsive UI',
    ],
    status: 'Completed',
    year: '2023',
  },

  {
    id: 2,
    title: 'Self CFO',
    description:
      'Personal finance management platform to monitor income, expenses, and savings.',
    detailedDescription:
      'A personal finance management system designed to give users a complete overview of their financial health. Features include income tracking, expense monitoring, savings goals, and financial summaries.',
    image: cfoImage,
    technologies: ['React', 'Material UI', 'Redux'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Income and expense tracking',
      'Savings goal management',
      'Financial overview dashboard',
      'Cloud-based data storage',
      'User-friendly interface',
    ],
    status: 'Live',
    year: '2023',
  },

  {
    id: 3,
    title: 'HRMS',
    description:
      'Human Resource Management System for managing employees, attendance, and payroll.',
    detailedDescription:
      'A web-based HRMS application that helps organizations manage employee data, attendance records, leave requests, and payroll information through a centralized dashboard.',
    image: hrmsImg,
    technologies: ['React', 'Material UI', 'EmailJS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Employee management',
      'Attendance and leave tracking',
      'Payroll management',
      'Role-based access',
      'Admin dashboard',
    ],
    status: 'Live',
    year: '2023',
  },

  {
    id: 4,
    title: 'Vehicle Management System',
    description:
      'System to manage vehicle details, maintenance schedules, and usage tracking.',
    detailedDescription:
      'A vehicle management platform designed to track vehicle information, maintenance history, fuel usage, and service schedules to improve operational efficiency.',
    image: vmsimg,
    technologies: ['React', 'Material UI'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Vehicle registration and tracking',
      'Maintenance scheduling',
      'Fuel usage monitoring',
      'Service history management',
      'Reports and analytics',
    ],
    status: 'Live',
    year: '2024',
  },

  {
    id: 5,
    title: 'Transport Management System',
    description:
      'Logistics and transport management platform for tracking shipments and deliveries.',
    detailedDescription:
      'A transport management system that enables tracking of vehicles, routes, drivers, and delivery status. Designed to streamline logistics operations and improve visibility.',
    image: tmsimg,
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Vehicle and driver management',
      'Route planning',
      'Delivery tracking',
      'Status updates',
      'Operational reports',
    ],
    status: 'In Development',
    year: '2023',
  },

  {
    id: 6,
    title: 'EBooks',
    description:
      'Online platform to browse, read, and manage digital books.',
    detailedDescription:
      'An eBook management platform that allows users to browse, read, and manage digital books. Includes features such as book categorization, search functionality, and reading progress tracking.',
    image: ebooksImg,
    technologies: ['React', 'Material UI'],
    github: 'https://github.com',
    live: 'https://demo.com',
    features: [
      'Browse and search books',
      'Category-based filtering',
      'Reading progress tracking',
      'User-friendly interface',
      'Responsive design',
    ],
    status: 'Live',
    year: '2023',
  },
];


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Projects() {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const paperBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)';

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
        py: { xs: 3, md: 6 },
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
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
          top: '10%',
          right: '-100px',
          animation: `${floatAnimation} 20s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          bottom: '10%',
          left: '-75px',
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
              mb: 0.5,
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            My Projects
          </Typography>

          <Box
            sx={{
              width: '60px',
              height: '2px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: '8px auto 12px',
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
            mb: 4,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.8rem', md: '0.9rem' },
          }}
        >
          Here are some of my recent projects that showcase my skills and expertise
        </Typography>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
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
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                        '& .project-image': {
                          transform: 'scale(1.03)',
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
                        top: 8,
                        right: 8,
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
                          fontSize: '0.65rem',
                          height: 20,
                        }}
                      />
                    </Box>

                    {/* Year Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={project.year}
                        size="small"
                        sx={{
                          background: alpha(theme.palette.secondary.main, 0.1),
                          color: theme.palette.secondary.main,
                          fontWeight: 600,
                          fontSize: '0.65rem',
                          height: 20,
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      />
                    </Box>

                    {/* Image Container */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.image}
                        className="project-image"
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
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
                          padding: 1.5,
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
                            fontSize: '0.75rem',
                            py: 0.5,
                            px: 2,
                            minWidth: 'auto',
                            '&:hover': {
                              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1,
                          fontSize: '0.95rem',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          fontSize: '0.8rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                              fontSize: '0.65rem',
                              height: 20,
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
                              fontSize: '0.65rem',
                              height: 20,
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>

                    <CardActions sx={{
                      justifyContent: 'space-between',
                      p: 2,
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
                              transform: 'scale(1.05)',
                            },
                            transition: 'all 0.2s ease',
                            padding: 0.5,
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
                              transform: 'scale(1.05)',
                            },
                            transition: 'all 0.2s ease',
                            padding: 0.5,
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
                          fontSize: '0.8rem',
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="medium"
              href="https://github.com"
              target="_blank"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 1.5,
                borderColor: alpha(theme.palette.primary.main, 0.3),
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: '0.85rem',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  background: alpha(theme.palette.primary.main, 0.1),
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
              endIcon={<GitHubIcon fontSize="small" />}
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
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            background: paperBg,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            maxWidth: '90%',
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
                height="200"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  color: 'text.primary',
                  padding: 0.75,
                  '&:hover': {
                    background: alpha(theme.palette.background.paper, 0.9),
                  },
                  '& svg': {
                    fontSize: '1rem',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Navigation Arrows */}
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: 12,
                right: 12,
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
                    padding: 0.75,
                    '&:hover': {
                      background: alpha(theme.palette.background.paper, 0.9),
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s ease',
                    '& svg': {
                      fontSize: '1rem',
                    }
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
                    padding: 0.75,
                    '&:hover': {
                      background: alpha(theme.palette.background.paper, 0.9),
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s ease',
                    '& svg': {
                      fontSize: '1rem',
                    }
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </DialogTitle>

            <DialogContent sx={{ p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, mt: 1 }}>
                  <Typography variant="h5" fontWeight={600}>
                    {selectedProject.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Chip
                      label={selectedProject.year}
                      size="small"
                      sx={{
                        background: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        height: 24,
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
                        fontSize: '0.75rem',
                        height: 24,
                      }}
                    />
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem' }}>
                  {selectedProject.detailedDescription}
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ fontSize: '0.9rem' }}>
                    <DesignServicesIcon sx={{ mr: 0.5, verticalAlign: 'middle', fontSize: '0.9rem' }} />
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 1.5, mb: 0 }}>
                    {selectedProject.features.map((feature, index) => (
                      <Box component="li" key={index} sx={{ mb: 0.5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ fontSize: '0.9rem' }}>
                    <CodeIcon sx={{ mr: 0.5, verticalAlign: 'middle', fontSize: '0.9rem' }} />
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{
              p: 2,
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              justifyContent: 'space-between',
            }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href={selectedProject.github}
                  target="_blank"
                  size="small"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    padding: 0.5,
                    '&:hover': {
                      background: theme.palette.primary.main,
                      color: 'white',
                    },
                    '& svg': {
                      fontSize: '0.9rem',
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={selectedProject.live}
                  target="_blank"
                  size="small"
                  sx={{
                    background: alpha(theme.palette.secondary.main, 0.1),
                    color: theme.palette.secondary.main,
                    padding: 0.5,
                    '&:hover': {
                      background: theme.palette.secondary.main,
                      color: 'white',
                    },
                    '& svg': {
                      fontSize: '0.9rem',
                    }
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              </Box>
              <Button onClick={handleClose} sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
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