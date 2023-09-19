"use client"
import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDashboardActions } from "@/state/slice/dashboard/hook";
import { TopicsPreview }  from "./TopicsPreview";
import Template from "@/components/layouts/Template/Template";

export default function Dashboard({ params }: { params: { user: string } }){
  const [ selected, setSelected ] = useState(-1);
  const { dashboard } = useDashboardActions()
  return (
    <Template>
      <List sx={{ width: '90%' }}>
        <ListItem key={0}>
          <ListItemText primary="名前"/>
        </ListItem>
        <Divider />
        {dashboard.topics.map((topic, index) =>
          <TopicsPreview
            index={index+1}
            topic={topic}
            username={params.user}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </List>
    </Template>
  )
}