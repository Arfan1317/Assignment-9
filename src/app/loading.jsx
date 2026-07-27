export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gray-50/50">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#0b6654]"></div>
      <p className="mt-4 text-[#0b6654] font-medium animate-pulse">Loading...</p>
    </div>
  );
}