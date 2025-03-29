// import { Button } from "bootstrap/dist/js/bootstrap.bundle";

import { useState, useEffect } from "react";

function Detial() {
  const [dataa, setData] = useState(""); // Stores input value
  const [sdata, setSdata] = useState(""); // Stores submitted search value
  const [city, setCity] = useState(null); // Stores API response data
  const [error, setError] = useState(null); // Stores API error message

  // Handle input change
  function Mi(e) {
    setData(e.target.value);
  }

  // Handle form submission
  function Mfunc(e) {
    e.preventDefault();
    if (dataa.trim() !== "") {
      setSdata(dataa); // Update search data
      setData(""); // Clear input field
    }
  }

  // Fetch weather data when `sdata` updates
  useEffect(() => {
    if (sdata) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${sdata}&appid=8f968b3fc52ba01cf6113b065b99654a&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found!");
          }
          return response.json();
        })
        .then((data) => {
          setCity(data); // Store fetched data in state
          setError(null); // Clear any previous errors
          console.log(data);
        })
        .catch((err) => {
          setError(err.message);
          setCity(null);
        });
    }
  }, [sdata]);

  return (
    <div className="main">
      <form onSubmit={Mfunc}>
        <input
          type="text"
          name="dihaz"
          value={dataa}
          onChange={Mi}
          placeholder="Enter city name"
        />
        <button type="submit">Submit</button>
      </form>

      {error ? (
        <h1>{error}</h1>
      ) : city ? (
        <div className="main1">
          <h2>ID: {city.id}</h2>
          <h2>Name: {city.name}</h2>
          <h3>Weather: {city.weather?.[0]?.description}</h3>
          <h3>Temperature: {city.main?.temp}°C</h3>
            <h2>Name: {city.name}</h2>
        </div>
      ) : (
        <h2>Enter a valid city name</h2>
      )}
    </div>
  );
}

export default Detial;



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Fform()
// {
//      let [data,setdata]=useState({
//     name:"",
//     emial:"",
//     phone:"",
//     age:""

// });

//     function Change(event)
//     {
//         let oldvalue={...data}
//         let getname=event.target.name;
//         let  getvalue=event.target.value;

//         oldvalue[getname]=getvalue;
//         setdata(oldvalue);

//     }

//     let [sum,setsum]=useState([])

//     function Sumit(event)
//     {
//         event.preventDefault()
//         let exist=false;
//         sum.map((item)=>
//         {
//             if(item.name==data.name)
//                 return(
//             exist=true
//             )
//         })
//         if(exist)
//         {
//                 alert(`all ready exist ${data.name}`)
//             return;
//         }

//         let curr={
//            name:data.name,
//            emial:data.emial,
//            phone:data.phone,
//            age:data.age
//         }

//         let alldata=[...sum,curr];
//         setsum(alldata)

//      let va={ name:"",emial:"", phone:"", age:"" }
//       setdata(va)
//       console.log(alldata)
//      console.log(curr)
//     }

//     const de = (index) => {
//         // Show the clicked index

//         let alldata = sum.filter((item, i) => i !== index );

//         setsum(alldata);
//     };
//     function up(index)
//     {
//      let reqobj=sum[index];
//      let valuee={
//         name:reqobj.name,
//         emial:reqobj.emial,
//         phone:reqobj.phone,
//         age:reqobj.age

//      }
//        reqobj.name=data.name;
//        reqobj.age=data.age;
//        reqobj.phone=data.phone;
//        reqobj.emial=data.emial;

//        setdata(valuee)
//     setsum([...sum])

//     }

//     return(

//         <div className="container-fluid bg-danger btn">
//           <div className="containaer contain" >
//             <div className="row ">
//                 <div className="col-3 ">

//                     <h1>USER</h1>
//                     <form onSubmit={Sumit} >
//                         <br></br>
//                     <label>
//                             Name:
//                             <input onChange={Change} name="name" value={data.name}  placeholder="Type name"></input>
//                         </label>
//                         <br></br>
//                         <label>
//                             Email:
//                             <input onChange={Change} name="emial" value={data.emial}  placeholder="Type name"></input>
//                         </label>
//                         <br></br>
//                         <label>
//                            Phone :
//                             <input onChange={Change} name="phone" value={data.phone}   placeholder="Type name"></input>
//                         </label>
//                         <br></br>
//                         <label>
//                             age:
//                             <input onChange={Change} name="age" value={data.age}   placeholder="Type name"></input>
//                         </label>
//                         <br></br>
//                         <button className="btn btn-primary sar">Save</button>

