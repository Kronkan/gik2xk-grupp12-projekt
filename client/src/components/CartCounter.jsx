import { Box, Typography } from '@mui/material';

function CartCounter( { count }) {
    return ( 
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                bgcolor: '#4caf50',
                color: 'white',
                width: 20,
                height: 20,
                position: 'absolute',
                left: -6,
                top: 0,
                fontSize: 12
            }}borderRadius={'50%'} bgcolor={'green'}>
            <Typography variant='caption'>{count}</Typography> 
        </Box>
     );
}

export default CartCounter;