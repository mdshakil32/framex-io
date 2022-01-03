import React, { useState,useEffect } from "react";
import useItems from "../../../hooks/useItems";
import "./AddServices.css";

const AddServices = () => {
  // const [addServices, setAddServices] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  //   ratings: "",
  //   img: "",
  // });
  const [formData, setFormData] = useState({});
  const {items, addItem, deleteItem} = useItems();

   const handleChange = (e:any) => {
    const field = e.target.name;
    const newData = { ...formData, [field]: e.target.value };
    setFormData(newData);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    addItem(formData);

    e.target.reset();
  };
  // const [showServices, setShowServices] = useState([]);
  // const [showServices, setShowServices] = useState<any[]>([])

  // const handleOnChange = (e: any) => {
  //   const field = e.target.name;
  //   const newData = { ...addServices, [field]: e.target.value };
  //   setAddServices(newData);
  // };

  // const handleAddServices = (e: any) => {
  //   e.preventDefault();
  //   fetch("https://framex-server.herokuapp.com/api/product", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(addServices),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         alert("Services Added Successfully");
  //         e.target.reset();
  //       }
  //     });
  // };

  // // get all services 
  //   useEffect(()=>{
  //       fetch('https://framex-server.herokuapp.com/api/products')
  //       .then(res => res.json())
  //       .then(data => {
  //           // if(data.length !== 0){
  //               setShowServices(data);
  //           // }
  //       })
  //   },[]);

  //   console.log(showServices);

    // // delete order 
    // const handleDelete =(id:any)=>{
    //     fetch(`https://framex-server.herokuapp.com/api/products/${id}`,{
    //         method:"DELETE"
    //     })
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
    //          if(data.deletedCount === 1){
    //              alert("Confirm delete");
    //              const remaining = showServices.filter(order=> order._id !== id);
    //              setShowServices(remaining);
    //          }
    //     })
    // }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                Add Services
              </h2>
              <p className="text-gray-500 mb-6">Add services in the homepage</p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Service Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Service Name</label>
                        <input
                          type="text"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          name="title"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="desc">Service Description</label>
                        <textarea
                          id="desc"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Description"
                          name="description"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="price">Service Price</label>
                        <input
                          type="number"
                          id="price"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Price"
                          name="price"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="price">Service Ratings</label>
                        <input
                          type="number"
                          id="ratings"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Ratings"
                          name="ratings"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="img-url">Service Image url</label>
                        <input
                          type="text"
                          id="img-url"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Img url"
                          name="img"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="billing_same"
                            id="billing_same"
                            className="htmlForm-checkbox"
                          />
                          <label htmlFor="billing_same" className="ml-2">
                            My billing address is different than above.
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <input
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* table  */}
      <table className="table table-modified">
                <thead>
                    <tr className="p-2">
                    
                    <th scope="col">Product</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">ratings</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(service =>
                            <tr key={service._id} className="p-2 align-middle">                 
                                <td data-label="Product"> {service.title} </td>
                                <td data-label="Image">
                                  <img  src={service.img} alt="" /> 
                                </td>
                                {/* <td className="" data-label="Model">{service.description}</td> */}

                                <td data-label="Price">${service.price}</td>
                                <td data-label="Status">{service.ratings} </td>

                                <td data-label="Actions">
                                    {/* <button  className="btn btn-success me-1 mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</button> */}

                                    <button onClick={()=> deleteItem(service._id)}  className="del-btn" >Delete</button>
                                </td>
                            </tr>
                            )
                    }
                    
                </tbody>
            </table>
    </div>
  );
};

export default AddServices;
