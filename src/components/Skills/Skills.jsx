import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  LinearProgress,
  Paper,
  Chip,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.5); }
`;

const fillAnimation = keyframes`
  from { width: 0%; }
  to { width: var(--target-width); }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
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

// Custom styled progress bar with percentage on the bar
const ProgressBarWithLabel = ({ value, color }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${value}%`,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            position: 'relative',
            transition: 'width 1s ease-in-out',
            animation: `${fillAnimation} 1.2s ease-out forwards`,
            '--target-width': `${value}%`,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              animation: 'shimmer 2s infinite',
            },
          }}
        >
          {/* Percentage text on the progress bar */}
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              right: 6,
              top: '50%',
              transform: 'translateY(-50%)',
              fontWeight: 600,
              fontSize: '0.6rem',
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              textShadow: theme.palette.mode === 'dark'
                ? '0 1px 2px rgba(0,0,0,0.5)'
                : '0 1px 2px rgba(255,255,255,0.5)',
              opacity: value > 15 ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            {value}%
          </Typography>
        </Box>
      </Box>

      {/* Fallback percentage for small values */}
      {value <= 15 && (
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            fontWeight: 600,
            fontSize: '0.65rem',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.05)',
            px: 0.75,
            py: 0.2,
            borderRadius: 0.8,
          }}
        >
          {value}%
        </Typography>
      )}
    </Box>
  );
};

const SkillItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  position: 'relative',
  '&:hover': {
    '& .skill-dot': {
      transform: 'scale(1.4)',
      boxShadow: `0 0 15px ${theme.palette.primary.main}40`,
    },
  },
}));

const skillCategories = [
  {
    title: 'Frontend',
    subtitle: 'DEVELOPMENT',
    icon: <PsychologyAltIcon />,
    skills: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { name: 'HTML/CSS', level: 95, color: '#E34F26' },
      { name: 'Material-UI', level: 90, color: '#007FFF' },
    ],
  },
  {
    title: 'Backend/Database',
    subtitle: 'DEVELOPMENT',
    icon: <TerminalIcon />,
    skills: [
      { name: 'Node.js', level: 70, color: '#339933' },
      { name: 'Express.js', level: 70, color: '#000000' },
      { name: 'REST APIs', level: 75, color: '#FF6B6B' },
      { name: 'My SQL', level: 80, color: '#3776AB' },
    ],
  },
];

function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const paperBg = theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)';

  const otherTechs = [
    'Redux', 'Nginx', 'Tailwind CSS', 'Figma', 'EmailJS', 'Git & GitHub', 'JWT'
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 5, md: 8 }, // Reduced from 6,10 to 5,8
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(ellipse at top, rgba(30, 41, 59, 0.3), transparent), radial-gradient(ellipse at bottom, rgba(99, 102, 241, 0.1), transparent)'
          : 'radial-gradient(ellipse at top, rgba(248, 250, 252, 0.8), transparent), radial-gradient(ellipse at bottom, rgba(99, 102, 241, 0.05), transparent)',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '250px', // Reduced from 300px
          height: '250px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          top: '10%',
          left: '-125px', // Adjusted
          animation: `${floatAnimation} 20s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '180px', // Reduced from 200px
          height: '180px',
          borderRadius: '50%',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
          bottom: '10%',
          right: '-90px', // Adjusted
          animation: `${floatAnimation} 15s ease-in-out infinite reverse`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              fontWeight: 700, // Reduced from 800
              background: `linear-gradient(45deg, 
                ${theme.palette.primary.main}, 
                ${theme.palette.secondary.main})`,
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s ease infinite`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '2rem', md: '2.4rem' }, // Reduced from 2.5rem,3rem
            }}
          >
            Skills & Expertise
          </Typography>

          <Box
            sx={{
              width: '70px', // Reduced from 80px
              height: '3px', // Reduced from 4px
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
        </motion.div>

        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 5, // Reduced from 6
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            fontSize: { xs: '0.9rem', md: '0.95rem' }, // Reduced from 0.95rem,1rem
          }}
        >
          Technologies I've mastered through hands-on experience and continuous learning
        </Typography>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={2.5}> {/* Reduced from 3 */}
            {skillCategories.map((category, catIndex) => (
              <Grid item xs={12} md={6} key={category.title}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -4 }} // Reduced from 5
                  transition={{ delay: catIndex * 0.08 }}
                >
                  <Paper
                    elevation={theme.palette.mode === 'dark' ? 2 : 0}
                    sx={{
                      p: { xs: 2.5, md: 3.5 }, // Reduced from 3,4
                      height: '100%',
                      borderRadius: 3, // Reduced from 4
                      background: paperBg,
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 15px 30px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}> {/* Reduced from 3 */}
                      <Box
                        sx={{
                          width: 50, // Reduced from 56
                          height: 50,
                          borderRadius: '14px', // Reduced from 16px
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          mr: 1.5, // Reduced from 2
                          animation: `${glowAnimation} 3s ease-in-out infinite`,
                        }}
                      >
                        {React.cloneElement(category.icon, {
                          sx: { fontSize: 24, color: 'white' } // Reduced from 28
                        })}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600, // Reduced from 700
                            color: 'text.primary',
                            lineHeight: 1.2,
                            fontSize: '1.1rem', // Added explicit size
                          }}
                        >
                          {category.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.primary.main,
                            textTransform: 'uppercase',
                            letterSpacing: 1.5, // Reduced from 2
                            fontWeight: 600,
                            fontSize: '0.65rem', // Reduced from 0.7rem
                          }}
                        >
                          {category.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.08 + index * 0.04 }}
                      >
                        <SkillItem
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 0.75, // Reduced from 1
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}> {/* Reduced from 1.5 */}
                              <Box
                                className="skill-dot"
                                sx={{
                                  width: 10, // Reduced from 12
                                  height: 10,
                                  borderRadius: '50%',
                                  background: skill.color,
                                  transition: 'all 0.3s ease',
                                }}
                              />
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: hoveredSkill === skill.name
                                    ? theme.palette.primary.main
                                    : 'text.primary',
                                  transition: 'color 0.3s ease',
                                  fontSize: '0.9rem', // Reduced from 1rem
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                          </Box>
                          <Tooltip
                            title={`${skill.level}% proficiency`}
                            arrow
                            placement="top"
                          >
                            <Box sx={{ mt: 1 }}> {/* Reduced from 1.5 */}
                              <ProgressBarWithLabel
                                value={skill.level}
                                color={skill.color}
                              />
                            </Box>
                          </Tooltip>
                        </SkillItem>
                      </motion.div>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Other Technologies Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ mt: 6 }}> {/* Reduced from 8 */}
            <Typography
              variant="h5" // Changed from h4 to h5
              align="center"
              gutterBottom
              sx={{
                fontWeight: 600, // Reduced from 700
                mb: 1,
                color: 'text.primary',
                fontSize: '1.3rem', // Added explicit size
              }}
            >
              Additional Technologies
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                mb: 3, // Reduced from 4
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '0.9rem', // Added explicit size
              }}
            >
              Other tools and technologies I'm proficient with
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 1.2, // Reduced from 1.5
                  mt: 2.5, // Reduced from 3
                }}
              >
                {otherTechs.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.08, y: -2 }} // Reduced from 1.1, -3
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip
                      label={tech}
                      variant="outlined"
                      icon={
                        <ArrowForwardIcon
                          sx={{
                            fontSize: 12, // Reduced from 14
                            transition: 'transform 0.3s ease',
                            '.MuiChip-root:hover &': {
                              transform: 'translateX(2px)', // Reduced from 3px
                            },
                          }}
                        />
                      }
                      sx={{
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.15)'
                          : 'rgba(0, 0, 0, 0.08)',
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(0, 0, 0, 0.02)',
                        color: 'text.primary',
                        fontWeight: 500,
                        height: 32, // Reduced from 36
                        fontSize: '0.8rem', // Reduced from 0.875rem
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                          borderColor: theme.palette.primary.main,
                          transform: 'translateY(-1.5px)', // Reduced from 2px
                          boxShadow: `0 4px 12px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
                        },
                        '& .MuiChip-icon': {
                          ml: 0.3,
                          mr: -0.5,
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Skill Level Legend */}
            <Box
              sx={{
                mt: 5, // Reduced from 6
                p: 2.5, // Reduced from 3
                borderRadius: 2.5, // Reduced from 3
                background: paperBg,
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                maxWidth: '450px', // Reduced from 500px
                mx: 'auto',
              }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{ 
                  mb: 1.5, // Reduced from 2
                  fontWeight: 600,
                  fontSize: '0.95rem', // Added explicit size
                }}
              >
                Skill Proficiency Levels
              </Typography>
              <Grid container spacing={1.5} justifyContent="center"> {/* Reduced from 2 */}
                {[
                  { level: '90-100%', label: 'Expert', color: theme.palette.success.main },
                  { level: '75-89%', label: 'Advanced', color: theme.palette.info.main },
                  { level: '60-74%', label: 'Intermediate', color: theme.palette.warning.main },
                  { level: 'Below 60%', label: 'Learning', color: theme.palette.grey[500] },
                ].map((item) => (
                  <Grid item key={item.label}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}> {/* Reduced from 1 */}
                      <Box
                        sx={{
                          width: 10, // Reduced from 12
                          height: 10,
                          borderRadius: '50%',
                          background: item.color,
                        }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        <Box component="span" sx={{ fontWeight: 600 }}>
                          {item.level}:
                        </Box>{' '}
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Box>
  );
}

export default Skills;