import { Container, Typography } from '@mui/material';

function About() {
    return ( 
        <Container maxWidth='md' sx={{ mt: 2, mb: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                About Us
            </Typography>
            <Typography variant='body1' paragraph>
                <span style={{fontWeight: 'bold'}}>Welcome to Kvast&apos;s E-handel</span>, a labor of love brought to life by three passionate food enthusiasts: Thomas (also known as &quot;Thompe&quot;), Mona, and Filip (affectionately referred to as &quot;Filledill&quot;).
            </Typography>
            <Typography variant='body1' paragraph>
            Our journey didn&apos;t start in a kitchen, as you might expect, but rather in an academic setting, where a task given by Pär Douhan in the course of System and Operations Development set our paths to cross. The assignment to sketch an information model for Kvast&apos;s e-commerce ignited our initial collaboration. This academic exercise, coupled with a subsequent e-commerce project guided by Mikaela Hedberg, sparked not just our imagination but a shared vision. As we delved into the intricacies of what makes an e-commerce platform both functional and engaging, our discussions transcended beyond the classroom. Inspired by our diverse culinary backgrounds and a newfound understanding of digital commerce, we decided to merge theory with passion. Thus, the idea of Kvast&apos;s E-handel was born – a platform designed to not only showcase an exquisite selection of food from around the world but also to foster a community of food lovers, making quality food more accessible to everyone.
            </Typography>
            <Typography variant='body1' paragraph>
                Thomas, with his knack for technology and an eye for detail, engineered the backbone of our platform, ensuring a seamless and intuitive user experience. His dedication to perfection is evident in every click, making your journey through our site a delightful adventure.
            </Typography>
            <Typography variant='body1' paragraph>
                Mona, our culinary wizard, curates our selection of products with an uncompromising commitment to quality. Her extensive travels and love for exploring new cuisines bring a world of flavors to your doorstep. Mona&apos;s passion is to connect people with food that tells a story, enriching your meals with history, tradition, and love.
            </Typography>
            <Typography variant='body1' paragraph>
                Filip, the creative soul of our trio, breathes life into our brand with his artistic touch. His designs capture the essence of our mission - to celebrate the joy of food. Filip&apos;s whimsical illustrations and thoughtful layouts invite you into our world, making you feel right at home.
            </Typography>
            <Typography variant='body1' paragraph>
                Together, we are Kvast&apos;s E-handel - a place where technology, art, and culinary excellence meet. Our mission is simple: to provide you with an unforgettable shopping experience that brings you closer to the foods you love and the stories behind them.
            </Typography>
            <Typography variant='body1'>
                Join us on this flavorful journey, explore our carefully selected offerings, and let&apos;s make every meal a celebration!
            </Typography>
        </Container>
    );
}

export default About;