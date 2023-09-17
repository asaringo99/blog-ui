import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './slice/article/article.slice'
import articlesReducer from './slice/article/articles.slice'
import dashboardReducer from './slice/dashboard/dashboard.slice'
import topicReducer from './slice/topic/topic.slice'

const store = configureStore({
    reducer: {
      article: articleReducer,
      articles: articlesReducer,
      dashboard: dashboardReducer,
      topic: topicReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;