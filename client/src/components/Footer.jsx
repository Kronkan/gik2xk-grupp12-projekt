import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0, 
        pb: 2,
       // backgroundColor: '#0060df',
       backgroundColor:'#c2b280',
       color: 'white',
      }}>
        {/* Info text */}
        <Grid container justifyContent='center' spacing={2} sx={{ marginTop: 1 }}>
          <Grid item>
            <Typography variant='caption'>About Us</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Privacy Policy</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Contact Us</Typography>
          </Grid>
        </Grid>

        {/* Social icons */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', mt: 1 }}>
            {[FacebookIcon, InstagramIcon, XIcon, GitHubIcon, YouTubeIcon, LinkedInIcon].map((Icon, index) => (
                <Box key={index} sx={{ p: 1, width: matchesSM ? '33.33%' : 'auto' }}>
                    <Icon sx={{ color: 'white' }} />
                </Box>
            ))}
        </Box>

        {/* Copyright text */}
        <Typography variant='caption' display='block' gutterBottom sx={{ mt: 2 }}>
            © {new Date().getFullYear()} by Team MonaFilipThomas
        </Typography>
    </Box>
    );
}

export default Footer;