import React from "react";

export default function SearchComponent() {
    return (
        <div className="w-full flex items-center">
            <div className="w-full">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-full max-w-sm flex rounded"
                >
                    <input
                        type="text"
                        className="block w-full h-14 px-[29px] py-[19px] placeholder:text-xs text-gray-700 placeholder:text-pureGray bg-white rounded-l-[10px] focus:outline-none"
                        placeholder="Search food you love"
                    />
                    <button
                        type="submit"
                        className="px-5 h-14 text-white bg-yellow border-l rounded-r-ten"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}