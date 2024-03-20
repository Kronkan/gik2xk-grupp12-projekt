import { Box, Container, Link, Typography } from '@mui/material';

function Contact() {
    return ( 
        <Container maxWidth='md' sx={{ mt: 2, mb: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                Contact Us
            </Typography>
            <Typography variant='body1' paragraph>
                We&apos;re always excited to hear from our community and customers. Whether you have a question about our products, feedback on our platform, or just want to share your culinary adventures, we&apos;re here to listen and help.
            </Typography>
            <Typography variant='body1' paragraph>
                Below you&apos;ll find the best ways to contact each of us at Kvast&apos;s E-handel. Whether it&apos;s insights on our selection, inquiries about an order, or partnership opportunities, don&apos;t hesitate to reach out.
            </Typography>

            <Box sx={{ my: 2 }}>
                <Typography variant='h6'>Thomas (Thompe) Stabforsmo Norell</Typography>
                <Typography variant='body1'>
                    For tech support and website inquiries, reach Thompe at <Link href='mailto:h22thsta@du.se' underline='hover'>h22thsta@du.se</Link>.
                </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
                <Typography variant='h6'>Mona Tlili</Typography>
                <Typography variant='body1'>
                    Culinary wizard Mona is here for product curation and culinary questions: <Link href='mailto:h22motli@du.se' underline='hover'>h22motli@du.se</Link>.
                </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
                <Typography variant='h6'>Filip Lindgren Dewari</Typography>
                <Typography variant='body1'>
                    For branding inquiries and creative collaborations, contact Filledill at <Link href='mailto:h22fili@du.se' underline='hover'>h22fili@du.se</Link>.
                </Typography>
            </Box>

            <Typography variant='body1' paragraph>
                Our journey began from a shared vision during our academic adventures and has grown into Kvast&apos;s E-handel, a platform where food meets art and technology. Each of us brings a unique set of skills and passions to the table, united by our love for good food and the stories it tells. We&apos;re here to ensure your experience with us is nothing short of exceptional.
            </Typography>
            <Typography variant='body1'>
                We look forward to hearing from you and joining you on your culinary journey!
            </Typography>
        </Container>
    );
}

export default Contact;