import { cn } from "../lib/utils";
import { ReactNode } from "react";

// In MaxWidthWrapper.js
import React from 'react';

interface MaxWidthWrapperProps {
    className?: string;
    children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ className, children }) => {
    return (
        <div className={`max-w-screen-xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
