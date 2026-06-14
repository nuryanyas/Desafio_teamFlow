import { tasks } from "../data/tasks";

function Dashboard() {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "doing"
  ).length;

  const review = tasks.filter(
    (task) => task.status === "review"
  ).length;

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total de tarefas: {total}</p>
      <p>Concluídas: {completed}</p>
      <p>Em andamento: {inProgress}</p>
      <p>Em revisão: {review}</p>
    </div>
  );
}

export default Dashboard;
