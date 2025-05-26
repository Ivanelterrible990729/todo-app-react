import TaskItem from '.././components/task/TaskItem';

export default function Home() {
    return (
        <>
            <div className='sticky top-0 bg-white rounded-lg text-right p-3'>
                <button className='btn-primary'>
                    New Task
                </button>
            </div>

            <div className='px-5 pb-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl text-slate-400 mt-10 mb-5'>TODAY</h2>
                </div>

                <div className='space-y-4'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </div>

                <h2 className='text-xl text-slate-400 mt-15 mb-5'>LATER</h2>

                <div className='space-y-4'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </div>
            </div>
        </>
    );
}