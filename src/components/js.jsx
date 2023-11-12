function Cardapi() {
    const [dataapi, setDataapi] = useState([]);
console.log("my data ",dataapi)


//useEffest: emety arrey in time create karna ka lia.
    useEffect( async ()=>{
      try {
        const data = await axios.get(apilink)
// .then((response)=>{
// console.log("data hamara ",data);
setDataapi(data.data);

//     })


// console.log(data.data)
      } catch (error) {
        console.log(error)
      }

    },[])}S