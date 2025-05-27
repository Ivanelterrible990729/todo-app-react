import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function TaskForm() {
    let [formOpen, setFormOpen] = useState(false)

    return (
        <>
            <div className='sticky top-0 bg-white rounded-lg text-right p-3'>
                <button className='btn-primary' onClick={() => setFormOpen(true)}>
                    New Task
                </button>
            </div>

            <Dialog open={formOpen} onClose={() => setFormOpen(true)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                                    <FaPlus aria-hidden="true" className="size-6" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        New Task
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 mb-5">
                                            Fill the form to create a new task.
                                            Fields with <span className='text-danger'>*</span> are required.
                                        </p>

                                        <div className='mb-3'>
                                            <label htmlFor="form-title">
                                                Title
                                                <span className='text-danger'>*</span>
                                            </label>

                                            <input
                                                id="form-title"
                                                type="text"
                                                className='border border-slate-300 rounded w-full px-2 py-1 my-2'
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="form-description">
                                                Description
                                            </label>

                                            <textarea
                                                id="form-description"
                                                className='border border-slate-300 rounded w-full px-2 py-1 my-2'
                                                rows="2"
                                            >
                                            </textarea>
                                        </div>

                                        <div className='grid grid-cols-12 gap-4 mb-3'>
                                            <div className='col-span-6'>
                                                <label htmlFor="form-date">
                                                    Expiration date
                                                    <span className='text-danger'>*</span>
                                                </label>

                                                <input
                                                    id="form-date"
                                                    type="date"
                                                    className='border border-slate-300 rounded w-full px-2 py-1 my-2'
                                                />
                                            </div>
                                            <div className='col-span-6'>
                                                <label htmlFor="form-time">
                                                    Expiration time
                                                </label>

                                                <input
                                                    id="form-time"
                                                    type="time"
                                                    className='border border-slate-300 rounded w-full px-2 py-1 my-2'
                                                />
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="form-important"class="inline-flex items-center cursor-pointer my-3">
                                                <input
                                                    id="form-important"
                                                    type="checkbox"
                                                    value=""
                                                    class="sr-only peer"
                                                />
                                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                                <span class="ms-3">
                                                    Mark as important
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setFormOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:mr-3 sm:w-auto"
                            >
                                Create Task
                            </button>
                        </div>
                    </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}