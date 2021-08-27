import React, { useEffect, useState } from "react";
import { post } from "../../utils/agent";

function ApplieduseList(props) {
  const [para, setPara] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(props.match.params);
    // setPara(props.match.params);
    fetchData();
  }, []);
  //   fetch Users
  let status = list.status;

  const fetchData = async () => {
    await post("/user/filter", { _id: props.match.params.id })
      .then((result) => {
        console.log(result.body);
        setList(result.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 className="inner-container"></h1>
      {status === true ? <h1>{list.message}</h1> : <h1>list coming soon</h1>}
    </div>
  );
}

export default ApplieduseList;
