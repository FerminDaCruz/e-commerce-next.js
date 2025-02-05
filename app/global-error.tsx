"use client";

import { useEffect } from "react";

export default function GlobalError({
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
        <html>
            <body>
                <h2>Algo no salio bien!</h2>
                <button onClick={() => reset()}>Recargar</button>
            </body>
        </html>
    );
}
