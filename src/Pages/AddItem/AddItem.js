import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";

const AddItem = () => {
  const nameref = useRef();

  const handleAddService = (e) => {
    const name = nameref.current.value;

    const newService = { name };

    fetch("https://rocky-lake-90720.herokuapp.com/AddData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully Added service");
          e.target.reset();
        }
      });

    e.eventDefault();
  };

  const [addData, setAddData] = useState([]);

  useEffect(() => {
    fetch("https://rocky-lake-90720.herokuapp.com/AddData")
      .then((res) => res.json())
      .then((data) => setAddData(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://rocky-lake-90720.herokuapp.com/AddData/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = addData.filter((AddData) => AddData._id !== id);
            setAddData(remaining);
          }
        });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navigation></Navigation>
      <form onSubmit={handleAddService}>
        <input
          type="text"
          style={{
            width: "800px",
            border: "2px solid black",
            height: 35,
            marginTop: 15,
            borderRadius: "5px",
            opacity: "0.6",
          }}
          ref={nameref}
        />
        <input
          style={{
            backgroundColor: "crimson",
            border: "none",
            borderRadius: "5px",
            height: 30,
            color: "white",
            marginLeft: "10px",
          }}
          type="submit"
          value="Add"
        />
      </form>

      <table style={{ margin: "auto", marginTop: "20px" }}>
        <tbody>
          {addData.map((singleAddData) => (
            <tr
              style={{
                color: "white",
                height: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "crimson",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "20px",
                  height: "35px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: 700,
                    textAlign: "start",
                    marginLeft: "10px",
                  }}
                >
                  {singleAddData.name}
                </div>
                <button
                  onClick={() => handleDelete(singleAddData._id)}
                  style={{
                    fontSize: "10px",
                    borderRadius: "50px",
                    height: "20px",
                    marginTop: "5px",
                    border: "none",
                    marginRight: "5px",
                  }}
                >
                  X
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddItem;
