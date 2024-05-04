import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border p-4">
        <Link
          to="/components"
          className="text-lg font-semibold hover:text-blue-600"
        >
          Chats
        </Link>
        <p className="text-sm text-gray-500">Manage chats</p>
        <div className="mt-2 text-xs text-gray-400">
          <span>Total Chats: 1,234</span>
          <span className="mx-2">|</span>
          <span>Updated: 2 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
