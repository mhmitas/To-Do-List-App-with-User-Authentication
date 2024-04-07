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
                <div className="min-h-72 flex items-center justify-center bg-cover">
                    <div className=" w-[500px]">
                        <h3 className="text-2xl font-bold mb-6">T O D O</h3>
                        <form onSubmit={handleAddTask} className="relative shadow-xl rounded-md">
                            <input type="text" name="task" placeholder="Create a new todo..." className="w-full px-6 py-8 input input-primary bg-base-200" />
                            <button className="absolute top-2 right-3 btn btn-primary text-xl "><FaPlus /></button>
                        </form>
                        {taskError && <div className="badge badge-error">{taskError}</div>}
                    </div>
                </div>
                <div className=' my-8 flex flex-col gap-6 mb-4 justify-center items-center'>
                    <div className='rounded-md shadow-xl w-[500px] bg-base-200'>
                        {
                            tasks.map((task, idx) => <NewTask key={idx} task={task}></NewTask>)
                        }
                        <div className='w-full py-2 px-5 flex justify-between'>
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
        <div className='w-full p-5 border-b border-slate-500 flex items-center gap-4'>
            <ImRadioUnchecked />{task}
        </div>
    )
}

//min-h-[calc(100vh-64px)] 