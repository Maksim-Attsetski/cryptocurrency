import React from "react";

export const getChanges = (cur: number, className: string = ''): JSX.Element => {
    const bg: string = cur > 0 ? 'bg-green-500' : 'bg-red-400'
    const text: string = `${cur.toFixed(2)} $`

    return <span className={`${bg} changes ${className}`}>{text}</span>
}

