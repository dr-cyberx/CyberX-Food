import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limits: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      console.log("hello");
    } catch (err) {
      setErrorMessage("Oops! Something went wrong");
      console.log('bye')
    }
  };

  return [searchApi, result, errorMessage];
};
