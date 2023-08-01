import React from "react";
import { ServicesGrid } from "~/components/services-grid";

export default function Services() {

    return (
        <div className="flex flex-col">
            <h1>
                Our Services
            </h1>

            <ServicesGrid />
        </div>
    )
}