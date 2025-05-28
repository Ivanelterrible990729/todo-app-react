import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCalendar, FaEllipsisV, FaPen, FaStopwatch, FaTrash } from "react-icons/fa";

export default function TaskItem({id, isChecked, data, onToggle, onDelete, onEdit}) {
    return (
        <>
            <div className="card">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id={'check-' + id}
                            type="checkbox"
                            checked={isChecked}
                            onChange={onToggle}
                            className="h-5 w-5 cursor-pointer mr-2"
                        />

                        <label htmlFor={'check-' + id}  className="text-xl font-medium cursor-pointer select-none">
                            { data.important && <span className="text-danger text-xl font-bold mx-2">!</span> }
                            <span className={isChecked ? 'line-through' : ''}>
                                {data.title}
                            </span>
                        </label>

                        {/* <span className="flex items-center text-sm border-l ml-5 pl-5 space-x-2">
                            <span className="rounded-lg bg-amber-300 text-yellow-700 px-2 py-1">Category 1</span>
                            <span className="rounded-lg bg-green-300 text-green-700 px-2 py-1">Category 2</span>
                            <span className="rounded-lg bg-purple-300 text-purple-700 px-2 py-1">Category 3</span>
                        </span> */}
                    </div>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="btn-alternative">
                                <FaEllipsisV />
                            </MenuButton>
                            <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <MenuItem>
                                    <button
                                        onClick={onEdit}
                                        className="flex items-center w-full text-left px-4 py-2 text-sm text-warning data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        <FaPen className="mr-2" />
                                        Edit
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={onDelete}
                                        className="flex items-center w-full text-left px-4 py-2 text-sm text-danger data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        <FaTrash className="mr-2" />
                                        Delete
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>

                <div className="flex items-center text-gray-500 my-2">
                    <FaCalendar className="h-4 mr-2"/>
                    <span>{data.date.toLocaleDateString()}</span>

                    { data.time && <><FaStopwatch className="h-4 mx-2"/><span>{data.time}</span></> }
                </div>

                <p className="truncate text-gray-500 text-sm mt-5">
                    {data.description}
                </p>
            </div>
        </>
    );
}  