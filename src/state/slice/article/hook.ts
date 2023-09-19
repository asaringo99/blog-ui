import { updateArticle } from "@/state/slice/article/article.slice";
import { useAppDispatch, useAppSelector } from "@/state/hook";
import { updateArticles } from "@/state/slice/article/articles.slice";
import { Article } from "@/state/type";

const initialArticle = {
  topic: '',
  title: '',
  tags: [],
  content: '',
  isPrivate: true,
  isEdit: false,
};

export const useArticleActions = () => {
  const article = useAppSelector((state) => state.article);
  const articles = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  const initArticle = (article: Article = initialArticle) => {
    const payload = article;
    dispatch(updateArticle(payload));
  }

  const createArticle = (topic: string) => {
    const payload = {...initialArticle, topic: topic};
    console.log(payload)
    dispatch(updateArticle(payload));
  }

  const startEditingArticle = (article: Article = initialArticle) => {
    const payload = {...article, isEdit: true};
    dispatch(updateArticle(payload));
  }

  const updateArticleTitle = (title: string) => {
    const payload = {...article, title: title};
    dispatch(updateArticle(payload));
  };
  
  const updateArticleContent = (content: string) => {
    const payload = {...article, content: content};
    dispatch(updateArticle(payload));
  };

  const updateIsPrivate = (value: boolean) => {
    const payload = {...article, isPrivate: value};
    dispatch(updateArticle(payload));
  };

  const updateTags = (tag: string) => {
    const newTags = [...article.tags, tag];
    const payload = {...article, tags: newTags};
    dispatch(updateArticle(payload));
  }
  
  const removeTag = (index: number) => {
    const updatedTags = article.tags.filter((_, i) => i !== index);
    const payload = { ...article, tags: updatedTags };
    dispatch(updateArticle(payload));
  }

  const addArticle = (article: Article) => {
    const payload = {...articles, contents: [...articles.contents, article]};
    console.log(article, payload);
    dispatch(updateArticles(payload))
  }

  const deleteArticles = (index: number) => {
    const updatedArticles = articles.contents.filter((_, i) => i !== index);
    const payload = {...articles, contents: updatedArticles}
    dispatch(updateArticles(payload))
  }

  return {
    initialArticle,
    article,
    articles,
    initArticle,
    createArticle,
    startEditingArticle,
    updateArticleTitle,
    updateIsPrivate,
    updateArticleContent,
    updateTags,
    removeTag,
    addArticle,
    deleteArticles,
  };
};
