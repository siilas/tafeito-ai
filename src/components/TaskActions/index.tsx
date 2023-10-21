import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  HourglassBottom as HourglassBottomIcon,
} from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

import { useGlobalContext } from "../../utils/global";
import { TaskActionsProps } from "./TaskActions";

const TaskActions = (props: TaskActionsProps) => {
  const { deleteTask, editTask, estimateTask } = props;

  const { isLoading } = useGlobalContext();

  return (
    <Box>
      <Tooltip title="Estimar Tarefa">
        <IconButton
          disabled={isLoading}
          edge="end"
          aria-label="editar"
          onClick={estimateTask}
        >
          <HourglassBottomIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Editar Tarefa">
        <IconButton
          disabled={isLoading}
          edge="end"
          aria-label="editar"
          onClick={editTask}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar Tarefa">
        <IconButton
          disabled={isLoading}
          edge="end"
          aria-label="deletar"
          onClick={deleteTask}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TaskActions;
