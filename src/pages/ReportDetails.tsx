import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";

export default function ReportDetails() {
  //   const { type, id } = useParams();
  const { t } = useTranslation();

  return (
    <div className="aboutPage h-[114vh]">
      <div>
        <div className="video-background">
          <BackgroundVideo videoSrc="/about/bg-about.mp4" />
        </div>
        <div className="absolute top-30 left-10 wayOfReportsAndPublications">
          <div>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              Araşdırma və Hesabatlar
            </NavLink>
          </div>
          <div className="mt-2">
            <NavLink
              to="/academic_reports"
              className={({ isActive }) =>
                isActive ? "text-blue-500 flex" : "text-white flex"
              }
            >
              <div className="ml-3">Akademik nəşrlər</div>
            </NavLink>
            <div className="flex flex-col">
              <NavLink
                to="/academic_reports/economic_reports"
                className="ml-10 mt-1"
                style={{ color: "#7a94e5" }}
              >
                İqtisadi Tədqiqatlar
              </NavLink>
              <NavLink
                to="/academic_reports/financial_reports"
                className="ml-14 mt-1 text-slate-200"
              >
                Maliyyə Tədqiqatlar
              </NavLink>
              <NavLink
                to="/academic_reports/science_reports"
                className="ml-14 mt-1 text-slate-200"
              >
                Elmi Tədqiqatlar
              </NavLink>
            </div>
          </div>
          <div className="mt-2">
            <NavLink
              to="/academic_publications"
              className={({ isActive }) =>
                isActive ? "text-blue-500 flex" : "text-white flex"
              }
            >
              <div>Hesabatlar</div>
            </NavLink>
          </div>
        </div>

        <div className="text-white">
          <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
            <div className="w-[728px]">
              <div className="mb">
                <h1 className="text-4xl  font-semibold text-center md:text-left">
                  Google UX Design Certificate in 2025
                </h1>
                <h2 className=" text-2xl w-[90%] mt-6">
                  Will the Google UX Certificate get you a UX designer job in
                  2025? How to take the most advantage of the course curriculum.
                </h2>
                <div className="border-t-1 mt-4 border-b-1 border-gray-700 flex justify-between items-center px-2 h-[45px]">
                  <div className="flex divide-x divide-gray-700">
                    <div className="px-4">2 days ago</div>
                    <div className="flex gap-1 px-4">
                      <img src="\public\report\eye_icon.svg" alt="eye" />
                      <span>35</span>
                    </div>
                    <div className="flex gap-1 px-4">
                      <img src="\public\report\like_icon.svg" alt="like" />
                      <span>23</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-[rgba(255,255,255,0.3)] rounded-4xl hover:cursor-pointer">
                    <div className="flex gap-2">
                      {t("report.download")}
                      <img
                        src="\public\report\download_icon.svg"
                        alt="download"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-base">
                  <p>
                    Is taking the Google UX design course a good idea in 2025?
                    Is it still relevant and is it worth the time and money?
                  </p>
                  <p>
                    Even though I finished the course in 2021, when it launched,
                    and made a complete set of reviews of it on YouTube, I still
                    get asked these questions a lot.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="text-2xl font-bold">The answer isn’t easy.</h2>
                </div>
                <div className="text-base">
                  <p>
                    It all depends on your approach to learning design, your
                    goals and whether you can wait to get the first job. But
                    don’t worry. I’m here to guide you through the best possible
                    approach to learning UX in 2025. And yes, it does include
                    the Google UX Course in it. It is still worth doing but only
                    if you’re prepared for the right approach. It’s all about
                    what to focus on, what to avoid and skip and what kind of
                    expectations should you start the course with.{" "}
                  </p>
                  <p>
                    That correct approach here is really important. Otherwise
                    you may be in for an unpleasant surprise.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="text-2xl font-bold">
                    Google UX Design Certificate 2025
                  </h2>
                </div>
                <div>
                  <p>
                    People are obsessed with certificates. When I interviewed
                    junior designers back in 2021 when the course launched, 99%
                    of them mentioned they’re doing it for the Google
                    Certification.
                    <p>
                      The reason for this is obvious. It looks really good on
                      your LinkedIn and on your resume. Google is a well known,
                      established company after all.
                    </p>
                    <p>
                      In many designers minds it gives more meaning to a
                      certificate issued by the big G. Almost as if you were
                      actually hired there.
                    </p>
                    <p>
                      That effect however, is offset by overflow of Google
                      certified “designers” onto the market. Today, in February
                      of 2025, over 1.1Million people enrolled in the course.
                    </p>
                    <p>
                      Sure — only a small number actually finished the whole
                      thing, but still it’s a lot of people. Is taking the
                      Google UX design course a good idea in 2025? Is it still
                      relevant and is it worth the time and money?
                    </p>
                    Even though I finished the course in 2021, when it launched,
                    and made a complete set of reviews of it on YouTube, I still
                    get asked these questions a lot.
                  </p>
                </div>
              </div>

              <div className="bg-[#18171F] p-5 rounded-2xl gap-5 items-center text-lg flex my-7">
                <img
                  src="\public\generalIcons\exclamation_mark.svg"
                  alt="exclamation"
                />
                {t("report.restrictionEconomical")}
              </div>

              <div className="blur">
                <div className="mb">
                  <h1 className="text-4xl  font-semibold text-center md:text-left">
                    Google UX Design Certificate in 2025
                  </h1>
                  <h2 className=" text-2xl w-[90%] mt-6">
                    Will the Google UX Certificate get you a UX designer job in
                    2025? How to take the most advantage of the course
                    curriculum.
                  </h2>
                  <div className="border-t-1 mt-4 border-b-1 border-gray-700 flex justify-between items-center px-2 h-[45px]">
                    <div className="flex divide-x divide-gray-700">
                      <div className="px-4">2 days ago</div>
                      <div className="flex gap-1 px-4">
                        <img src="\public\report\eye_icon.svg" alt="eye" />
                        <span>35</span>
                      </div>
                      <div className="flex gap-1 px-4">
                        <img src="\public\report\like_icon.svg" alt="like" />
                        <span>23</span>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-[rgba(255,255,255,0.3)] rounded-4xl hover:cursor-pointer">
                      <div className="flex gap-2">
                        {t("report.download")}
                        <img
                          src="\public\report\download_icon.svg"
                          alt="download"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-base">
                    <p>
                      Is taking the Google UX design course a good idea in 2025?
                      Is it still relevant and is it worth the time and money?
                    </p>
                    <p>
                      Even though I finished the course in 2021, when it
                      launched, and made a complete set of reviews of it on
                      YouTube, I still get asked these questions a lot.
                    </p>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-2xl font-bold">
                      The answer isn’t easy.
                    </h2>
                  </div>
                  <div className="text-base">
                    <p>
                      It all depends on your approach to learning design, your
                      goals and whether you can wait to get the first job. But
                      don’t worry. I’m here to guide you through the best
                      possible approach to learning UX in 2025. And yes, it does
                      include the Google UX Course in it. It is still worth
                      doing but only if you’re prepared for the right approach.
                      It’s all about what to focus on, what to avoid and skip
                      and what kind of expectations should you start the course
                      with.{" "}
                    </p>
                    <p>
                      That correct approach here is really important. Otherwise
                      you may be in for an unpleasant surprise.
                    </p>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-2xl font-bold">
                      Google UX Design Certificate 2025
                    </h2>
                  </div>
                  <div>
                    <p>
                      People are obsessed with certificates. When I interviewed
                      junior designers back in 2021 when the course launched,
                      99% of them mentioned they’re doing it for the Google
                      Certification.
                      <p>
                        The reason for this is obvious. It looks really good on
                        your LinkedIn and on your resume. Google is a well
                        known, established company after all.
                      </p>
                      <p>
                        In many designers minds it gives more meaning to a
                        certificate issued by the big G. Almost as if you were
                        actually hired there.
                      </p>
                      <p>
                        That effect however, is offset by overflow of Google
                        certified “designers” onto the market. Today, in
                        February of 2025, over 1.1Million people enrolled in the
                        course.
                      </p>
                      <p>
                        Sure — only a small number actually finished the whole
                        thing, but still it’s a lot of people. Is taking the
                        Google UX design course a good idea in 2025? Is it still
                        relevant and is it worth the time and money?
                      </p>
                      Even though I finished the course in 2021, when it
                      launched, and made a complete set of reviews of it on
                      YouTube, I still get asked these questions a lot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
