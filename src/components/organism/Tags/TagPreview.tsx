import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react'
import { HashTag } from './Styles';

interface IProps {
  tags: string[];
  removeTag?: (index: number) => void;
}

const PreviewTags = ({ tags, ...props }: IProps) => {
  const { removeTag } = props;

  const getTag = (tag: string, index: number) => {
    return (
      <Box key={index} sx={{ position:'relative', color: 'black', padding: '0.8em' }}>
        <HashTag>
          #{tag}
        </HashTag>
        {removeTag &&
          <IconButton onClick={() => removeTag(index)} sx={{ position: 'absolute', top: -10, right: 0 }}>
            <Close fontSize='small' />
          </IconButton>
        }
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags.map((tag, index) => getTag(tag, index))}
    </Box>
  )
}


export default PreviewTags