import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentsBoxProps {
    id?: string;
    title : string;
    children : React.ReactNode;
}

const Contents: React.FC<ContentsBoxProps> = ({ id, title, children }) => {
    return (
        <Card id={id} className="bg-black p-6 text-white border border-[#323232] flex-1">
            <CardHeader className="text-2xl p-2">
                <CardTitle className="mb-0">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
                <div>{children}</div>
            </CardContent>
        </Card>
    )
}

export default Contents;