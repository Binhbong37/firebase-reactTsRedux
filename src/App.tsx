import { useEffect } from 'react';

import MuatationRef from './components/useRef/MuatationRef';
import { useAction } from './helpers/useAction';
import { useTypeSelector } from './helpers/useTypeSelector';

function App() {
  // interface PostItem {
  //   id: number,
  //   title: string,
  // }

  const { fetchData } = useAction()
  const { data, err, loading } = useTypeSelector(state => state.fetchData);
  console.log(data, err)

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
