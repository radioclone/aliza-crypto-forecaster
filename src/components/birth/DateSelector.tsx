import React from 'react';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { soundManager } from "@/utils/sounds";

interface DateSelectorProps {
  onDateChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export const DateSelector = ({ onDateChange, onMonthChange, onYearChange }: DateSelectorProps) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dates = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Label>Date</Label>
        <Select 
          onValueChange={(value) => {
            console.log('Date selected:', value);
            onDateChange(value);
          }}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {dates.map((date) => (
              <SelectItem key={date} value={date}>
                {date}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Month</Label>
        <Select 
          onValueChange={(value) => {
            console.log('Month selected:', value);
            onMonthChange(value);
          }}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {months.map((month, index) => (
              <SelectItem 
                key={month} 
                value={String(index + 1).padStart(2, '0')}
              >
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Year</Label>
        <Select 
          onValueChange={(value) => {
            console.log('Year selected:', value);
            onYearChange(value);
          }}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};