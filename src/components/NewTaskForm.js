import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const categoryArray=categories.filter(category=>category !== "All")

  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code");

  function handleName(e) {
    setTaskName(e.target.value);
  }

  function handleCategory(e) {
    setTaskCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {text: taskName, category: taskCategory}
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleName} value={taskName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={taskCategory}>
          {categoryArray.map((category, index) => <option key={index} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
