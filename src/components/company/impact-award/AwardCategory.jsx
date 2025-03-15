import React from "react";

function AwardCategory() {
  return (
    <div className="my-8 p-4">
      <div className="flex flex-col gap-4 justify-center items-center p-4 md:px-8">
        <h2 className="lg:text-[2.5rem] md:text-[1.5rem] text-[15px] text-[#333] flex gap-4 md:justify-center md:items-start font-bold text-center">
          Awards Categories & Prizes
        </h2>
        <p className="text-[#666] md:text-center text-sm">
          Submit cases showcasing how you incorporated Milesight products and
          technologies into successful solutions & stand a chance to win the
          grand prizes!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Impact Awards */}
        <div className="md:col-span-2 bg-[#f4f9ff] rounded-md p-4">
          <img src="/company/impact-award/card1.png" alt="Impact Awards Card" />
          <div className="flex gap-4 items-center mt-2">
            <span className="text-[25px] text-[#2c9cfc] font-semibold">
              Impact Awards
            </span>
            <img
              src="/company/impact-award/badge1.png"
              alt="Impact Awards Badge"
            />
          </div>
          <p className="text-[#666] text-sm">
            <span className="text-[#2c9cfc] font-medium">3 best IoT cases</span>{" "}
            and{" "}
            <span className="text-[#2c9cfc] font-medium">
              3 best Video Security cases
            </span>{" "}
            will be selected as Impact Awards winners, with a choice of prizes
            from available options,{" "}
            <span className="underline decoration-[#f5ca48] decoration-2 underline-offset-6">
              plus a winner package.
            </span>
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Honorable Mentions */}
          <div className="bg-[#eff9f4] p-4 rounded-md flex md:flex-row flex-col gap-6">
            <img
              className="md:w-20 lg:w-auto"
              src="/company/impact-award/card2.png"
              alt="Honorable Mentions Card"
            />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h2 className="text-[#9b7fde] underline decoration-[#9b7fde] decoration-2 underline-offset-2 md:text-[20px]">
                  Honorable Mentions
                </h2>
                <img
                  src="/company/impact-award/badge2.png"
                  alt="Honorable Mentions Badge"
                />
              </div>
              <p className="text-[#666] text-sm">
                The cases selected as award finalists but have not emerged
                victorious in the Impact Awards will be honored with the
                Honorable Mentions prize.
              </p>
            </div>
          </div>

          {/* Participation Prize */}
          <div className="bg-[#f7f7f7] p-4 rounded-md flex md:flex-row-reverse flex-col gap-4 items-center">
            <img
              className="md:w-20 lg:w-auto"
              src="/company/impact-award/card3.png"
              alt="Participation Prize Card"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-[#a77cdb] underline decoration-[#a77cdb] decoration-2 underline-offset-2 md:text-[20px]">
                Participation Prize
              </h2>
              <p className="text-[#666] text-sm">
                This is a token of appreciation for anyone who shares a valid
                case with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardCategory;
