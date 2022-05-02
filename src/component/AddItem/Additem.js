import React from 'react';

const Additem = () => {

    const handleAddItem = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const picture = e.target.picture.value;
        console.log(name, price, quantity, supplier, description, picture);
    }



    return (
      <div className="my-10">
        <div className="block p-6 rounded-lg shadow-lg bg-white md:w-1/2 mx-auto">
          <h1 className="text-center text-xl md:text-3xl font-bold mb-10">
            <span className="border-b-2 pb-2 border-red-400">
              Add An <span className="text-red-800">Item</span>
            </span>
          </h1>
          <form onSubmit={handleAddItem}>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                name="name"
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Car Name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                name="supplier"
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Supplier Name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                name="quantity"
                type="number"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleNumber0"
                placeholder="Stock Quantity"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                name="price"
                type="number"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleNumber0"
                placeholder="Price"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                name="picture"
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Image Url"
                required
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                name="description"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
};

export default Additem;