export default function CloseDealModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-[90%]">
        <p className="font-semibold mb-2">Close Deal?</p>
        <p className="text-sm text-gray-600 mb-4">
          This will mark deal as completed.
        </p>
        <button
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
        >
          Confirm 
        </button>
        <button
          onClick={onClose}
          className="w-full border py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
