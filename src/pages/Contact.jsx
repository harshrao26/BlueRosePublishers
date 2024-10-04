import React from "react";

const Contact = () => {
  return (
    <div className="bg-white px-8 sm:px-16">
      <div className="rounded-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
              {/* Left Section - Title */}
              <div className="space-y-4">
                <p className="w-full text-3xl md:text-4xl font-bold text-zinc-900">
                  Our Offices
                </p>
                <p className="w-full text-lg text-zinc-600">
                  Find us at these locations.
                </p>
              </div>

              {/* Right Section - Office Locations */}
              <div className="flex flex-col space-y-4 divide-y-2 pb-8">
                {[
                  {
                    name: "Corporate office",
                    schedule: "Mon-Sat 9:30am to 6:30pm.",
                    address:
                      "Naagarabhavi, Bangalore 3rd Floor, Tushar Arcade, Service Road, Bengaluru, Karnataka 560072",
                  },
                  {
                    name: "Indore office",
                    schedule: "Mon-Sat 9:30am to 6:30pm.",
                    address:
                      "3, Aditya Nagar, Vishnu Puri Colony, Indore, Madhya Pradesh 452014",
                  },
                  {
                    name: "Mumbai office",
                    schedule: "Mon-Sat 9:30am to 6:30pm.",
                    address:
                      "Tower 4, 5, Vashi Railway Station Rd, Sector 30, Vashi, Navi Mumbai, Maharashtra 402107",
                  },
                  {
                    name: "Lucknow office",
                    schedule: "Mon-Sat 9:30am to 6:30pm.",
                    address:
                      "2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021",
                  },
                ].map((office, index) => (
                  <div key={index} className="flex flex-col space-y-2 ">
                    <p className="w-full text-xl md:text-2xl font-semibold text-zinc-900">
                      {office.name}
                    </p>
                    <p className="w-full text-base text-zinc-600">
                      {office.schedule}
                    </p>
                    <p className="text-sm font-semibold text-zinc-600">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
