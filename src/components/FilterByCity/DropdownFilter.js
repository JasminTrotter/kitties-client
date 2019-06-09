import React from 'react';

export default function DropdownFilter() {
    return (
        <form className="filter-form">
                <select>
                    <option defaultValue value="Portland">Portland</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option  value="San Francisco">San Francisco</option>
                </select>
                </form>
    );
}