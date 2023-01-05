import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Li from './Li';

function TodoApp() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState<string[]>([]);
  
    function handleChange(event:any) {
      const newValue = event.target.value;
      setInputText(newValue);
    }
  
    function addItem(){
        setItems((preItem) =>{
            return [...preItem, inputText]
        })
        setInputText("")

    }
  
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>To-Do List</h1>
        </div>
        <div className={styles.form}>
          <input onChange={handleChange} type="text" value={inputText} />
          <button className={styles.button} onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map(todoItem => (
              <Li text={todoItem} />
            ))}
          </ul>
        </div>
      </div>
    );
}

export default TodoApp