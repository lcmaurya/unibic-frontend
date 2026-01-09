import { Button } from "@/app/components/ui/Button";
export default function ReportIssueModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-[90%]">
        <p className="font-semibold mb-3">Report Issue</p>
        <select className="w-full border p-2 rounded mb-4">
          <option>Late delivery</option>
          <option>Payment issue</option>
          <option>Fraud suspicion</option>
        </select>
        <Button className="w-full bg-red-600 text-white py-2 rounded mb-2">
          Submit Report 
        </Button>
        <Button
          onClick={onClose}
          className="w-full border py-2 rounded"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
