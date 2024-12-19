import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ContentsBoxProps {
    id?: string;
    title : string;
    description : string;
    children : React.ReactNode;
}

const Contents: React.FC<ContentsBoxProps> = ({ id, title, description, children }) => {
    return (
        <Card id={id} className="bg-black p-6 text-white border border-[#323232] flex-1">
            <CardHeader className="text-2xl p-2">
                <CardTitle className="mb-0">{title}</CardTitle>
            </CardHeader>
            <CardDescription className="p-2">
                {description}
            </CardDescription>
            <CardContent className="p-2">
                <div>{children}</div>
            </CardContent>
        </Card>
    )
}

export default Contents;