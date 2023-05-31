import { React } from "react";

export function FilterBox(props) {
    const handleComparatorChange = (event) => {
        let value = event.target.value;
    }

    return (
        <div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox' name="comparators" id="comparators" onChange={handleComparatorChange}>
                    <option value=">">Beach</option>
                    <option value="Vertical">Vertical</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical and Horizontal">Vertical and Horizontal</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox' name="comparators" id="comparators" onChange={handleComparatorChange}>
                    <option value=">">Path</option>
                    <option value="Vertical">Vertical</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical and Horizontal">Vertical and Horizontal</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox' name="comparators" id="comparators" onChange={handleComparatorChange}>
                    <option value=">">Access</option>
                    <option value="Vertical">Vertical</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical and Horizontal">Vertical and Horizontal</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox' name="comparators" id="comparators" onChange={handleComparatorChange}>
                    <option value=">">Services</option>
                    <option value="Vertical">Vertical</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical and Horizontal">Vertical and Horizontal</option>
                </select>
            </div>
        </div>
    )

}