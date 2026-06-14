import { tasks } from "../data/tasks";

function Kanban() {
  const todo = tasks.filter(task => task.status === "todo");
  const doing = tasks.filter(task => task.status === "doing");
  const review = tasks.filter(task => task.status === "review");
  const done = tasks.filter(task => task.status === "done");

  return (
    <div>
      <h2>Kanban</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>A Fazer</h3>
          {todo.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>

        <div>
          <h3>Em Andamento</h3>
          {doing.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>
import { tasks } from "../data/tasks";

function Kanban() {
  const todo = tasks.filter(task => task.status === "todo");
  const doing = tasks.filter(task => task.status === "doing");
  const review = tasks.filter(task => task.status === "review");
  const done = tasks.filter(task => task.status === "done");

  return (
    <div>
      <h2>Kanban</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>A Fazer</h3>
          {todo.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>

        <div>
          <h3>Em Andamento</h3>
          {doing.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>

        <div>
          <h3>Revisão</h3>
          {review.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>

        <div>
          <h3>Concluído</h3>
          {done.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
        <div>
          <h3>Revisão</h3>
          {review.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>

        <div>
          <h3>Concluído</h3>
          {done.map(task => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
