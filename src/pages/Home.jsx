import TaskList from '../components/task/TaskList';
import TaskForm from '../components/task/TaskForm';
import { useState } from 'react';

export default function Home() {

    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    function toggleTaskChecked(id) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }

    function handleCreateTask(newTask) {
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    function handleEditTask(updatedTask) {
        setTasks(prevTasks =>
            prevTasks.map(task => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    }

    function handleDeleteTask(id) {
        setTasks(prevTasks => 
            prevTasks.filter(task => task.id != id)
        );
    }

    return (
        <>
            <TaskForm onCreate={handleCreateTask} onEdit={handleEditTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
            <TaskList tasks={tasks} toggleTaskChecked={toggleTaskChecked} handleDeleteTask={handleDeleteTask} setTaskToEdit={setTaskToEdit} />
        </>
    );
}