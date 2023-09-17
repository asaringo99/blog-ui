import { updateDashboard } from "@/state/slice/dashboard/dashboard.slice";
import { useAppDispatch, useAppSelector } from "@/state/hook";
import { Dashboard, Topic } from "@/state/type";

const initialDashboard = {
  topics: [],
};

export const useDashboardActions = () => {
  const dashboard = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const initDashboard = (dashboard: Dashboard = initialDashboard) => {
    const payload = dashboard;
    dispatch(updateDashboard(payload));
  }

  const addTopic = (topic: Topic) => {
    const payload = {topics: [...dashboard.topics, topic]}
    dispatch(updateDashboard(payload));
  }
  
  const editDashboardTopic = (index: number, topic: Topic) => {
    const newDashboard = dashboard.topics.map((t, i) => index === i ? topic : t);
    const payload = {topics: newDashboard};
    dispatch(updateDashboard(payload));
  }
  
  const deleteDashboard = (index: number) => {
    const newDashboard = dashboard.topics.filter((_, i) => index !== i);
    const payload = {topics: newDashboard};
    dispatch(updateDashboard(payload));
  }
  
  return {
    dashboard,
    initDashboard,
    addTopic,
    editDashboardTopic,
    deleteDashboard,
  };
};
