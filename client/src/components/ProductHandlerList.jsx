import { FixedSizeList } from 'react-window';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

const products = Array.from({ length: 200 }, (_, index) => `Product ${index + 1}`);

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={products[index]} />
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 400, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={products.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}