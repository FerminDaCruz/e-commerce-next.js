"use client";

import { useEffect } from "react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2>Error, algo no salió bien </h2>
            <hr />
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    );
}
