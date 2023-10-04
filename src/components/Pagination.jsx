import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

export default function CustomPagination() {
  const navigate = useNavigate();

  const handlePageChange = (event, page) => {
    // Update the URL when a pagination button is clicked
    navigate(`/page/${page}`);
  };

  return (
    <>
      <div
        className="border border-success m-4 rounded-5 border-2 border-white p-1"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={10} color="primary" onChange={handlePageChange} />
        </div>
      </div>
    </>
  );
}
