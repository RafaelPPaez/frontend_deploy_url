import useFetch from "use-http";
import { useEffect, useState } from "react";

const GetData = (tipo) => {
  const baseURL = `http://ec2-15-228-11-5.sa-east-1.compute.amazonaws.com:25000/${tipo}`;
  const { get, response } = useFetch(baseURL);
  const [data, setData] = useState([]);
  const buscar = async () => {
    const resp = await get();
    console.log(resp);
    if (response.ok) {
      setData(resp);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    buscar();
  }, []);

  return data;
};

export default GetData;
