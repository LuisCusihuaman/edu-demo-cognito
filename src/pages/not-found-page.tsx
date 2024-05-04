import { Link } from 'react-router-dom';

import { Button } from '../components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/cat.gif" alt="Nothing here" className="w-1/2 max-w-lg" />
      <p className="mt-4 pb-4 text-xl text-gray-800">Nothing here</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
