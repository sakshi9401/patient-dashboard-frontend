import Sidebar from "@/components/Sidebar";

export default function Plan() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Plan</h1>
        <p className="mt-2 text-gray-600">This is the plan content.</p>
      </main>
    </div>
  );
}
