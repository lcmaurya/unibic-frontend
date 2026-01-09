import { Button } from "@/app/components/ui/Button";
"use client";

import { setActiveProvider } from "@/app/lib/dealController";


export default function ProviderModal({ data, onClose }: any) {
  if (!data) return null;

  return (
    <Card className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <Card className="bg-white rounded-lg p-4 w-[90%] max-w-sm">
        <h3 className="font-bold text-lg">{data.title}</h3>
        <p className="text-sm mt-1">
          Trust Score: <b>{data.trust}/1000</b>
        </p>
        <p className="text-sm text-gray-500">
          Location: {data.distance}
        </p>

        <Button
          className="mt-4 bg-green-600 text-white w-full py-2 rounded"
          onClick={() => { setActiveProvider(data); window.location.href = "/deals"; }}
        >
          Start Deal
        </Button>

        <Button
          className="mt-2 text-sm text-gray-500 w-full"
          onClick={onClose}
        >
          Close
        </Button>
      </Card>
    </Card>
  );
}
