import React from "react";

export const Snippet1 = () => (
  <>
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#DCDCAA]">UserProfile</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">userId</span>{" "}
    <span className="text-[#D4D4D4]">{"}"}</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#D4D4D4]">[</span>
    <span className="text-[#9CDCFE]">user</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#DCDCAA]">setUser</span>
    <span className="text-[#D4D4D4]">]</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#DCDCAA]">useState</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">null</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"  "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#D4D4D4]">[</span>
    <span className="text-[#9CDCFE]">loading</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#DCDCAA]">setLoading</span>
    <span className="text-[#D4D4D4]">]</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#DCDCAA]">useState</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">true</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">useEffect</span>
    <span className="text-[#D4D4D4]">(()</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"    "}
    <span className="text-[#DCDCAA]">fetch</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#CE9178]">{`\`https://api.site.com/users/\${userId}\``}</span>
    <span className="text-[#D4D4D4]">)</span>
    {"\n"}
    {"      "}
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#DCDCAA]">then</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">res</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#9CDCFE]">res</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#DCDCAA]">json</span>
    <span className="text-[#D4D4D4]">())</span>
    {"\n"}
    {"      "}
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#DCDCAA]">then</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">data</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"        "}
    <span className="text-[#DCDCAA]">setUser</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">data</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"        "}
    <span className="text-[#DCDCAA]">setLoading</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">false</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"      "}
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"  "}
    <span className="text-[#D4D4D4]">, [</span>
    <span className="text-[#9CDCFE]">userId</span>
    <span className="text-[#D4D4D4]">]);</span>
    {"\n"}
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">if</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">loading</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#808080]">&lt;Spinner /&gt;</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#808080]">&lt;div&gt;</span>
    <span className="text-[#D4D4D4]">{"{"}</span>
    <span className="text-[#9CDCFE]">user</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#9CDCFE]">name</span>
    <span className="text-[#D4D4D4]">{"}"}</span>
    <span className="text-[#808080]">&lt;/div&gt;</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    <span className="text-[#D4D4D4]">{"}"};</span>
  </>
);

export const Snippet2 = () => (
  <>
    <span className="text-[#C586C0]">import</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">useState</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#9CDCFE]">useEffect</span>{" "}
    <span className="text-[#D4D4D4]">{"}"}</span>{" "}
    <span className="text-[#C586C0]">from</span>{" "}
    <span className="text-[#CE9178]">'react'</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    {"\n"}
    <span className="text-[#569CD6]">export</span>{" "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#DCDCAA]">useFetch</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">url</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#D4D4D4]">[</span>
    <span className="text-[#9CDCFE]">data</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#DCDCAA]">setData</span>
    <span className="text-[#D4D4D4]">]</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#DCDCAA]">useState</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">null</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"  "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#D4D4D4]">[</span>
    <span className="text-[#9CDCFE]">isPending</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#DCDCAA]">setIsPending</span>
    <span className="text-[#D4D4D4]">]</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#DCDCAA]">useState</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">true</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"\n"}
    {"  "}
    <span className="text-[#DCDCAA]">useEffect</span>
    <span className="text-[#D4D4D4]">(()</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"    "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#9CDCFE]">controller</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#569CD6]">new</span>{" "}
    <span className="text-[#4EC9B0]">AbortController</span>
    <span className="text-[#D4D4D4]">();</span>
    {"\n"}
    {"\n"}
    {"    "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#DCDCAA]">fetchData</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#569CD6]">async</span>{" "}
    <span className="text-[#D4D4D4]">()</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"      "}
    <span className="text-[#C586C0]">try</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"        "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#9CDCFE]">res</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#C586C0]">await</span>{" "}
    <span className="text-[#DCDCAA]">fetch</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">url</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">signal:</span>{" "}
    <span className="text-[#9CDCFE]">controller</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#9CDCFE]">signal</span>{" "}
    <span className="text-[#D4D4D4]">{"}"});</span>
    {"\n"}
    {"        "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#9CDCFE]">json</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#C586C0]">await</span>{" "}
    <span className="text-[#9CDCFE]">res</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#DCDCAA]">json</span>
    <span className="text-[#D4D4D4]">();</span>
    {"\n"}
    {"        "}
    <span className="text-[#DCDCAA]">setData</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">json</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"        "}
    <span className="text-[#DCDCAA]">setIsPending</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#569CD6]">false</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"      "}
    <span className="text-[#D4D4D4]">{"}"}</span>{" "}
    <span className="text-[#C586C0]">catch</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">err</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"        "}
    <span className="text-[#6A9955]">// Handle Error...</span>
    {"\n"}
    {"      "}
    <span className="text-[#D4D4D4]">{"}"}</span>
    {"\n"}
    {"    "}
    <span className="text-[#D4D4D4]">{"}"};</span>
    {"\n"}
    {"\n"}
    {"    "}
    <span className="text-[#DCDCAA]">fetchData</span>
    <span className="text-[#D4D4D4]">();</span>
    {"\n"}
    {"    "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#D4D4D4]">()</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#9CDCFE]">controller</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#DCDCAA]">abort</span>
    <span className="text-[#D4D4D4]">();</span>
    {"\n"}
    {"  "}
    <span className="text-[#D4D4D4]">, [</span>
    <span className="text-[#9CDCFE]">url</span>
    <span className="text-[#D4D4D4]">]);</span>
    {"\n"}
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">data</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#9CDCFE]">isPending</span>{" "}
    <span className="text-[#D4D4D4]">{"}"};</span>
    {"\n"}
    <span className="text-[#D4D4D4]">{"}"};</span>
  </>
);

