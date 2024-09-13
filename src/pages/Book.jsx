import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlinePublish } from "react-icons/md";
const Book = () => {
  return (
    <div className="bg-[#F3F1F6] px-8 py-4">
      <h1 className="text-3xl font-semibold mb-8 capitalize  text-zinc-800">
        {" "}
        all Books
      </h1>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Book 1: Front */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src="https://authorsangeetasingh.com/wp-content/uploads/2024/02/1707723915-1.png"
              alt="Book 1"
              className="w-full md:w-auto max-w-xs hover:scale-110 transition-all ease-in-out"
            />
            <p className="mt-4 text-xl">Front</p>
          </div>

          {/* Book 2: Back */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src="https://authorsangeetasingh.com/wp-content/uploads/2024/02/1707724005-1.png"
              alt="Book 2"
              className="w-full md:w-auto max-w-xs hover:scale-110 transition-all ease-in-out"
            />
            <p className="mt-4 text-xl">Back</p>
          </div>
        </div>

        <div className="p-4 md:p-8">
          <p className="text-2xl font-semibold uppercase border-b- border-zinc-800 text-center w-full mb-6 md:mb-8">
            About the Book
          </p>
          <h1 className="text-base md:text-lg leading-relaxed mb-4 text-justify tracking-tighter">
            Kartikeya from India and Kadira from Pakistan meet in London and
            fall in love. Little do they know that their destinies were
            interwoven 43 years ago in pre-partition Delhi… The story begins on
            a Ganga ghat in Banaras, where an old sadhu shares the tale of
            courage and duty with a group of students.
          </h1>
          <h1 className="text-base md:text-lg leading-relaxed mb-6 text-justify tracking-tighter">
            Spanning the decades of 1938 to 2019 and numerous cities—Banaras,
            Dilli, Lahore, Cambridge—the narrative of “Angels with One Wing”
            takes readers on a journey of self-realization, leaving us with the
            reminder that, like angels, humanity needs both wings—individuality
            and collective support—to truly navigate the journey of life.
          </h1>
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Total Pages */}
              <div className="flex items-center gap-2">
                <IoBookOutline size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Total Pages:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">200</p>
                </div>
              </div>

              {/* Published Date */}
              <div className="flex items-center gap-2">
                <FaRegCalendar size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Published Date:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">
                    27 July, 2023
                  </p>
                </div>
              </div>

              {/* Published By */}
              <div className="flex items-center gap-2">
                <MdOutlinePublish size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Published by:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">
                    BlueRose Publishers
                  </p>
                </div>
              </div>
            </div>

            {/* Know More Button */}
            <button className="mt-4 flex items-center bg-zinc-800 text-white px-4 py-2 rounded-sm transition-all ease-in-out hover:bg-zinc-900">
              <h1 className="flex items-center gap-1 hover:gap-2 transition-all ease-in-out">
                Know More
                <span>
                  <MdOutlineArrowRightAlt size={28} />
                </span>
              </h1>
            </button>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Book 1: Front */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src="https://richardahenkorah.com/wp-content/uploads/2023/12/1701853166-1.png"
              alt="Book 1"
              className="w-full md:w-auto max-w-xs hover:scale-110 transition-all ease-in-out"
            />
            <p className="mt-4 text-xl">Front</p>
          </div>

          {/* Book 2: Back */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src="https://authorsangeetasingh.com/wp-content/uploads/2024/02/1707724005-1.png"
              alt="Book 2"
              className="w-full md:w-auto max-w-xs hover:scale-110 transition-all ease-in-out"
            />
            <p className="mt-4 text-xl">Back</p>
          </div>
        </div>

        <div className="p-4 md:p-8">
          <p className="text-2xl font-semibold uppercase border-b- border-zinc-800 text-center w-full mb-6 md:mb-8">
            About the Book
          </p>
          <h1 className="text-base md:text-lg leading-relaxed mb-4 text-justify tracking-tighter">
            Kartikeya from India and Kadira from Pakistan meet in London and
            fall in love. Little do they know that their destinies were
            interwoven 43 years ago in pre-partition Delhi… The story begins on
            a Ganga ghat in Banaras, where an old sadhu shares the tale of
            courage and duty with a group of students.
          </h1>
          <h1 className="text-base md:text-lg leading-relaxed mb-6 text-justify tracking-tighter">
            Spanning the decades of 1938 to 2019 and numerous cities—Banaras,
            Dilli, Lahore, Cambridge—the narrative of “Angels with One Wing”
            takes readers on a journey of self-realization, leaving us with the
            reminder that, like angels, humanity needs both wings—individuality
            and collective support—to truly navigate the journey of life.
          </h1>
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Total Pages */}
              <div className="flex items-center gap-2">
                <IoBookOutline size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Total Pages:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">200</p>
                </div>
              </div>

              {/* Published Date */}
              <div className="flex items-center gap-2">
                <FaRegCalendar size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Published Date:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">
                    27 July, 2023
                  </p>
                </div>
              </div>

              {/* Published By */}
              <div className="flex items-center gap-2">
                <MdOutlinePublish size={40} className="text-blue-600" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Published by:
                  </h1>
                  <p className="text-lg md:text-xl font-semibold">
                    BlueRose Publishers
                  </p>
                </div>
              </div>
            </div>

            {/* Know More Button */}
            <button className="mt-4 flex items-center bg-zinc-800 text-white px-4 py-2 rounded-sm transition-all ease-in-out hover:bg-zinc-900">
              <h1 className="flex items-center gap-1 hover:gap-2 transition-all ease-in-out">
                Know More
                <span>
                  <MdOutlineArrowRightAlt size={28} />
                </span>
              </h1>
            </button>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Book;
