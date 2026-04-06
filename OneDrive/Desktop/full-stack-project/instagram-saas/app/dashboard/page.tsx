import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-500">
          Welcome to your Instagram automation SaaS 🚀
        </p>
      </div>
    </div>
  );
}