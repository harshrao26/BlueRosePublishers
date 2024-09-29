import React from "react";

const Contact = () => {
  return (
    <div className="bg-white px-16 ">
      <div className="rounded-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="grid grid-cols-2 ">
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
              <div className="space-y-4 divide-y-2 pb-8">
                {[
                  {
                    name: "Bengaluru office",
                    schedule: "Mon-Sat 9am to 5pm.",
                    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"
                  },
                  {
                    name: "Head office",
                    schedule: "Mon-Sat 9am to 5pm.",
                    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"
                  },
                  {
                    name: "Karnataka office",
                    schedule: "Mon-Sat 9am to 5pm.",
                    address: "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"
                  }
                ].map((office, index) => (
                  <div key={index} className="fle flex-col space-y-2 pt- ">
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
