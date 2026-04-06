export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">🚀 Insta SaaS</h2>
      
      <ul className="space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Automations</li>
        <li className="hover:text-gray-300 cursor-pointer">Messages</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}