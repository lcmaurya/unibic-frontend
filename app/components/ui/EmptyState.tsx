export default function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="card fade-in text-center text-muted">
      <p className="h3">{title}</p>
      {hint && <p className="text-small mt-1">{hint}</p>}
    </div>
  );
}
