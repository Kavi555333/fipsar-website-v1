// import React from "react";
import bgImage from "../../assets/Partnerships_Background.svg";

import icon1 from "../../assets/Analytics & Insights/image 13.png";
import icon2 from "../../assets/Analytics & Insights/image 14.png";
import icon3 from "../../assets/Analytics & Insights/image 15.png";
import icon4 from "../../assets/Analytics & Insights/image 16.png";

import icon5 from "../../assets/CloudInfrastructu/image 6.png";
import icon6 from "../../assets/CloudInfrastructu/image7.png";
import icon7 from "../../assets/CloudInfrastructu/image8.png";

import icon8 from "../../assets/Data & Integration/image 2 (3).png";
import icon9 from "../../assets/Data & Integration/image 3 (1).png";
import icon10 from "../../assets/Data & Integration/image 4 (3).png";
import icon11 from "../../assets/Data & Integration/image 5.png";

import icon12 from "../../assets/Enterprise Systems/image 18.png";
import icon13 from "../../assets/Enterprise Systems/image 19.png";
import icon14 from "../../assets/Enterprise Systems/image 17.png";

import icon15 from "../../assets/fiesceince/image9.png";
import icon16 from "../../assets/fiesceince/image 10.png";
import icon17 from "../../assets/fiesceince/image 11.png";
import icon18 from "../../assets/fiesceince/image 12.png";

/* ---------------- Reusable Card ---------------- */

const CategoryCard = ({
  title,
  icons,
  spanFirst = false,
}: {
  title: string;
  icons: string[];
  spanFirst?: boolean;
}) => (
  <div className="w-full max-w-[220px] rounded-3xl bg-[#EAF8FF] p-6 shadow-md">
    <div className="grid grid-cols-2 gap-4 mb-4 place-items-center">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`flex items-center justify-center h-14 rounded-2xl bg-white shadow-sm ${
            spanFirst && index === 0 ? "col-span-2 w-full" : "w-14"
          }`}
        >
          <img src={icon} className="h-8" />
        </div>
      ))}
    </div>

    <div className="flex justify-center">
      <span className="rounded-full bg-white px-5 py-2 text-[10px] font-medium text-[#02A5E6] shadow-sm">
        {title}
      </span>
    </div>
  </div>
);

/* ---------------- Main Section ---------------- */

const CategoriesSection = () => {
  return (
    <section className="py-16">

      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900">
            Categories
          </h2>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#02A5E6] rounded-full" />
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div
        className="relative hidden lg:block w-full min-h-[600px] bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute left-[43%] top-[0%]">
          <CategoryCard
            title="Cloud & Infrastructure"
            icons={[icon5, icon6, icon7]}
            spanFirst
          />
        </div>

        <div className="absolute left-[70%] top-[0%]">
          <CategoryCard
            title="Analytics & Insights"
            icons={[icon1, icon2, icon3, icon4]}
          />
        </div>

        <div className="absolute left-[22%] top-[30%]">
          <CategoryCard
            title="Data & Integration"
            icons={[icon8, icon9, icon10, icon11]}
          />
        </div>

        <div className="absolute left-[43%] top-[45%]">
          <CategoryCard
            title="Life Science"
            icons={[icon15, icon16, icon17, icon18]}
          />
        </div>

        <div className="absolute left-[70%] top-[60%]">
          <CategoryCard
            title="Enterprise Systems"
            icons={[icon14, icon12, icon13]}
            spanFirst
          />
        </div>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="lg:hidden px-4">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          <CategoryCard
            title="Cloud & Infrastructure"
            icons={[icon5, icon6, icon7]}
            spanFirst
          />
          <CategoryCard
            title="Analytics & Insights"
            icons={[icon1, icon2, icon3, icon4]}
          />
          <CategoryCard
            title="Data & Integration"
            icons={[icon8, icon9, icon10, icon11]}
          />
          <CategoryCard
            title="Life Science"
            icons={[icon15, icon16, icon17, icon18]}
          />
          <CategoryCard
            title="Enterprise Systems"
            icons={[icon14, icon12, icon13]}
            spanFirst
          />
        </div>
      </div>

    </section>
  );
};

export default CategoriesSection;
