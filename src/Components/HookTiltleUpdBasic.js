import React, { useState, useEffect } from 'react';

function HookTiltleUpdBasic() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });


    return (
        <div>
            <button onClick ={ () => setCount(count+1)}>
                You clicked {count} times
            </button>
        </div>
    )
}

export default HookTiltleUpdBasic