//                     </form>

//                         <div className="col-2">
//                             <Table striped bordered hover>
//                                 <thead>
//                                    <tr>
//                                     <th>
//                                       id
//                                     </th>
//                                     <th>
//                                         name
//                                     </th>
//                                     <th>
//                                         email
//                                     </th>

//                                     <th>
//                                         phone
//                                     </th>
//                                     <th>
//                                         age
//                                     </th>
//                                     <th colSpan={2}>
//                                         status
//                                     </th>
//                                    </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         sum.length>0 ?

//                                             sum.map((object,index)=>{
//                                                 return(
//                                                     <tr>
//                                                     <td key={index}>{index}</td>
//                                                     <td>{object.name}</td>
//                                                     <td>{object.emial}</td>
//                                                     <td>{object.age}</td>
//                                                     <td>{object.phone}</td>
//                                                   <td><button key={index} onClick={()=>de(index)}>delete </button></td>
//                                                   <td><button key={index} onClick={()=>up(index)}>update </button></td>
//                                                   </tr>
//                                                 )
//                                             }

//                                            )
//                                        :
//                                       <tr><td colSpan={6}> data not found</td></tr>
//                                     }

//                                 </tbody>
//                             </Table>

//                         </div>

//                 </div>
//             </div>
//           </div>
//         </div>
//     )

// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// // import React, { useState } from "react";
// // import { Button } from "bootstrap";
// // import { LC, NC, SC, UC } from "./DATA";

// // function Fform() {
// //   let [upper,setupper]=useState(true);
// //   let [lower,setlower]=useState(true);
// //     let a="Anila"
// //    let c=a.charAt[2]
// //     console.log(c)

// //   let [num,setnum]=useState(true);

// //   let [symbol,setsymbol]=useState(true);
// //   let [v,setv]=useState()
// //   let [pass,setpass]=useState(10)
// //  function creation()
// //  {

// //   let final=""
// //   let value="";
// //   if(upper || lower || num || symbol)
// //   {
// //     if(upper)
// //     {
// //       value+=UC;
// //     }
// //     if(lower)
// //       {
// //         value+=LC;
// //       }
// //       if(num)
// //         {
// //           value+=NC;
// //         }
// //         if(Symbol)
// //           {
// //             value+=SC;
// //           }
   
    
// //     for(let i=0;i<pass;i++)
// //     {
// //        final+=value.charAt(Math.floor(Math.random()*value.length))
// //     }
// //   setv(final)

// //   }
// //   else
// //   {
// //    value=""
// //    setv(value)
// //   }
 
// //  }

// //   return (
// //     <div className="body">
// //       <div className="password">
// //         <h3>password</h3>
// //         <div className="pass">
// //         <input type="text" className="inp" value={v}  />

// //         </div>

// //         <div className="pw">
// //           <label>
// //             pasword lengt <input type="number" max={20} min={10} value={pass} onChange={(event)=>setpass(event.target.value)} className="bt"></input>
// //           </label>
// //         </div>
// //         <div className="t">
// //           <label>
// //             upper case <input checked={upper} onClick={()=>setupper(!upper)} type="checkbox"></input>
// //           </label>
// //         </div>
// //         <div className="t">
// //           <label>
// //             lower case <input type="checkbox" checked={lower} onClick={()=>setlower(!lower)}></input>
// //           </label>
// //         </div>
// //         <div className="t">
// //           <label>
// //             numb case <input type="checkbox" checked={num} onClick={()=>setnum(!num)}></input>
// //           </label>
// //         </div>
// //         <div className="t">
// //           <label>
// //             symbl case <input type="checkbox" checked={symbol} onClick={()=>setsymbol(!symbol)}></input>
// //           </label>
// //         </div>
// //         <button className="btnn" onClick={creation}>generation</button>
// //       </div>
// //     </div>
// //   );
// // }

//  export default Fform;