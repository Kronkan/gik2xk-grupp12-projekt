import { Container, Typography } from '@mui/material';

function PrivacyPolicy() {
    return (
        <Container maxWidth='md' sx={{ mt: 2, mb: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant='body1' paragraph>
                At Kvasts E-handel, we are committed to protecting your privacy and ensuring that your personal information is handled in a responsible manner. This Privacy Policy outlines the types of personal information we collect when you use our website, how we use and protect that information, and your rights regarding your personal data.
            </Typography>

            <Typography variant='h5' gutterBottom>
                Information We Collect
            </Typography>
            <Typography variant='body1' component='div'>
                When you visit our website, we may collect certain information about you, including:
                <ul>
                    <li>Personal information such as your name, email address, shipping address, and phone number when you create an account or place an order.</li>
                    <li>Payment information, such as credit card details, when you make a purchase.</li>
                    <li>Information about your browsing behavior on our website, such as pages visited and products viewed.</li>
                    <li>Information provided voluntarily, such as feedback or survey responses.</li>
                </ul>
            </Typography>

            <Typography variant='h5' gutterBottom>
                How We Use Your Information
            </Typography>
            <Typography variant='body1' component='div'>
                We use the information we collect for the following purposes:
                <ul>
                    <li>To process and fulfill your orders.</li>
                    <li>To communicate with you about your orders, account, and promotions.</li>
                    <li>To improve our products and services, including website functionality and user experience.</li>
                    <li>To personalize your experience on our website and recommend products that may be of interest to you.</li>
                    <li>To prevent fraud and ensure the security of our website and users.</li>
                    <li>To comply with legal requirements and enforce our policies.</li>
                </ul>
            </Typography>

            <Typography variant='h5' gutterBottom>
                Data Security
            </Typography>
            <Typography variant='body1' paragraph>
                We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, firewalls, and regular security assessments.
            </Typography>

            <Typography variant='h5' gutterBottom>
                Data Sharing
            </Typography>
            <Typography variant='body1' paragraph>
                We may share your personal information with third parties who provide services on our behalf, such as payment processors and shipping companies, but only to the extent necessary to fulfill your orders and provide you with the best possible service. We do not sell or rent your personal information to third parties for their marketing purposes.
            </Typography>

            <Typography variant='h5' gutterBottom>
                Your Rights
            </Typography>
            <Typography variant='body1' paragraph>
                You have the right to access, update, and delete your personal information at any time. You can also opt-out of receiving marketing communications from us by updating your preferences in your account settings or contacting us directly.
            </Typography>

            <Typography variant='h5' gutterBottom>
                Changes to this Policy
            </Typography>
            <Typography variant='body1' paragraph>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by email or by posting a notice on our website.
            </Typography>

            <Typography variant='body1' paragraph>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@kvastsehandel.com.
            </Typography>
        </Container>
    );
}

export default PrivacyPolicy;