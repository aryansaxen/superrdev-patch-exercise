export default function TaskTable({ tasks, loading, error, onTaskSelect }) {
  if (loading) {
    return <div className="state-message">Loading tasks...</div>;
  }

  if (error) {
    return <div className="state-message error">Error: {error}</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <div className="state-message">No tasks found.</div>;
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Assignee</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>
              <div 
                className="task-title" 
                style={{ cursor: 'pointer', color: '#0066cc', textDecoration: 'underline' }}
                onClick={() => onTaskSelect && onTaskSelect(task)}
              >
                {task.title}
              </div>
              <div className="task-desc">{task.description}</div>
            </td>
            <td>
              <span className={`status-badge ${task.status ? task.status.toLowerCase() : ''}`}>
                {task.status}
              </span>
            </td>
            <td>{task.priority}</td>
            <td>{task.assignee || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
