import { updateTopic } from "@/state/slice/topic/topic.slice";
import { useAppDispatch, useAppSelector } from "@/state/hook";
import { Topic } from "@/state/type";

const initialTopic = {
  title: '',
  releaseDate: '',
  updatedDate: '',
  url: '',
  isPrivate: true,
};

export const useTopicActions = () => {
  const topic = useAppSelector((state) => state.topic);
  const dispatch = useAppDispatch();

  const initTopic = (topic: Topic = initialTopic) => {
    const payload = topic;
    dispatch(updateTopic(payload));
  }
  
  const updateTopicTitle = (title: string) => {
    const payload = {...topic, title: title};
    dispatch(updateTopic(payload));
  }

  return {
    topic,
    initTopic,
    updateTopicTitle,
  };
};
