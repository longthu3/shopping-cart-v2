export const ProductSkeleton = () => {
  return (
    <div
      className="flex flex-col gap-6 justify-center rounded-2xl border border-slate-200 sm:w-[75%] w-full p-4"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="inline-flex items-center justify-between h-20">
        <div className="w-32 h-32 rounded-full bg-slate-300 animate-pulse" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 animate-pulse rounded-full" />
            <span className="w-10 h-4 bg-slate-300 animate-pulse rounded-md" />
          </div>
          <div className="w-16 h-6 bg-slate-300 animate-pulse rounded-md rotate-6" />
        </div>
      </div>

      <div className="h-5 w-1/2 bg-slate-300 animate-pulse rounded-md" />

      <div className="inline-flex justify-between items-center">
        <div>
          <div className="items-center gap-2 border border-slate-300 inline-flex rounded-md px-4 py-1 cursor-pointer bg-slate-200">
            <span className="w-10 h-4 bg-slate-300 animate-pulse rounded-md" />
            <div className="w-4 h-4 bg-slate-300 animate-pulse rounded-full" />
          </div>
        </div>

        <span className="w-12 h-6 bg-slate-300 animate-pulse rounded-md" />
      </div>
    </div>
  );
};
