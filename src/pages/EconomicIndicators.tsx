import { Link, Outlet, useMatch } from "react-router-dom";
import IconAccordion from "/report/IconAccordion.png";
import { useTranslation } from "react-i18next";


const EconomicIndicators = () => {
  const { t } = useTranslation();

  const isEconomic = useMatch("/analytics/economic_indicators");

  if (!isEconomic) {
    return <Outlet />;
  }

  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
      <div className="w-[830px]">
        <div className="mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left">
            <h1> {t('analytic.indicators')}</h1>
          </div>
        </div>
        <div className="text-white">
          <Link to={"/analytics/economic_indicators/macro"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.macro')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/economic_indicators/sector"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.sectors')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/economic_indicators/demo"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.demo')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>

          <Link to={"/analytics/economic_indicators/state_services"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.state')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/economic_indicators/crime"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.crime')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
          <Link to={"/analytics/economic_indicators/labor_market"}>
            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
              <div>
                <h1>{t('analytic.market')}</h1>
              </div>
              <div>
                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default EconomicIndicators;