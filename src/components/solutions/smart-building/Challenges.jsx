import React from 'react';

const Challenges = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center shadow-lg rounded-lg bg-white">
            <div className="w-11/12 sm:w-10/12 md:w-9/12 flex flex-col items-center justify-center py-2">
                <div className="w-full flex flex-col md:flex-row items-center justify-between px-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10">
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Challenges
                        </h1>
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Typical Applications & Products
                        </h1>
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Success Stories
                        </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mt-2 md:mt-0">
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Home
                        </h1>
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Solution
                        </h1>
                        <h1 className="hover:text-sky-700 py-2 px-1 text-sm sm:text-base">
                            Smart Building
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Challenges;
