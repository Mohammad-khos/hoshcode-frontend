import React from "react";
import { Play, RefreshCw, Terminal, CheckCircle2, Maximize2 } from "lucide-react";

export const CodeWorkspace = () => {
  return (
    <section className="flex-1 flex flex-col bg-[#1e1e1e] text-gray-300 font-mono text-sm relative overflow-hidden" dir="ltr">
        
        {/* Editor Tabs */}
        <div className="flex items-center bg-[#252526] h-10 border-b border-black/20">
            <div className="flex items-center gap-2 px-4 bg-[#1e1e1e] border-t-2 border-primary text-white text-xs h-full min-w-[120px]">
                <span className="text-yellow-500">JS</span>
                <span>index.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 bg-[#2d2d2d] hover:bg-[#1e1e1e] text-gray-400 hover:text-white text-xs h-full min-w-[120px] cursor-pointer transition-colors border-r border-black/20">
                <span className="text-blue-400">CSS</span>
                <span>style.css</span>
            </div>
            <div className="ml-auto px-2 flex gap-1">
                 <button className="p-1 hover:bg-white/10 rounded"><Maximize2 size={14}/></button>
            </div>
        </div>

        {/* Code Area (Simulated) */}
        <div className="flex-1 flex overflow-hidden">
            {/* Line Numbers */}
            <div className="w-12 bg-[#1e1e1e] text-[#858585] text-right pr-3 pt-4 select-none leading-6 text-xs border-r border-white/5">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <div key={n}>{n}</div>)}
            </div>
            
            {/* Code Content */}
            <div className="flex-1 p-4 overflow-auto leading-6">
                <div><span className="text-[#c586c0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"System initialized..."</span>);</div>
                <div><span className="text-[#569cd6]">let</span> <span className="text-[#9cdcfe]">userScore</span> = <span className="text-[#b5cea8]">0</span>;</div>
                <div><span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">APP_VERSION</span> = <span className="text-[#ce9178]">"1.0.2"</span>;</div>
                <div className="h-6"></div>
                <div className="text-[#6a9955] italic">// TODO: Create your variable below this line</div>
                <div className="flex relative">
                    <span className="text-[#569cd6]">let</span>&nbsp;<span className="text-[#9cdcfe]">greeting</span>;
                    {/* Cursor */}
                    <div className="w-[2px] h-5 bg-primary absolute left-[105px] animate-pulse"></div>
                </div>
                <div className="h-6"></div>
                <div><span className="text-[#c586c0]">if</span> (<span className="text-[#9cdcfe]">greeting</span>) {"{"}</div>
                <div className="pl-4"><span className="text-[#c586c0]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Success: "</span> + <span className="text-[#9cdcfe]">greeting</span>);</div>
                <div>{"}"} <span className="text-[#c586c0]">else</span> {"{"}</div>
                <div className="pl-4"><span className="text-[#c586c0]">console</span>.<span className="text-[#dcdcaa]">warn</span>(<span className="text-[#ce9178]">"Warning: undefined"</span>);</div>
                <div>{"}"}</div>
            </div>
        </div>

        {/* Action Bar */}
        <div className="h-14 bg-[#18181b] border-t border-white/10 flex items-center justify-between px-4 z-20">
             <div className="flex items-center gap-3 text-xs text-[#858585]">
                 <span>Ln 11, Col 15</span>
                 <span>UTF-8</span>
                 <span className="flex items-center gap-1 text-yellow-500"><span className="w-2 h-2 rounded-full bg-yellow-500"/> 1 Warning</span>
             </div>

             <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2d2d] hover:bg-[#363636] text-white text-xs font-bold transition-all">
                     <RefreshCw size={14} />
                     ریست
                 </button>
                 <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary hover:bg-green-600 text-white text-xs font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 group">
                     <Play size={16} className="fill-current" />
                     اجرای کد
                 </button>
             </div>
        </div>

        {/* Terminal (Output) */}
        <div className="h-32 md:h-48 bg-[#18181b] border-t border-white/10 flex flex-col">
            <div className="flex items-center h-9 bg-[#1e1e1e] px-4 border-b border-white/5 gap-6">
                <button className="text-[10px] font-bold text-white border-b-2 border-primary h-full px-1">TERMINAL</button>
                <button className="text-[10px] font-bold text-[#858585] hover:text-white h-full px-1 transition-colors">OUTPUT</button>
            </div>
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto" dir="ltr">
                 <div className="mb-2 text-[#858585]">Microsoft Windows [Version 10.0.19045]</div>
                 <div className="flex gap-2 mb-1">
                     <span className="text-green-500 font-bold">➜</span>
                     <span className="text-cyan-400 font-bold">~/hoshcode-project</span>
                     <span className="text-gray-300">$ node index.js</span>
                 </div>
                 <div className="pl-4 mb-3 border-l-2 border-white/10 text-gray-300">
                     System initialized...<br/>
                     <span className="text-yellow-400">Warning: undefined</span>
                 </div>
                 <div className="flex gap-2 items-center">
                     <span className="text-green-500 font-bold">➜</span>
                     <span className="text-cyan-400 font-bold">~/hoshcode-project</span>
                     <span className="w-2 h-4 bg-gray-500 animate-pulse"></span>
                 </div>
            </div>
        </div>

    </section>
  );
};