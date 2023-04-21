import { useEffect } from 'react';

import MuatationRef from './components/useRef/MuatationRef';
import { useAction } from './helpers/useAction';
import { useTypeSelector } from './helpers/useTypeSelector';

function App() {
  const api = (process.env.REACT_APP_SOME_CONFIGURATION);
  console.log(api)
  // interface PostItem {
  //   id: number,
  //   title: string,
  // }

  const { fetchData } = useAction()
  const { data, err, loading } = useTypeSelector(state => state.fetchData);

  useEffect(() => {

    fetchData()
    // react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <h1>List User</h1>
      {loading && <h3>Loading ....</h3>}
      <ul>
        {data && data.length > 0 && data.map((item, id) => {
          return (
            <li key={id}>{JSON.stringify(item)}</li>
          )
        })}

      </ul>

      <MuatationRef />
    </div>
  );
}

export default App;
