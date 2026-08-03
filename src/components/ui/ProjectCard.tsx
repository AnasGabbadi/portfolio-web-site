'use client';

import { Box, Typography, Button, Stack, Card } from '@mui/material';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        '&:hover .project-overlay': {
          opacity: 1,
        },
      }}
    >
      {/* Image Placeholder */}
      <Box
        sx={{
          height: 256,
          bgcolor: 'grey.200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
        }}
      >
        <i 
          className="fas fa-image" 
          style={{ fontSize: '4rem', color: '#9CA3AF', opacity: 0.5 }}
        />
      </Box>

      {/* Overlay */}
      <Box
        className="project-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(16, 185, 129, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          p: 3,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h6" 
            color="white" 
            fontWeight={700} 
            gutterBottom
          >
            {project.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="white" 
            sx={{ mb: 3, opacity: 0.95 }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            {project.detailsUrl && (
              <Button
                variant="contained"
                size="small"
                href={project.detailsUrl}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                View Details
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="outlined"
                size="small"
                href={project.demoUrl}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Live Demo
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;