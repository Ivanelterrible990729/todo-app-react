import TaskList from '../components/task/TaskList';
import TaskForm from '../components/task/TaskForm';

export default function Home() {
    return (
        <>
            <TaskForm />
            <TaskList />
        </>
    );
}