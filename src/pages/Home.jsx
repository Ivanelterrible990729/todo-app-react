import TaskList from '../components/task/TaskList';

export default function Home() {
    return (
        <>
            <div className='sticky top-0 bg-white rounded-lg text-right p-3'>
                <button className='btn-primary'>
                    New Task
                </button>
            </div>

            <TaskList />
        </>
    );
}