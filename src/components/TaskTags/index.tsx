import AddIcon from "@mui/icons-material/Add";
import { Box, Chip, IconButton, Input, Tooltip } from "@mui/material";
import { useState } from "react";
import { api } from "../../provider/customAxios";

import { urlAddTaskTag } from "../../utils/api";
import { useGlobalContext } from "../../utils/global";
import { TaskTagsProps } from "./TaskTags";

const TaskTags = (props: TaskTagsProps) => {
  const { task } = props;
  const [isAdding, setIsAdding] = useState(false);

  const { setRefectchTaskStatus, refetchtaskStatus } = useGlobalContext();

  const renderAddButton = () => {
    return (
      <Tooltip title="Adicionar etiqueta">
        <IconButton
          edge="end"
          aria-label="adicionar etiqueta"
          onClick={() => {
            setIsAdding(true);
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const addTaskTag = async (tag: string) => {
    const taskId = task?.id ?? -1;
    const customTaskTagUrl = urlAddTaskTag
      .replace(":id", taskId.toString())
      .replace(":tag", tag);
    try {
      await api.post(customTaskTagUrl);
      setRefectchTaskStatus(refetchtaskStatus + 1);
    } catch (err) {
      console.error("erro ao adicionar tag");
    }
    setIsAdding(false);
  };

  const removeTaskTag = async (tag: string) => {
    const taskId = task?.id ?? -1;
    const customTaskTagUrl = urlAddTaskTag
      .replace(":id", taskId.toString())
      .replace(":tag", tag);
    try {
      await api.delete(customTaskTagUrl);
      setRefectchTaskStatus(refetchtaskStatus + 1);
    } catch (err) {
      console.error("erro ao adicionar tag");
    }
    setIsAdding(false);
  };

  const checkKeyPressed = (e: any) => {
    if (e.keyCode == 13) {
      addTaskTag(e.target.value);
    }
    if (e.keyCode == 27) {
      setIsAdding(false);
    }
  };

  const renderTextInput = () => {
    return <Input autoFocus onKeyDown={checkKeyPressed} />;
  };
  return (
    <Box display={"flex"} px={1} pb={2} alignItems={"center"} flexWrap={"wrap"}>
      {task.etiquetas.map((tag) => (
        <Box pr={1} pb={1} key={tag}>
          <Chip
            color="secondary"
            key={tag}
            label={tag}
            size="small"
            onDelete={() => removeTaskTag(tag)}
          />
        </Box>
      ))}
      {isAdding === false ? renderAddButton() : renderTextInput()}
    </Box>
  );
};

export default TaskTags;
