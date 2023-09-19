import * as React from 'react';
import { SaveArticleListItems } from './SaveArticleItem';
import { PostArticleListItems } from './PostItem';
import { PrivatePostListItems } from './PrivatePostItem';

interface IProps {
  handleClickForPost: () => void;
}

export const RegisterArticleListItems = ({ handleClickForPost }: IProps) => {
  return (
    <React.Fragment>
      <SaveArticleListItems/>
      <PostArticleListItems handleClick={handleClickForPost}/>
      <PrivatePostListItems/>
    </React.Fragment>
  )
};