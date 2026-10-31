export default function Skeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse px-4 pt-6">
      <div className="h-9 w-72 rounded-lg bg-base-700/70" />
      <div className="mt-3 h-4 w-full max-w-xl rounded bg-base-800" />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[0, 1, 2, 3].map(i => <div key={i} className="h-20 rounded-2xl bg-base-800/80" />)}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map(i => <div key={i} className="h-56 rounded-2xl bg-base-800/80" />)}
      </div>
    </div>
  );
}
