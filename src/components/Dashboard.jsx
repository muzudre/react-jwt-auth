import { useEffect, useState } from "react";
import AuthUser from "../config/AuthUser";

export default function Dashboard() {
  const { http } = AuthUser();
  const [userDetail, setUserDetail] = useState("");

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    http.post("/user").then((res) => {
      setUserDetail(res.data);
    });
  };

  function renderElement() {
    if (userDetail) {
      return (
        <div>
          <h4>Name</h4>
          <p>{userDetail.name}</p>
          <h4>Email</h4>
          <p>{userDetail.email}</p>
        </div>
      );
    } else {
      return <p>Loading.....</p>;
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Dashboard page</h1>
      {renderElement()}
    </>
  );
}
