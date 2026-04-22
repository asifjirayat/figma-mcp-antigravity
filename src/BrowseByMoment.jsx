import imgCta from "./assets/images/CTA.png";
import imgVector1 from "./assets/images/Card/fluent_share-screen-person-24-regular.svg";
import imgVector2 from "./assets/images/Card/fluent_building-multiple-24-regular.svg";
import imgVector3 from "./assets/images/Card/fluent_share-android-24-regular.svg";
import imgVector4 from "./assets/images/Card/fluent_shield-checkmark-24-regular.svg";
import imgVector5 from "./assets/images/Card/fluent_mic-record-24-regular.svg";
import imgVector6 from "./assets/images/Card/fluent_arrow-right-24-regular.svg";
import imgVector7 from "./assets/images/UI/fluent_headphones-24-regular.svg";
import imgVector8 from "./assets/images/UI/fluent_send-24-regular.svg";

export default function BrowseByMoment() {
  return (
    <div className="bg-slate-50 px-6 py-10 lg:px-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section: Moments */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col justify-center mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 h-0.5 w-8" />
              <p className="font-medium text-gray-500 text-xs tracking-widest uppercase">
                Situational Resources
              </p>
            </div>
            <h2 className="text-blue-900 text-2xl lg:text-3xl font-medium mt-2">
              Browse by Moment of Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-4 bg-white border border-gray-200 flex flex-col gap-3 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="bg-sky-50 flex items-center justify-center rounded w-8 h-8">
                  <img alt="" className="w-5 h-5" src={imgVector1} />
                </div>
                <h3 className="font-medium text-blue-950 text-base leading-tight">
                  Preparing for a Speaking Engagement
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span className="font-bold text-gray-600 text-xs">6</span>
                <span className="text-gray-500 text-xs">curated resources</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1 group">
                  <span className="font-medium text-gray-600 text-xs underline decoration-gray-300 group-hover:decoration-gray-500 underline-offset-2">
                    Explore Resources
                  </span>
                  <img
                    alt=""
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    src={imgVector6}
                  />
                </button>
              </div>
              <div className="absolute bg-blue-500 bottom-0 left-0 w-full h-1" />
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 bg-white border border-gray-200 flex flex-col gap-3 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="bg-teal-50 flex items-center justify-center rounded w-8 h-8">
                  <img alt="" className="w-5 h-5" src={imgVector2} />
                </div>
                <h3 className="font-medium text-blue-950 text-base leading-tight">
                  Representing Pfizer at an Industry Event
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span className="font-bold text-gray-600 text-xs">6</span>
                <span className="text-gray-500 text-xs">curated resources</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1 group">
                  <span className="font-medium text-gray-600 text-xs underline decoration-gray-300 group-hover:decoration-gray-500 underline-offset-2">
                    Explore Resources
                  </span>
                  <img
                    alt=""
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    src={imgVector6}
                  />
                </button>
              </div>
              <div className="absolute bg-teal-500 bottom-0 left-0 w-full h-1" />
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 bg-white border border-gray-200 flex flex-col gap-3 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="bg-yellow-50 flex items-center justify-center rounded w-8 h-8">
                  <img alt="" className="w-5 h-5" src={imgVector3} />
                </div>
                <h3 className="font-medium text-blue-950 text-base leading-tight">
                  Managing Posting on Social Media Channels
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span className="font-bold text-gray-600 text-xs">6</span>
                <span className="text-gray-500 text-xs">curated resources</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1 group">
                  <span className="font-medium text-gray-600 text-xs underline decoration-gray-300 group-hover:decoration-gray-500 underline-offset-2">
                    Explore Resources
                  </span>
                  <img
                    alt=""
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    src={imgVector6}
                  />
                </button>
              </div>
              <div className="absolute bg-yellow-500 bottom-0 left-0 w-full h-1" />
            </div>

            {/* Card 4 */}
            <div className="md:col-span-6 bg-white border border-gray-200 flex flex-col gap-3 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="bg-green-50 flex items-center justify-center rounded w-8 h-8">
                  <img alt="" className="w-5 h-5" src={imgVector4} />
                </div>
                <h3 className="font-medium text-blue-950 text-base leading-tight">
                  Thoroughly Vetting an External Request
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span className="font-bold text-gray-600 text-xs">6</span>
                <span className="text-gray-500 text-xs">curated resources</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1 group">
                  <span className="font-medium text-gray-600 text-xs underline decoration-gray-300 group-hover:decoration-gray-500 underline-offset-2">
                    Explore Resources
                  </span>
                  <img
                    alt=""
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    src={imgVector6}
                  />
                </button>
              </div>
              <div className="absolute bg-green-600 bottom-0 left-0 w-full h-1" />
            </div>

            {/* Card 5 */}
            <div className="md:col-span-6 bg-white border border-gray-200 flex flex-col gap-3 p-4 rounded-lg relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="bg-red-50 flex items-center justify-center rounded w-8 h-8">
                  <img alt="" className="w-5 h-5" src={imgVector5} />
                </div>
                <h3 className="font-medium text-blue-950 text-base leading-tight">
                  Responding to a Reporter Inquiry
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span className="font-bold text-gray-600 text-xs">6</span>
                <span className="text-gray-500 text-xs">curated resources</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="flex items-center gap-1 group">
                  <span className="font-medium text-gray-600 text-xs underline decoration-gray-300 group-hover:decoration-gray-500 underline-offset-2">
                    Explore Resources
                  </span>
                  <img
                    alt=""
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    src={imgVector6}
                  />
                </button>
              </div>
              <div className="absolute bg-red-500 bottom-0 left-0 w-full h-1" />
            </div>
          </div>
        </div>

        {/* Right Section: CTA */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-lg relative overflow-hidden shadow-lg mt-8 lg:mt-0">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-blue-950" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imgCta})` }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold leading-tight">
              Need a custom briefing or asset?
            </h2>
            <p className="text-blue-50 text-base max-w-sm">
              Our editorial team provides bespoke support for executive-level
              presentations and high-stakes media interaction.
            </p>

            <div className="flex flex-col w-full gap-3 mt-4">
              <button className="bg-white hover:bg-gray-50 text-blue-800 font-medium py-3 px-4 rounded shadow flex items-center justify-center gap-2 transition-colors w-full">
                <span>Request Support</span>
                <img alt="" className="w-5 h-5" src={imgVector7} />
              </button>

              <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors w-full backdrop-blur-sm">
                <span>Direct Contact</span>
                <img alt="" className="w-5 h-5" src={imgVector8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
