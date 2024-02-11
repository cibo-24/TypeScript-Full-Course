import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { todoType } from './components/appTypes';
import TodoItem from './components/TodoItem';

// App componentin type'ını Functional Component verdik. Bu FC ile verilir.

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  // e veya event, ChangeEvent <HTMLInputElement> görevi görür.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  }

  // appTypes içerisinde ki değerleri çektik.
  // void: geriye bir şey döndürmez.
  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    // ...todoList öğelerinin hepsinin üzerine newTaskı ekledik.
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  }

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(todoList.filter((taskFilter) => {
      return taskFilter.taskName !== nameToDelete
    }));
  };

  return (
    <div className="App">
      <div className='mainCard'>
        <input className='mainCardInput' type='text' value={task} name='task' placeholder='Taskınızı Giriniz...' onChange={handleChange} />
        <input className='mainCardInput' type='number' value={workDay} name='workDay' placeholder='Kaç Günde Tamamlamalısınız...' onChange={handleChange} />
        <button className="maincardbutton" onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div className="todocart">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>

  );
}

export default App;
