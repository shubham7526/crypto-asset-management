import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import './App.css';

const App = ()=>{
  const[data, setData]=useState([]);
  const[filterExchange, setFilterExchange] = useState([])
  const [id, setId] = useState(1);

  
    const createAssetList=(newData)=>{
      setId(id+1)
      newData.id = id;

      let reverseData = [...data, newData].sort((a, b) => (a.id < b.id) ? 1 : -1);
      setData(reverseData);
      setFilterExchange(reverseData);
    }

    const handleChange=(evt)=>{
      const { value }= evt.target;
      if(value==="All"){
          // let filterExchange = data;
          setFilterExchange(data); 
      }else{
        let filterExchange = data.filter(asset=> asset.exchangeName===value);
        setFilterExchange(filterExchange); 
      }
      
    }


    return(

      <Router createAssetList={createAssetList} data={data} handleChange={handleChange} filterExchange={filterExchange}/>
    )
}

export default App;
