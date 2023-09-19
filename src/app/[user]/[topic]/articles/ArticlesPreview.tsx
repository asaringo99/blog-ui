import { Article } from "@/state/type";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import PreviewTags from "@/components/organism/Tags/TagPreview";
import { Box } from "@mui/system";
import { Delete } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { truncateString } from "@/util/string/trancate";

export const renderArticles = (index: number, article: Article) => {
  return (
    <Box key={index} sx={{ padding: '20px', width: '45%' }}>
      <Card sx={{ position: 'relative', width: '100%', height: 250, backgroundColor: '#fafafa' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant="overline" component="div" display="flex" justifyContent="center" paddingTop="15px">
            {truncateString(article.title, 25)}
          </Typography>
          <Divider/>
          <Typography variant="caption" color="text.secondary" sx={{ width: '100%', height:'100%', overflowY: 'auto' }}>
            <PreviewTags tags={article.tags}/>
          </Typography>
        </CardContent>
        <Box sx={{ position: 'absolute', bottom: 0, backgroundColor: '#000000', width: '100%' }}>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-around', color: '#ffffff' }}>
            <Button size="small" sx={{ color: '#ffffff' }}>Edit</Button>
            <Button size="small" sx={{ color: '#ffffff' }}>Preview</Button>
          </CardActions>
        </Box>
        <Box sx={{ position: 'absolute', top: 5, right: -10 }}>
          <Button sx={{ color: '#000000' }}>
            <Delete />
          </Button>
        </Box>
        <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
          <Button sx={{ color: '#000000' }}>
            {article.isPrivate ? <LockIcon/> : <LockOpenIcon/>}
          </Button>
        </Box>
      </Card>
    </Box>
  )
}