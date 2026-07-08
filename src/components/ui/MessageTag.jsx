'use client'

import { ArrowUpRight } from 'lucide-react'

export default function MessageTag({ text, className = '', icon = true }) {
  return (
    <div className={className}>
      <div className="relative inline-flex h-[46px] items-center gap-2 rounded-[10px] bg-secondary px-5 text-[13px] font-medium text-[#111521] shadow-[0_10px_30px_rgba(254,172,37,.25)]">
        <span>{text}</span>

        {icon && (
          <ArrowUpRight
            size={15}
            strokeWidth={2.3}
            className="text-yellow-500 bg-[#111521] rounded-full p-[2px]"
          />
        )}

        <span className="absolute -bottom-[10px] left-[18px] text-yellow-500 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[11px] border-l-transparent border-r-transparent border-t-secondary" />
      </div>
    </div>
  )
}