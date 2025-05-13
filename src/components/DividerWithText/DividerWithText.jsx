import React from "react";

export function DividerWithText() {
    return (
        <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-sm text-gray-500">OU</span>
            <div className="flex-grow border-t border-gray-700"></div>
        </div>
    );
};