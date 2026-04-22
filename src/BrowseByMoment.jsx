const imgCta = "http://localhost:3845/assets/5c08bd066ac6361f6cbd1d8b59fe544beef41e06.png";
const imgVector = "http://localhost:3845/assets/ea127b84058207bd7f865d56c2e998cbeb5ca93f.svg";
const imgVector1 = "http://localhost:3845/assets/572438e56e722d381f020877dfb9bf08bab091fb.svg";
const imgVector2 = "http://localhost:3845/assets/1314a8e46085f4dba96458c049c481b16fa98eea.svg";
const imgVector3 = "http://localhost:3845/assets/fb7c981eddb2542b90ab36e7363735ee977d527c.svg";
const imgVector4 = "http://localhost:3845/assets/aad4c33559e5628a51c9f4ed214977b63e5cff76.svg";
const imgVector5 = "http://localhost:3845/assets/b62985f4e2bb3a0f1625cea9470f1c87a975a9e6.svg";
const imgVector6 = "http://localhost:3845/assets/8c10a75ba4a672fd005e881dfaaa21c6b7dfa82f.svg";
const imgVector7 = "http://localhost:3845/assets/71886218d68df787c09859602c37774e14b639aa.svg";

export default function BrowseByMoment() {
  return (
    <div className="bg-[var(--colors\/background\/surface,#f5fbff)] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] px-[var(--unit\/48,48px)] py-[var(--unit\/64,64px)] relative size-full">
      <div className="col-[1/span_8] content-stretch flex flex-col gap-[var(--unit\/24,24px)] items-start justify-self-stretch relative row-1 self-start shrink-0">
        <div className="content-stretch flex gap-[var(--unit\/48,0px)] h-[70px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--unit\/8,8px)] items-start justify-center min-w-px relative">
            <div className="content-stretch flex gap-[var(--unit\/8,8px)] items-center relative shrink-0 w-full">
              <div className="bg-[var(--colors\/brand\/secondary\/500,#0095ff)] h-[2px] shrink-0 w-[32px]" />
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[1.2] relative shrink-0 text-[color:var(--colors\/icon\/secondary,#858585)] text-[length:var(--font\/size\/xs,12px)] tracking-[3.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Situational Resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[1.5] min-w-px relative text-[color:var(--colors\/brand\/primary\/700,#000082)] text-[length:var(--font\/size\/2xl,24px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Browse by Moment of Need
              </p>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
          <div className="bg-[var(--colors\/foundation\/white,white)] border border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid col-[5/span_4] content-stretch flex flex-col gap-[var(--unit\/12,12px)] items-start justify-self-stretch overflow-clip p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/md,8px)] row-1 self-start shrink-0">
            <div className="content-stretch flex flex-col gap-[var(--unit\/4,4px)] items-start relative shrink-0 w-full">
              <div className="bg-[var(--colors\/semantic\/info\/100,#d9f9f5)] content-stretch flex items-center justify-center relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%_12.5%_10.42%_12.5%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[normal] min-w-px relative text-[color:var(--colors\/text\/primary,#00003a)] text-[length:var(--font\/size\/md,16px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Representing Pfizer at an Industry Event
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12px] text-[color:var(--colors\/text\/secondary,#666)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  6
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.2] relative shrink-0 text-[color:var(--colors\/neutral\/300,#858585)] text-[length:var(--font\/size\/xs,12px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  curated resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center justify-center p-[var(--unit\/0,0px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="decoration-solid font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/text\/secondary,#666)] text-[length:var(--font\/size\/xs,12px)] underline whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Explore Resources
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute flex inset-[28.14%_17.69%_28.12%_15.62%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colors\/semantic\/info\/500,#00b7a5)] bottom-[-0.5px] h-[var(--unit\/4,4px)] left-[-0.5px] w-0" />
          </div>
          <div className="bg-[var(--colors\/foundation\/white,white)] border border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid col-[9/span_4] content-stretch flex flex-col gap-[var(--unit\/12,12px)] items-start justify-self-stretch overflow-clip p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/md,8px)] row-1 self-start shrink-0">
            <div className="content-stretch flex flex-col gap-[var(--unit\/4,4px)] items-start relative shrink-0 w-full">
              <div className="bg-[var(--colors\/semantic\/yellow\/100,#fff4d4)] content-stretch flex items-center justify-center relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[10.41%_14.57%_10.4%_12.5%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[normal] min-w-px relative text-[color:var(--colors\/text\/primary,#00003a)] text-[length:var(--font\/size\/md,16px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Managing Posting on Social Media Channels
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12px] text-[color:var(--colors\/text\/secondary,#666)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  6
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.2] relative shrink-0 text-[color:var(--colors\/neutral\/300,#858585)] text-[length:var(--font\/size\/xs,12px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  curated resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center justify-center p-[var(--unit\/0,0px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="decoration-solid font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/text\/secondary,#666)] text-[length:var(--font\/size\/xs,12px)] underline whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Explore Resources
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute flex inset-[28.14%_17.69%_28.12%_15.62%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colors\/semantic\/yellow\/500,#f3a600)] bottom-[-0.5px] h-[var(--unit\/4,4px)] left-[-0.5px] w-0" />
          </div>
          <div className="bg-[var(--colors\/foundation\/white,white)] border border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid col-[1/span_6] content-stretch flex flex-col gap-[var(--unit\/12,12px)] items-start justify-self-stretch overflow-clip p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/md,8px)] row-2 self-start shrink-0">
            <div className="content-stretch flex flex-col gap-[var(--unit\/4,4px)] items-start relative shrink-0 w-full">
              <div className="bg-[var(--colors\/semantic\/green\/100,#e1f4df)] content-stretch flex items-center justify-center relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%_4.17%_4.17%_12.5%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[normal] min-w-px relative text-[color:var(--colors\/text\/primary,#00003a)] text-[length:var(--font\/size\/md,16px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Thoroughly Vetting an External Request
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12px] text-[color:var(--colors\/text\/secondary,#666)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  6
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.2] relative shrink-0 text-[color:var(--colors\/neutral\/300,#858585)] text-[length:var(--font\/size\/xs,12px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  curated resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center justify-center p-[var(--unit\/0,0px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="decoration-solid font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/text\/secondary,#666)] text-[length:var(--font\/size\/xs,12px)] underline whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Explore Resources
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute flex inset-[28.14%_17.69%_28.12%_15.62%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colors\/semantic\/green\/500,#12b000)] bottom-[-0.5px] h-[var(--unit\/4,4px)] left-[-0.5px] w-0" />
          </div>
          <div className="bg-[var(--colors\/foundation\/white,white)] border border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid col-[7/span_6] content-stretch flex flex-col gap-[var(--unit\/12,12px)] items-start justify-self-stretch overflow-clip p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/md,8px)] row-2 self-start shrink-0">
            <div className="content-stretch flex flex-col gap-[var(--unit\/4,4px)] items-start relative shrink-0 w-full">
              <div className="bg-[var(--colors\/semantic\/red\/100,#ffe9e9)] content-stretch flex items-center justify-center relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%_4.17%_4.17%_16.67%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[normal] min-w-px relative text-[color:var(--colors\/text\/primary,#00003a)] text-[length:var(--font\/size\/md,16px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Responding to a Reporter Inquiry
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12px] text-[color:var(--colors\/text\/secondary,#666)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  6
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.2] relative shrink-0 text-[color:var(--colors\/neutral\/300,#858585)] text-[length:var(--font\/size\/xs,12px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  curated resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center justify-center p-[var(--unit\/0,0px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="decoration-solid font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/text\/secondary,#666)] text-[length:var(--font\/size\/xs,12px)] underline whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Explore Resources
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute flex inset-[28.14%_17.69%_28.12%_15.62%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colors\/semantic\/red\/500,#ff3241)] bottom-[-0.5px] h-[var(--unit\/4,4px)] left-[-0.5px] w-0" />
          </div>
          <div className="bg-[var(--colors\/brand\/secondary\/50,#f2faff)] border border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid col-[1/span_4] content-stretch flex flex-col gap-[var(--unit\/12,12px)] items-start justify-self-stretch overflow-clip p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/md,8px)] row-1 self-start shrink-0">
            <div className="content-stretch flex flex-col gap-[var(--unit\/4,4px)] items-start relative shrink-0 w-full">
              <div className="bg-[var(--colors\/brand\/secondary\/50,#f2faff)] content-stretch flex items-center justify-center relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[16.67%_4.17%_4.17%_8.33%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-[normal] min-w-px relative text-[color:var(--colors\/text\/primary,#00003a)] text-[length:var(--font\/size\/md,16px)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Preparing for a Speaking Engagement
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[12px] text-[color:var(--colors\/text\/secondary,#666)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  6
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.2] relative shrink-0 text-[color:var(--colors\/neutral\/300,#858585)] text-[length:var(--font\/size\/xs,12px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  curated resources
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <div className="content-stretch flex gap-[var(--unit\/4,4px)] items-center justify-center p-[var(--unit\/0,0px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="decoration-solid font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/text\/secondary,#666)] text-[length:var(--font\/size\/xs,12px)] underline whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Explore Resources
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute flex inset-[28.14%_17.69%_28.12%_15.62%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                          <div className="relative size-full">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colors\/brand\/secondary\/500,#0095ff)] bottom-[-0.5px] h-[var(--unit\/4,4px)] left-[-0.5px] w-0" />
          </div>
        </div>
      </div>
      <div className="col-[9/span_4] content-stretch flex flex-col gap-[var(--unit\/24,24px)] items-center justify-center justify-self-stretch overflow-clip p-[var(--unit\/24,24px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] row-1 self-stretch shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--unit\/border-radius\/sm,4px)]">
          <div className="absolute bg-[var(--colors\/brand\/primary\/700,#000082)] inset-0 rounded-[var(--unit\/border-radius\/sm,4px)]" />
          <img alt="" className="absolute max-w-none object-cover opacity-25 rounded-[var(--unit\/border-radius\/sm,4px)] size-full" src={imgCta} />
        </div>
        <div className="content-stretch flex gap-[var(--unit\/48,0px)] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--unit\/8,8px)] items-center justify-center min-w-px relative">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Semi_Bold',sans-serif)] font-[var(--font\/weight\/semi-bold,normal)] leading-[1.5] min-w-px relative text-[color:var(--colors\/foundation\/white,white)] text-[length:var(--font\/size\/3xl,28px)] text-center">
                Need a custom briefing or asset?
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-[family-name:var(--font\/family,'Noto_Sans:Regular',sans-serif)] font-normal leading-[1.5] min-w-px relative text-[color:var(--colors\/foundation\/white,white)] text-[length:var(--font\/size\/md,16px)] text-center" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Our editorial team provides bespoke support for executive-level presentations and high-stakes media interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--unit\/16,16px)] items-center justify-center overflow-clip px-[var(--unit\/24,24px)] py-[var(--unit\/12,12px)] relative shrink-0 w-full">
          <div className="bg-[var(--colors\/foundation\/white,white)] content-stretch flex gap-[var(--unit\/8,8px)] items-center justify-center p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <p className="font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/accent\/primary,#0000c9)] text-[length:var(--font\/size\/md,16px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Request Support
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[8.33%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] border-[length:var(--unit\/stroke\/sm,1px)] border-[var(--colors\/border\/subtle,#e0e0e0)] border-solid content-stretch flex gap-[var(--unit\/8,8px)] items-center justify-center p-[var(--unit\/12,12px)] relative rounded-[var(--unit\/border-radius\/sm,4px)] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <p className="font-[family-name:var(--font\/family,'Noto_Sans:Medium',sans-serif)] font-medium leading-none relative shrink-0 text-[color:var(--colors\/neutral\/50,#fcfcfc)] text-[length:var(--font\/size\/md,16px)] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                Direct Contact
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[9.37%_9.38%_9.36%_9.36%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
