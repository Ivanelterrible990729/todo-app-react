import { FaCalendar, FaEllipsisV } from "react-icons/fa";

export default function TaskItem() {
    return (
        <>
            <div className="card">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center">
                        <input id="checkbox" type="checkbox" className="h-5 w-5 cursor-pointer mr-2" />
                        <label htmlFor="checkbox" className="text-xl font-medium cursor-pointer select-none">
                            <span className="text-danger text-xl font-bold mx-2">!</span>
                            Task 1
                        </label>

                        {/* <span className="flex items-center text-sm border-l ml-5 pl-5 space-x-2">
                            <span className="rounded-lg bg-amber-300 text-yellow-700 px-2 py-1">Category 1</span>
                            <span className="rounded-lg bg-green-300 text-green-700 px-2 py-1">Category 2</span>
                            <span className="rounded-lg bg-purple-300 text-purple-700 px-2 py-1">Category 3</span>
                        </span> */}
                    </div>

                    <div className="flex items-center">
                        <button className="btn-alternative">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>

                <div className="flex items-center text-gray-500 my-2">
                    <FaCalendar className="h-4 mr-2"/>
                    <span>26/05/2025</span>
                </div>

                <p className="truncate text-gray-500 text-sm mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione adipisci vero quibusdam tempora sint nostrum assumenda nesciunt recusandae a? Accusantium harum autem ipsum rerum itaque, atque odit sequi corrupti.
                </p>
            </div>
        </>
    );
}