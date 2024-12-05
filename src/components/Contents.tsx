import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentsBoxProps {
    title : string;
    children : React.ReactNode;
}

const Contents: React.FC<ContentsBoxProps> = ({ title, children }) => {
    return (
        <Card className="bg-black p-6 text-white border border-[#636363]">
            <CardHeader className="text-lg mb-4">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div>{children}</div>
            </CardContent>
        </Card>
    )
}

export default Contents;