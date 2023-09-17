import TextField from '@/components/base/Textfield'
import Button from '@/components/base/Button'
import { Box } from '@mui/system'
import * as React from 'react'
import { useState } from 'react'
import { TagsContainer, TagForm, PreviewContainer } from './Styles'
import PreviewTags from './TagPreview'
import { useArticleActions } from '@/state/slice/article/hook'

const Tag = () => {
  const {
    article,
    updateTags,
    removeTag,
  } = useArticleActions();
  const [tagText, setTagText] = useState('');
  const [isError, setIsError] = useState(false);
  const errorMessage = "空白タグを追加することはできません"
  const handleChange = (tag: string) => {
    if(tag === '') {
      setIsError(true);
      return;
    }
    updateTags(tag);
    setTagText('')
    setIsError(false);
  }
  return (
    <TagsContainer>
      <TagForm>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1, padding: '20px' }}></Box>
          <Box sx={{ position:'relative', flexGrow: 1, padding: '20px' }}>
            <TextField labelSize='medium' label='タグを追加' maxLength={20} text={tagText} updateText={setTagText}/>
            <Box sx={{ position: 'absolute', bottom: 10, color: 'red', fontSize: '0.8em' }}>
              {isError && errorMessage}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Button primary='darkblue' label='Create' onClick={() => handleChange(tagText)}/>
          </Box>
        </Box>
      </TagForm>
      <PreviewContainer>
        <PreviewTags tags={article.tags} removeTag={(index) => removeTag(index)} />
      </PreviewContainer>
    </TagsContainer>
  )
}

export default Tag