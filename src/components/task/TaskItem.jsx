import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCalendar, FaEllipsisV, FaPen, FaStopwatch, FaTrash } from "react-icons/fa";

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
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="btn-alternative">
                                <FaEllipsisV />
                            </MenuButton>
                            <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <MenuItem>
                                    <button className="flex items-center w-full text-left px-4 py-2 text-sm text-warning data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        <FaPen className="mr-2" />
                                        Edit
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="flex items-center w-full text-left px-4 py-2 text-sm text-danger data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
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
                    <span>26/05/2025</span>
                    <FaStopwatch className="h-4 mx-2"/>
                    <span>09:00 am</span>
                </div>

                <p className="truncate text-gray-500 text-sm mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione adipisci vero quibusdam tempora sint nostrum assumenda nesciunt recusandae a? Accusantium harum autem ipsum rerum itaque, atque odit sequi corrupti.
                </p>
            </div>
        </>
    );
}  