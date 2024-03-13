import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography, Grid } from '@mui/material';

function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        width: '100%', 
        position: 'relative', 
        bottom: 0,
        left: 0,
        right: 0, 
        pb: 2,
        backgroundColor: '#0060df',
        color: 'white',
      }}>
        <Grid container justifyContent='center' spacing={2} sx={{marginTop: 1}}>
          <Grid item>
            <Typography variant='caption'>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      <BottomNavigation sx={{ width: 500, backgroundColor: 'transparent', color: 'white' }} value={value} onChange={handleChange}>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item xs={2}>
            <BottomNavigationAction

              label="Facebook"
              value="facebook"
              icon={<FacebookIcon sx={{color: 'white'}} />}
            />
          </Grid>
          <Grid item xs={2}>
            <BottomNavigationAction
              label="Instagram"
              value="instagram"
              icon={<InstagramIcon sx={{color: 'white'}} />}
            />
          </Grid>
          <Grid item xs={2}>
            <BottomNavigationAction
              label="X"
              value="X"
              icon={<XIcon sx={{color: 'white'}} />}
            />
          </Grid>
          <Grid item xs={2}>
            <BottomNavigationAction
              label="Github"
              value="github"
              icon={<GitHubIcon sx={{color: 'white'}} />}
            />
          </Grid>
          <Grid item xs={2}>
            <BottomNavigationAction
              label="Youtube"
              value="youtube"
              icon={<YouTubeIcon sx={{color: 'white'}} />}
            />
          </Grid>
          <Grid item xs={2}>
            <BottomNavigationAction 
              label="LinkedIn" 
              value="linkedin" 
              icon={<LinkedInIcon sx={{color: 'white'}} />} 
            />
          </Grid>
        </Grid>
      </BottomNavigation>
      <Typography variant='caption' display='block' gutterBottom>
        © {new Date().getFullYear()} by Team MonaFilipThomas
      </Typography>
    </Box>
  );
}

export default Footer;