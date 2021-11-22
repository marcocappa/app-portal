import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication";
import { Button } from "./ui/Button/Button";
import styles from "./Applications.module.css";

const LIMIT = 5;

const Applications = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [applications, setApplications] = useState([]);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const newPage = page + 1;
      const res = await fetch(
        `http://localhost:3001/api/applications?_page=${newPage}&_limit=${LIMIT}`
      );
      const data = await res.json();
      setApplications(data);
      setPage(newPage);
    } catch (err) {
      setError("Server Error!");
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className={styles.Applications}>
      {loading && (
        <div className={styles.center}>
          <p>Loading Applications...</p>
        </div>
      )}
      {!loading && error && <p data-testid="error">{error}</p>}
      {!loading && !error && applications.length > 0 && (
        <div data-testid={`page-${page}`}>
          {applications.map((application) => (
            <SingleApplication key={application.id} application={application} />
          ))}
          <div className={styles.center}>
            <Button onClick={handleGetData} data-testid="load-more">
              Load More Applicants
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
