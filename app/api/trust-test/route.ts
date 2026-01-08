import { calculateWeightedTrust } from "@/app/lib/trustCalculator";

export async function GET() {
  const events = [
    { type: "TASK_COMPLETED", points: 10 },
    { type: "HELP_GIVEN", points: 15 },
    { type: "CANCEL_DEAL", points: -10 },
  ];

  const initial = 500;
  const score = calculateWeightedTrust(initial, events);

  return Response.json({
    initial,
    events,
    calculatedTrust: score,
  });
}
