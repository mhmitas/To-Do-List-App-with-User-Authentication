import { ImRadioUnchecked } from "react-icons/im";
import bg_image from '../../../assets/blue-smooth.jpg'
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";



const Tasks = () => {

    const [tasks, setTasks] = useState([])
    const [taskError, setTaskError] = useState('')


    function handleAddTask(e) {
        e.preventDefault()
        const task = e.target.task.value
        if (!task) {
            setTaskError('Please add a task')
            return;
        }
        const updateTasks = [...tasks, task]
        setTasks(updateTasks)
        console.log(updateTasks);
        setTaskError('')
        e.target.reset()
    }

    return (
        <div className="w-full josefin-sans">
            <section className=''>
                <div className="min-h-52 flex items-center justify-center">
                    <div className=" w-2/3 max-w-screen-md flex flex-col gap-4">
                        <h3 className="text-3xl font-bold">T O D O</h3>
                        <form onSubmit={handleAddTask} className="relative shadow-xl rounded-md w-full  text-xl">
                            <input type="text" name="task" placeholder="Create a new todo..." className="input input-primary bg-base-200 w-full p-8" />
                            <button className="absolute top-2 right-3 btn btn-primary text-xl "><FaPlus /></button>
                        </form>
                        {taskError && <div className="badge badge-error">{taskError}</div>}
                    </div>
                </div>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <div className='rounded-md shadow-xl bg-base-200 w-2/3 max-w-screen-md border border-primary'>
                        {
                            tasks.map((task, idx) => <NewTask key={idx} task={task}></NewTask>)
                        }
                        <div className='w-full border-b border-slate-600 p-4 flex items-center gap-4 justify-between'>
                            <span>5 items left</span>
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Tasks;

function NewTask({ task }) {
    console.log(task);
    return (
        <div className='w-full border-b border-slate-600 p-6 flex items-center gap-4'>
            <ImRadioUnchecked />{task}
        </div>
    )
}

//min-h-[calc(100vh-64px)] 