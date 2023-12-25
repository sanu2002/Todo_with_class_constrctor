                                              Not a Useful component for this project
--------------------------------------------------------------------------------------------------------------------------------------------




import './App.css';
import { FaBeer } from 'react-icons/fa';

function App() {
  const todolist = [
    { id: 1, name: 'sanu', completed: false },
    { id: 2, name: 'salu', completed: true },
  ];

  const completedItems = todolist
    .filter((element) => element.completed === true)
    .map((element) => (
      <div key={element.id} className='completed'>
        {element.name}
      </div>
    ));

  const notCompletedItems = todolist
    .filter((element) => element.completed === false)
    .map((element) => (
      <div key={element.id} className='not-completed'>
        {element.name}
      </div>
    ));

  return (
    <>
      <div className=''>
        <h1>Completed:</h1>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
</svg>{completedItems}
        <h1>Not Completed:</h1>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
</svg>{notCompletedItems}
      </div>
    </>
  );
}

export default App;
