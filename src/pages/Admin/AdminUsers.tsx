import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/storage';
import type { User } from '../../types';
import Badge from '../../components/ui/Badge';

const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Manage Users</h1>
        <p className="text-gray-400">View registered users in the system.</p>
      </div>

      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Phone</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Joined Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{user.phone}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className="capitalize">
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{new Date(user.createdDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <Badge variant={user.status === 'active' ? 'success' : 'danger'}>
                      {user.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
