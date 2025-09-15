import { ChevronRightIcon } from "lucide-react";




function Tasks(props) {
  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${task.isIncompleted && "line-through"}`}
          >
            {task.title}

          </button>
          <button className="bg-slate-400 p-2  rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
