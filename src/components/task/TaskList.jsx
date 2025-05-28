import TaskItem from "./TaskItem"

export default function TaskList({tasks, toggleTaskChecked, handleDeleteTask, setTaskToEdit}) {

    const sortedTasks = [...tasks].sort((a, b) => {
        const dateA = new Date(a.data.date);
        const dateB = new Date(b.data.date);
        return dateA - dateB; // ascendente
    });
    
    const listTasks = sortedTasks.map(task =>
        <div key={task.id}>
            <TaskItem
                id={task.id}
                isChecked={task.isChecked}
                data={task.data}
                onToggle={() => toggleTaskChecked(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
                onEdit={() => setTaskToEdit(task)}
            />
        </div>
    );

    return (
        <>
            <div className='px-5 pb-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl text-slate-400 mt-10 mb-5'>TASKS</h2>
                </div>

                <div className='space-y-4'>
                    { listTasks }
                </div>
            </div>
        </>
    );
}