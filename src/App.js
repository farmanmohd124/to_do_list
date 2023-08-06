
import { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const [inputList ,setInputList]=useState("");
  const [Items ,setItems]= useState([]);
  
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems ,inputList];
    });
    setInputList("");
  };

  const deleteItems=(id)=>{
    console.log("deleted");

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
           return index!==id;
      })
    })


  }
  return (
    <>
      <div className='main-div'>
          <div className='centre-div'>
             <br/>
             <h1>ToDo List</h1>
             <br/>
             <input type='text' placeholder='Add a Item' 
             value={inputList}
             onChange={itemEvent}/>
             <button onClick={listOfItems}>+</button>

             <ol>
                 {Items.map((itemval ,index)=>{
                  return(
                    <>
                    <div className='item-remove'>
                    <button  className='btn' onClick={()=>{
                      deleteItems(index)
                    }}>x</button>

                    <li>{itemval}</li>
                    </div>
                    </>
                  );
                 })}
             </ol>

          </div>
      </div>
    </>
  );
}

export default App;
