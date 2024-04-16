const TableFooter = ({ isLoading, visibleColleges, totalCount }) => {
    return (
      <tfoot>
        {isLoading && visibleColleges < totalCount && (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              Loading next 10 colleges...
            </td>
          </tr>
        )}
      </tfoot>
    );
  };
  
  export default TableFooter;