export const Snippet3 = () => (
  <>
    <span className="text-[#C586C0]">import</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">useFetch</span>{" "}
    <span className="text-[#D4D4D4]">{"}"}</span>{" "}
    <span className="text-[#C586C0]">from</span>{" "}
    <span className="text-[#CE9178]">'./hooks/useFetch'</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    {"\n"}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#DCDCAA]">UserProfile</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">userId</span>{" "}
    <span className="text-[#D4D4D4]">{"}"}</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#569CD6]">=&gt;</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>
    {"\n"}
    {"  "}
    <span className="text-[#6A9955]">// One line to rule them all!</span>
    {"\n"}
    {"  "}
    <span className="text-[#569CD6]">const</span>{" "}
    <span className="text-[#D4D4D4]">{"{"}</span>{" "}
    <span className="text-[#9CDCFE]">data: user</span>
    <span className="text-[#D4D4D4]">,</span>{" "}
    <span className="text-[#9CDCFE]">isPending</span>{" "}
    <span className="text-[#D4D4D4]">{"}"}</span>{" "}
    <span className="text-[#D4D4D4]">=</span>{" "}
    <span className="text-[#DCDCAA]">useFetch</span>
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#CE9178]">{`\`https://api...\``}</span>
    <span className="text-[#D4D4D4]">);</span>
    {"\n"}
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">if</span>{" "}
    <span className="text-[#D4D4D4]">(</span>
    <span className="text-[#9CDCFE]">isPending</span>
    <span className="text-[#D4D4D4]">)</span>{" "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#808080]">&lt;Spinner /&gt;</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    {"  "}
    <span className="text-[#C586C0]">return</span>{" "}
    <span className="text-[#808080]">&lt;div&gt;</span>
    <span className="text-[#D4D4D4]">{"{"}</span>
    <span className="text-[#9CDCFE]">user</span>
    <span className="text-[#D4D4D4]">.</span>
    <span className="text-[#9CDCFE]">name</span>
    <span className="text-[#D4D4D4]">{"}"}</span>
    <span className="text-[#808080]">&lt;/div&gt;</span>
    <span className="text-[#D4D4D4]">;</span>
    {"\n"}
    <span className="text-[#D4D4D4]">{"}"};</span>
  </>
);
