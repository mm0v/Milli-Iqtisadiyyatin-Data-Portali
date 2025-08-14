import SendIcon from '@mui/icons-material/Send';

const MacroEconomic = () => {
  return (
    <div className="macro-economics py-6">
      <div className="w-[830px]">
        <div className="mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            <h1>Makro və mikro iqtisadi göstəricilər</h1>
          </div>
          <div className='white-board'></div>
        </div>
      </div>
      <div className="choose-date">
        <div className="date">
          <input type="date" />
        </div>
        <div className="date">
          <input type="date" />
        </div>
      </div>
      <div className="apply">
        <div className="apply-box">
          Məlumatlarınızın vizuallaşdırılmasını istəyirsinizsə, bizə müraciət edə bilərsiniz.

          <SendIcon />
        </div>
      </div>
    </div>
  )
}

export default MacroEconomic