import LoadingIcon from "@/public/loading.svg";

export const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <LoadingIcon className="text-primary size-20" />
      <span className="font-medium text-xl text-zinc-800">Loading...</span>
    </div>
  );
};
