import express from 'express';
import { Project, projectsData } from '../models/project.js';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'Sitcod3 Lab API',
    version: '1.0.0'
  });
});

// Get all projects
router.get('/projects', (req, res) => {
  try {
    res.json({
      success: true,
      count: projectsData.length,
      data: projectsData
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch projects' 
    });
  }
});

// Get single project by ID
router.get('/projects/:id', (req, res) => {
  try {
    const project = projectsData.find(p => p.id === req.params.id);
    
    if (!project) {
      return res.status(404).json({ 
        success: false, 
        error: 'Project not found' 
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch project' 
    });
  }
});

// Contact form submission
router.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      });
    }
    
    // In production, send email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Message received successfully. We will get back to you soon.' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process contact form' 
    });
  }
});

export default router;
