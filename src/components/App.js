import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [allTasks, setAllTasks]=useState(TASKS)
  const [displayedTasks, setDisplayedTasks] = useState(TASKS)
  const [currentCategory, setCategory] = useState("")

  function handleDelete(id) {
    console.log(id.text)
    let filteredTasks = displayedTasks.filter(task => task.text !== id.text)
    console.log(filteredTasks)
    setDisplayedTasks(filteredTasks)
  }

  function handleCategoryChange(category) {
    let newFilteredList = allTasks.filter(task => {
      if (category === "All") {
        return true
      } else {
        return task.category === category;
      }
    })
    setCategory(category);
    setDisplayedTasks(newFilteredList);
  }

  function handleTaskFormSubmit(newTask) {
    setAllTasks([...allTasks,newTask])
    setDisplayedTasks([...displayedTasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryChange={handleCategoryChange} categories={CATEGORIES} current={currentCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={displayedTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
