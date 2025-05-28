import TaskList from '../components/task/TaskList';
import TaskForm from '../components/task/TaskForm';
import { useState } from 'react';
import { formatTime } from '../utils';

export default function Home() {

    const [tasks, setTasks] = useState([
        {id:'1', isChecked:true, data: {title:'Take a shower', description:'With shampoo and soap', date:new Date, time: formatTime(), important:false}},
        {id:'2', isChecked:false, data: {title:'Take a rest', description:'PLaying videogames does not count', date:new Date, time: formatTime(), important:true}},
        {id:'3', isChecked:true, data: {title:'Take a soda', description:'I prefer Cocacola', date:new Date, time: formatTime(), important:true}},
        {id:'4', isChecked:false, data: {title:'Walk the dog', description:'10 blocks on east', date:new Date, time: formatTime(), important:false}},
        {id:'5', isChecked:true, data: {title:'Sleep 8 hours', description:'With good dreams', date:new Date, time: formatTime(), important:true}},
    ]);

    function toggleTaskChecked(id) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }

    return (
        <>
            <TaskForm />
            <TaskList tasks={tasks} toggleTaskChecked={toggleTaskChecked} />
        </>
    );
}