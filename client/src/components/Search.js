import React, { useState, useEffect } from "react";
import FormControl from "./FormControl";
import { submitSearch } from "../services/jobApiServices";

const initialSearchState = { location: null, search: null };

const Search = (props) => {
  const { setSearchStatus, searchStatus, getJobList } = props;
  const [search, setSearch] = useState(initialSearchState);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await submitSearch(search);
    await setSearchStatus({
      ...searchStatus,
      initiate: false,
      loading: true,
      message: data.message,
    });
    getJobList();
  };

  const onchnageHandler = async (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

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

        <FormControl control="input" type="submit" name="submit" />
      </form>
    </>
  );
};

export default Search;
