import React from "react";
import { AlertTriangle, Lightbulb, Zap } from "lucide-react";

export const Callout = ({ type = "info", title, children }: { type?: "info" | "warning" | "tip", title: string, children: React.ReactNode }) => {
    const styles = {
        info: { bg: "bg-blue-50", border: "border-blue-100", icon: <Lightbulb className="text-blue-600" size={20} />, titleColor: "text-blue-700" },
        warning: { bg: "bg-amber-50", border: "border-amber-100", icon: <AlertTriangle className="text-amber-600" size={20} />, titleColor: "text-amber-700" },
        tip: { bg: "bg-emerald-50", border: "border-emerald-100", icon: <Zap className="text-emerald-600" size={20} />, titleColor: "text-emerald-700" }
    };
    const style = styles[type];

    return (
        <div className={`${style.bg} border ${style.border} rounded-2xl p-5 my-6 flex gap-4`}>
            <div className="shrink-0 mt-0.5">{style.icon}</div>
            <div>
                <h4 className={`font-bold text-sm mb-1 ${style.titleColor}`}>{title}</h4>
                <div className="text-sm text-gray-600 leading-6">{children}</div>
            </div>
        </div>
    );
};