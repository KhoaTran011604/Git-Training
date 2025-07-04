import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> -- Button -- </h1>

      <div className="card"></div>
    </div>
  );
}

export default Button;
