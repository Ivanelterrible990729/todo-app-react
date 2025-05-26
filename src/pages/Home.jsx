import TaskItem from '.././components/task/TaskItem';

export default function Home() {
    return (
        <>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>

            <div className='sticky top-1 bg-slate-300 border-slate-300 rounded-lg text-right p-3'>
                <button className='bg-[#d1d646] border rounded-lg p-2 top-0'>
                    New Task
                </button>
            </div>

            <div className='p-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl text-slate-400 mt-10 mb-5'>HOY</h2>
                </div>

                <div className='space-y-4'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </div>

                <h2 className='text-xl text-slate-400 mt-10 mb-5'>MAS TARDE</h2>

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