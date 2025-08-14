import { useContext, useState } from 'react'
import { DataContext } from '../context/DataContex';
import SingleCard from './SingleCard';


const ListOne = () => {
    const mydata = useContext(DataContext);

    const [selectedApi, setSelectedApi] = useState<'fakeStore' | 'dummy' | 'json' | 'none'>('none');

    const handleApiSelect = (api: 'fakeStore' | 'dummy' | 'json' | 'none') => {
        setSelectedApi(api);
    };

    return (
        <>
            <div className='container'>
                <div className="d-flex justify-content-center p-5">
                    <button onClick={() => handleApiSelect('fakeStore')} style={{backgroundColor:"#830E5D", border:"none"}} className="btn btn-dark me-2">FakeStore API</button>
                    <button onClick={() => handleApiSelect('dummy')} style={{backgroundColor:"#830E5D", border:"none"}} className="btn btn-dark me-2">Dummy API</button>
                    <button onClick={() => handleApiSelect('json')} style={{backgroundColor:"#830E5D", border:"none"}} className="btn btn-dark">JSONPlaceholder API</button>
                </div>
                <div className='row'>

                    {selectedApi === 'fakeStore' &&
                        mydata?.fakeStoreApi.map((item) => (
                            <SingleCard key={item.id} userdata={item} />
                        ))}
                    {selectedApi === 'dummy' &&
                        mydata?.dummyApi.map((item) => (
                            <SingleCard key={item.id} userdata={item} />
                        ))}

                    {selectedApi === 'json' &&
                        mydata?.jsonApi.map((item) => (
                            <SingleCard key={item.id} userdata={item} />
                        ))}

                </div>


            </div>
        </>
    )
}

export default ListOne