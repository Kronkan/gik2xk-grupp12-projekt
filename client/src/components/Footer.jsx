import { Box, Grid, Link, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const socialMediaLinks = [
      { icon: FacebookIcon, tooltip: 'Facebook', url: 'https://www.facebook.com' },
      { icon: InstagramIcon, tooltip: 'Instagram', url: 'https://www.instagram.com' },
      { icon: XIcon, tooltip: 'Twitter / X', url: 'https://www.twitter.com' },
      { icon: GitHubIcon, tooltip: 'The GitHub repo for this website', url: 'https://github.com/Kronkan/gik2xk-grupp12-projekt.git' },
      { icon: YouTubeIcon, tooltip: 'The YouTube presentation for this projekt', url: 'https://www.youtube.com' },
      { icon: LinkedInIcon, tooltip: 'LinkedIn', url: 'https://www.linkedin.com' }
    ];

    const infoLinks = [
      { text: 'About Us', to: '/about', tooltip: 'Learn more about us'},
      { text: 'Privacy Policy', to: '/privacy', tooltip: 'Read our privacy policy'},
      { text: 'Contact Us', to: '/contact', tooltip: 'Get in touch with us'}
    ];

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
        backgroundColor:'#c2b280',
        color: 'White'
      }}>
        <Grid container justifyContent='center' spacing={2} sx={{ marginTop: 1 }}>
          {infoLinks.map((link, index) => (
            <Grid item key={index}>
              <Tooltip title={link.tooltip}>
                <Typography variant='caption'>
                  <RouterLink to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {link.text}
                  </RouterLink>
                </Typography>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
        {/* <Grid container justifyContent='center' spacing={2} sx={{ marginTop: 1 }}>
          <Grid item>
            <Typography variant='caption'>About Us</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Privacy Policy</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Contact Us</Typography>
          </Grid>
        </Grid> */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', mt: 1 }}>
            {socialMediaLinks.map(({ icon: Icon, tooltip, url }, index) => (
              <Tooltip key={index} title={tooltip}>
                <Link href={url} target="_blank" rel="noopener noreferrer" sx={{ p: 1, width: matchesSM ? '33.33%' : 'auto' }}>
                {/* <Box key={index} sx={{ p: 1, width: matchesSM ? '33.33%' : 'auto' }}> */}
                    <Icon sx={{ color: 'white' }} />
                {/* </Box> */}
                </Link>
              </Tooltip>
            ))}
        </Box>
        <Typography variant='caption' display='block' gutterBottom sx={{ mt: 2 }}>
            © {new Date().getFullYear()} by Team MonaFilipThomas
        </Typography>
    </Box>
    );
}

export default Footer;

