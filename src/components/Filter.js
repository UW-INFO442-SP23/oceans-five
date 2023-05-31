import { React } from "react";

export function FilterBox(props) {
    const handleComparatorChange = (event) => {
        let value = event.target.value;
    }
    const handleComparatorChange2 = (event) => {
        let value = event.target.value;
    }
    const handleComparatorChange3 = (event) => {
        let value = event.target.value;
    }
    const handleComparatorChange4 = (event) => {
        let value = event.target.value;
    }

    return (
        <div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox text-start' name="comparators" id="comparators" onChange={handleComparatorChange}>
                    <option value="">Path</option>
                    <option value="Sand">Sand</option>
                    <option value="Grass">Grass</option>
                    <option value="Paved">Paved</option>
                    <option value="Rocky">Rocky</option>
                    <option value="Dirt">Dirt</option>
                    <option value="Gravel">Gravel</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox text-start' name="comparators" id="comparators" onChange={handleComparatorChange2}>
                    <option value="">Beach</option>
                    <option value="Sand">Sand</option>
                    <option value="Rock">Rock</option>
                    <option value="Cliff">Cliff</option>
                    <option value="River">River</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox text-start' name="comparators" id="comparators" onChange={handleComparatorChange3}>
                    <option value="">Access</option>
                    <option value="Vertical">Private</option>
                    <option value="Horizontal">Public</option>
                    <option value="Vertical and Horizontal">Public and Private</option>
                </select>
            </div>
            <div className="d-inline-block m-1">
                <select className='form-select mb-4 filterbox text-start' name="comparators" id="comparators" onChange={handleComparatorChange4}>
                    <option value="">Services</option>
                    <option value="Vertical">Vertical</option>
                    <option value="Horizontal">Horizontal</option>
                    <option value="Vertical and Horizontal">Vertical and Horizontal</option>
                </select>
            </div>
        </div>
    )

}