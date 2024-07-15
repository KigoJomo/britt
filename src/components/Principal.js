import React from "react";

const Principal = ({ name, order }) => {
    return (
        <div className={`flex flex-col items-start ${order === "2" && "items-end"} gap-2`}>
            <h2 className="text-base md:text-2xl font-bold">{name}</h2>
            <p className="capitalize md:uppercase">founder and principal</p>
        </div>
    )
}

export default Principal;