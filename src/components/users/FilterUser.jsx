import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";

function FilterUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setfilter] = useState("");
  const [taluk, settaluk] = useState([]);

  useEffect(() => {
    console.log(districts[0].taluk);
  });
  //   district array

  const districts = [
    {
      dist: "Trivandrum",
      taluk: [
        { tname: "Neyyattinkara" },
        { tname: "Kattakkada" },
        { tname: "Chirayinkeezhu" },
        { tname: "Varkala" },
        { tname: "Nedumangadu" },
        { tname: "Thiruvananthapuram" },
      ],
    },
    {
      dist: "Kollam",
      taluk: [
        { tname: "Punalur" },
        { tname: "Pathanapuram" },
        { tname: "Kottarakkara" },
        { tname: "Kunnathoor" },
        { tname: "Kollam" },
        { tname: "Karunagappally" },
      ],
    },
    {
      dist: "Pathanamthitta",
      taluk: [
        { tname: "Adoor" },
        { tname: "Mallappally" },
        { tname: "Thiruvalla" },
        { tname: "Ranni" },
        { tname: "Kozhencherry" },
        { tname: "Konni" },
      ],
    },
    {
      dist: "Alappuzha",
      taluk: [
        { tname: "Cherthala " },
        { tname: "Ambalappuzha " },
        { tname: "Kuttanad " },
        { tname: "Karthikappally " },
        { tname: "Mavelikkara " },
        { tname: "Chenganoor" },
      ],
    },
    {
      dist: "Kottayam",
      taluk: [
        { tname: "Kottayam " },
        { tname: "Vaikom " },
        { tname: "Kanjirappally " },
        { tname: "Meenachil " },
        { tname: "Changanasserry " },
      ],
    },
    {
      dist: "Idukki",
      taluk: [
        { tname: "Udumbanchola" },
        { tname: "Idukki" },
        { tname: "Devikulam " },
        { tname: "Thodupuzha " },
        { tname: "Peermedu " },
      ],
    },
    {
      dist: "Ernakulam",
      taluk: [
        { tname: "Kanayannur " },
        { tname: "Kochi " },
        { tname: "Aluva " },
        { tname: "Kunnathunad " },
        { tname: "Kothamangalam " },
        { tname: "Muvattupuzha " },
        { tname: "Paravur " },
      ],
    },
    {
      dist: "Thrissur",
      taluk: [
        { tname: "Kodungallur" },
        { tname: "Chavakkad" },
        { tname: "Mukundapuram" },
        { tname: "Thrissur" },
        { tname: "Thalapilly" },
        { tname: "Chalakudy" },
        { tname: "Kunnamkulam" },
      ],
    },
    {
      dist: "Palakkad",
      taluk: [
        { tname: "Palakkad" },
        { tname: "Chittur" },
        { tname: "Alathoor" },
        { tname: "Mannarkkad" },
        { tname: "Ottappalam" },
        { tname: "Pattambi" },
      ],
    },
    {
      dist: "Malappuram",
      taluk: [
        { tname: "Perinthalmanna" },
        { tname: "Eranad" },
        { tname: "Nilambur" },
        { tname: "Tirur" },
        { tname: "Ponnani" },
        { tname: "Thiroorangadi" },
        { tname: "Kondotty" },
      ],
    },
    {
      dist: "Kozhikode",
      taluk: [
        { tname: "Kozhikode" },
        { tname: "Koyilandy" },
        { tname: "Vadakara" },
        { tname: "Thamarassery" },
      ],
    },
    {
      dist: "Wayanad",
      taluk: [
        { tname: "Mananthavady" },
        { tname: "Vythiri" },
        { tname: "Sulthan Bathery" },
      ],
    },
    {
      dist: "Kannur",
      taluk: [
        { tname: " Taliparamba " },
        { tname: "Thalassery" },
        { tname: "Kannur" },
        { tname: "Iritty" },
        { tname: "Payyannur" },
      ],
    },
    {
      dist: "Kasaragod",
      taluk: [
        { tname: " Hosdurg" },
        { tname: "Vellarikundu" },
        { tname: "Manjeshwaram" },
        { tname: "Kasaragod" },
      ],
    },
  ];

  const qualification = [
    { qual: "None" },
    { qual: "SSLC" },
    { qual: "Plus two" },
    { qual: "ITI" },
    { qual: "Diploma" },
    { qual: "UG" },
    { qual: "PG" },
    { qual: "Other" },
  ];

  const language = [
    { lan: "Malayalam" },
    { lan: "Tamil" },
    { lan: "Hindi" },
    { lan: "English" },
  ];
  const SortTaluk = districts.map((data) => {
    return data.taluk;
  });
  //   const app = SortTaluk.map((data) => {
  //     return data.tname;
  //   });

  // search data

  function handleChange(event) {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  }

  // filter list data

  function filterlist(event) {
    // console.log(event.target.value);
    let t;
    districts.map(e => { 
      if(event.target.value == e.dist)
            t = e.taluk
     });
     settaluk(t);
    //  console.log(t);
    //  console.log(taluk);
    setfilter(event.target.value);
    console.log(searchTerm);
  }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center " }}>Filter</h1>
      <div className="formContainer">
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Form.Group>
            <Form.Label>Age </Form.Label>
            <FormControl
              type="input"
              required
              name=""
              placeholder="name"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>district</Form.Label>
            <Form.Control as="select" value={filter} onChange={(e)=>filterlist(e)}>
              {districts.map((district, index) => (
                <option key={index} value= {district.dist}>
                  {district.dist}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>taluk</Form.Label>
            <Form.Control as="select" value={filter} >
              {taluk ? taluk.map((data, index) => (
                <option key={index} value={data.tname}>
                  {data.tname}
                </option>
              )):""}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Qualification</Form.Label>
            <Form.Control as="select">
              {qualification.map((data, index) => (
                <option key={index} value="">
                  {data.qual}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Languages</Form.Label>
            <Form.Control as="select">
              {language.map((data, index) => (
                <option key={index} value="">
                  {data.lan}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className="tableContainer">
        <Table>
          <thead className="tableHead">
            <tr>
              <th>SlNo</th>
              <th>Name</th>
              <th>Taluk</th>
              <th>district</th>
              <th>Age</th>
              <th>qualification</th>
              <th>language</th>
              <th>Status</th>

              <th>PrimeMember</th>
              <th>
                <FormControl
                  className="search"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </th>
              <th>
                <Button variant="light" type="">
                  <i className="fas fa-filter" />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vishnu</td>
              <td>Mannarkkad</td>
              <td>Palakkad</td>
              <td>21</td>
              <td>Diploma</td>
              <td>Malayalam</td>
              <td>1</td>
              <td>yes</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FilterUser;
