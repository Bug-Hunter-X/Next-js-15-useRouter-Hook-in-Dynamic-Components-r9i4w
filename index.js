```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    if (isMounted) {
      router.push('/');
    }
  };
  
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```