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

  const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Label>Date</Label>
        <Select 
          onValueChange={onDateChange}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {dates.map((date) => (
              <SelectItem key={date} value={date}>{date}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Month</Label>
        <Select 
          onValueChange={onMonthChange}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {months.map((month) => (
              <SelectItem key={month} value={month}>{month}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Year</Label>
        <Select 
          onValueChange={onYearChange}
          onOpenChange={() => soundManager.playSound('click')}
        >
          <SelectTrigger className="bg-white/5">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto bg-background">
            {years.map((year) => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};