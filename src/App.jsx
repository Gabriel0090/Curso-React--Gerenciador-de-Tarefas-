import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar ",
      description: "Estudar React",
      isIncompleted: false,
    },
    {
      id: 2,
      title: "Ler",
      description: "Ler um livro",
      isIncompleted: true,
    },
    {
      id: 3,
      title: "Exercitar",
      description: "Fazer exercicios",
      isIncompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isIncompleted: !task.isIncompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isIncompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-2">
      <div className="w-[500px] space-y-4 ">
        <h1 className="text-3xl text-slate-50 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
