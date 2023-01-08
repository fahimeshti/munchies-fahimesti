import React from "react";

const SearchComponent = (): JSX.Element => {
    return (
        <div className="w-full flex items-center">
            <div className="w-full">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-full max-w-sm flex rounded"
                >
                    <input
                        type="text"
                        className="block w-full lg:h-14 px-7 py-3 lg:py-5 placeholder:text-xs text-gray-700 placeholder:text-pureGray bg-white rounded-l-ten focus:outline-none"
                        placeholder="Search food you love"
                    />
                    <button
                        type="submit"
                        className="px-5 lg:h-14 text-white bg-yellow border-l rounded-r-ten"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
export default SearchComponent;
