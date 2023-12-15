import {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import './App.css';
import {apiURL, filterData} from './data'
import { toast } from 'react-toastify';

function App() {

  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      const res = await fetch(apiURL);
      const output = await res.json();

      setCourses(output.data);
    }
    catch(err){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Filter category={category} setCategory={setCategory} filterData={filterData}></Filter>
      {
        loading ? (<Spinner/>) : (<Cards category={category} courses={courses}></Cards>)
      }
    </div>
  );
}

export default App;
