// src/features/career-assistant/components/SkillRadarChart.tsx
"use client";

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface SkillData {
  subject: string;
  A: number; // امتیاز کاربر
  B: number; // نیاز بازار
  fullMark: number;
}

const data: SkillData[] = [
  { subject: 'React/Next.js', A: 120, B: 150, fullMark: 150 },
  { subject: 'TypeScript', A: 98, B: 130, fullMark: 150 },
  { subject: 'UI/UX Principles', A: 86, B: 130, fullMark: 150 },
  { subject: 'Backend/Node', A: 65, B: 100, fullMark: 150 },
  { subject: 'DevOps/Docker', A: 40, B: 90, fullMark: 150 },
  { subject: 'Soft Skills', A: 110, B: 110, fullMark: 150 },
];

export const SkillRadarChart = () => {
  return (
    <div className="w-full h-[300px] font-dana">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          
          {/* مهارت کاربر - رنگ اکشن (سبز) */}
          <Radar
            name="مهارت شما"
            dataKey="A"
            stroke="var(--action-600, #16a34a)"
            fill="var(--action-600, #16a34a)"
            fillOpacity={0.4}
          />
          
          {/* نیاز بازار - رنگ آبی/تیره */}
          <Radar
            name="استاندارد بازار"
            dataKey="B"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.1}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#374151', fontSize: '12px' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};