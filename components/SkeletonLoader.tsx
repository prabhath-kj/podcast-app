export const SkeletonLoader = () => (
    <div className="w-full shadow-none px-2 py-2 bg-transparent h-auto animate-pulse">
        <div className="flex items-center justify-between gap-4 p-0">
            {/* Skeleton for Image */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-14 h-14 bg-gray-300 rounded-xl flex-shrink-0"></div>

                <div className="min-w-0">
                    <div className="w-28 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-20 h-3 bg-gray-300 rounded"></div>
                </div>
            </div>

            <div className="w-24 h-8 bg-gray-300 rounded-full"></div>
        </div>
    </div>
)

