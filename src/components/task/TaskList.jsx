import TaskItem from "./TaskItem"

export default function TaskList({tasks, toggleTaskChecked}) {

    const listTasks = tasks.map(task =>
        <div key={task.id}>
            <TaskItem id={task.id} isChecked={task.isChecked} data={task.data} onToggle={() => toggleTaskChecked(task.id)} />
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