import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLogin = () => {
  return (
    <div className="w-full max-w-md p-6 bg-[#d1d5dc] rounded-lg shadow-md">
      <Skeleton className="h-8 w-1/3 mx-auto mb-4" />
      <div className="mb-4">
        <Skeleton className="h-5 w-20 mb-2" /> {/* Label */}
        <Skeleton className="h-10 w-full rounded-lg" /> {/* Input */}
      </div>
      <div className="mb-4">
        <Skeleton className="h-5 w-20 mb-2" /> {/* Label */}
        <Skeleton className="h-10 w-full rounded-lg" /> {/* Input */}
      </div>
      <Skeleton className="h-10 w-full rounded-lg" /> {/* Button */}
    </div>
  );
};

export default SkeletonLogin;
