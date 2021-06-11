import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {

  // const [displayedTasks, setDisplayedTasks] = useState(tasks) //why does this not work?
  // console.log(displayedTasks)

  // function handleDelete(id) {
  //   console.log(id.text)
  //   let filteredTasks = displayedTasks.filter(task => task.text !== id.text)
  //   console.log(filteredTasks)
  //   setDisplayedTasks(filteredTasks)
  // }

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return(
          <Task 
            key={index} 
            onDelete={onDelete}
            text={task.text} 
            category={task.category} 
          />
        )
      })}
    </div>
  );
}

export default TaskList;
