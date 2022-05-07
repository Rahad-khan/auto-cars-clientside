import React from 'react';

const Blog = () => {
    return (
      <div className="md:w-4/5 p-4 md:p-0 mx-auto my-10">
        <div>
          <h1 className="text-2xl font-bold mb-3">
            1. Difference between Javascript and Node.JS ?
          </h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-lg">
                  <table className="min-w-full border text-center ">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 border-r"
                        >
                          JavaScript
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 border-r"
                        >
                          Node
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          JavaScript is a scripting/Programming Language.
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Node JS is javascript runtime envirinment
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Javascript run in only browser
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          By the help of Node.js we can run javascript outside
                          of browser
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Javascript is mainly used for front-end development
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Node.Js is mainly used for Back-end/ Server-Side
                          development
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Javascript frameWork example : 1.React.js,
                          2.Angular.js, 3.Vue.js
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Node.JS frameWork example : 1.Express.js
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-2xl font-bold mb-3">
            2. When should you use Nodejs and when should you use Mongodb ?
          </h1>
          <p>
            NodeJS is a javascript runtime environment.It help's run operation
            outside of browser.By the help of node js we can create CRUD
            operation. Like Create a data ,Read data, Update any existing data
            or delete any data.Main thing is that bye the help of node js we can
            run operations from client side.
          </p>
          <p>
            MOngo DB is NoSQL database system. which is document oriented and
            stored data as a json file.Mainly used for stored data.Database use
            for stored data of our applications and when we need we can filter
            out any data from data base as we need.
          </p>
          <p>
            So MongoDB is a data base where we stored data And Node js helps to
            connect client side to database by Server Side .
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">
            3. Difference between SQL and NoSQL ?
          </h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-lg">
                  <table className="min-w-full border text-center ">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 border-r"
                        >
                          SQL
                        </th>
                        <th
                          scope="col"
                          className="text-lg font-medium text-gray-900 px-6 py-4 border-r"
                        >
                          NoSQL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Vertically Scalable
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          Horizontally scalable
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          SQL databases defines and manipulates data based
                          structured query language
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          NoSQL database has dynamic schema for unstructured
                          data.
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          SQL databases are table-based
                        </td>
                        <td className="text-sm  px-6 py-4 whitespace-nowrap border-r">
                          NoSQL databases are key-value pairs, document-based,
                          graph databases or wide-column stores.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-2xl font-bold mb-3">
            4. What is the purpose of jwt and how does it work?
          </h1>
          <ul className="list-disc">
            <h1 className="text-lg font-semibold my-2">Purpose of jwt :</h1>
            <li>
              <strong>Authorization: </strong>
              This is the most common scenario for using JWT. Once the user is
              logged in, each subsequent request will include the JWT, allowing
              the user to access routes, services, and resources that are
              permitted with that token.
            </li>
            <li>
              <strong>Information Exchange: </strong>
              JSON Web Tokens are a good way of securely transmitting
              information between parties.
            </li>
          </ul>
          <p><strong>Working Procedure: </strong>
          When user create an account or signed in by an account a jwt is generated and send it to client side. Whenever user wants to access privvate route the user  should sent typically JWT by Authorization using <strong>Bearer</strong> schema and then backend will verify the jwt and then user will be access private route</p>
        </div>
      </div>
    );
};

export default Blog;