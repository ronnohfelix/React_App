//import { Fragment } from "react";
import { useState } from "react";
function ListGroup () {
    let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        /*<Fragment>
            <h1>List Group</h1>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </Fragment>*/
        <>
            <h1>List Group</h1>
            {items.length === 0 && <div className="alert alert-danger">No items found</div>}
            <ul className="list-group">
              {items.map((item, index) => (
                <li
                    className={
                        selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                >
                    {item}
                </li>
              ))}
            </ul>
        </>
      );
}

export default ListGroup;