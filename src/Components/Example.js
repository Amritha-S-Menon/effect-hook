import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('user Effect -Updating title');
  },[count]);


  return (
    <div>
      <input 
        type ="text"
        value ={name}
        onChange ={e=>setName(e.target.value)}
        />
      <button onClick={() => setCount(count + 1)}>
       Click {count}
      </button>
    </div>
  );
}
export default Example