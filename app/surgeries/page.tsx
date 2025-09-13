import Sidebar from "@/components/Sidebar";

export default function Surgery() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Surgery</h1>
        <p className="mt-2 text-gray-600">This is the Surgery content.</p>
      </main>
    </div>
  );
}
