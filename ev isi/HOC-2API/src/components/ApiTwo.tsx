import { useState } from "react";
import HocApis from "./HocApis";
import SingleCard from "./SingleCard";

const ApiTwo = (props: any) => {
  const { fakeStoreApi } = props;

  const [selectedApi, setSelectedApi] = useState<'fakeStore' | 'dummy' | 'none'>('none');

  const handleApiSelect = (api: 'fakeStore' | 'dummy' | 'none') => {
    setSelectedApi(api);
  };

  return (


    <>
      <div className="container">
        <div className="d-flex justify-content-center p-5">
          <button onClick={() => handleApiSelect('fakeStore')} style={{ backgroundColor: "#17214E", border: "none" }} className="btn btn-dark me-2">FakeStore API</button>
        </div>

        <div className="row">
          {selectedApi === 'fakeStore' &&
            fakeStoreApi.map((item: any) => (
              <SingleCard key={item.id} userdata={item} />
            ))}

        </div>
      </div>
    </>
  );
};

export default HocApis(ApiTwo);
