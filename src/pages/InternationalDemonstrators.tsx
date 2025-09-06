import { Link, Outlet, useMatch } from "react-router-dom";
import IconAccordion from "/report/IconAccordion.png";
import { useTranslation } from "react-i18next";

const InternationalDemonstrators = () => {
  const { t } = useTranslation()
  const isGlobal = useMatch("/analytics/international_demonstrators");

  if (!isGlobal) {
    return <Outlet />;
  }
  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
      <div className="w-[830px]">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left">
            <h1>{t('analytic.demonstrators')}</h1>
          </h1>
        </div>
        <div className="text-white">
          <Link to={"/analytics/international_demonstrators/global_innovation"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.global')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/international_demonstrators/ai_readness"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.aiIndex')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/international_demonstrators/e_gov"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.eGov')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InternationalDemonstrators