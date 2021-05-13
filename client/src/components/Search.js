import React, { useState, useEffect } from "react";
import FormControl from "./FormControl";
<<<<<<< HEAD
import axios from "axios";
=======
import { submitSearch } from "../services/jobApiServices";
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9

const initialSearchState = { location: null, search: null };

const Search = (props) => {
  const { setSearchStatus, searchStatus, getJobList } = props;
  const [search, setSearch] = useState(initialSearchState);

  const submitHandler = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    await axios
      .post(`${process.env.REACT_APP_URL}/submit-search`, search)
      .then((response) => {
        setSearchStatus({
          ...searchStatus,
          initiate: false,
          loading: true,
          message: response.data.message,
        });
        getJobList();
      })

      .catch((error) => {
        console.log(error);
        alert("Somethink went wrong, Please try again");
      });
=======
    const data = await submitSearch(search);
    await setSearchStatus({
      ...searchStatus,
      initiate: false,
      loading: true,
      message: data.message,
    });
    getJobList();
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
  };

  const onchnageHandler = async (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  // useEffect(()=>{

  // },[])

=======
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
  return (
    <>
      <div className="welcome">
        <h1>Welcome to DevJobs</h1>
      </div>

      <form onSubmit={submitHandler} className="search">
        <FormControl
          control="input"
          type="text"
          placeholder="Location"
          name="location"
          onChange={onchnageHandler}
        />

        <FormControl
          control="input"
          type="text"
          placeholder="Find your dream job now"
          name="search"
          onChange={onchnageHandler}
        />

<<<<<<< HEAD
        <FormControl control="input" type="submit" name="submit" />
=======
        <FormControl
          control="input"
          type="submit"
          name="submit"
          className="searchbtn"
        />
>>>>>>> 1aa6d11a8fc375c02cfafe33c8c815a8f4363df9
      </form>
    </>
  );
};

export default Search;
