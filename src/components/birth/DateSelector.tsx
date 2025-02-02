import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { soundManager } from "@/utils/sounds";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DateSelectorProps {
  onDateChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export const DateSelector = ({ onDateChange, onMonthChange, onYearChange }: DateSelectorProps) => {
  const [useManualInput, setUseManualInput] = useState(false);
  const [manualDate, setManualDate] = useState('');
  const [manualMonth, setManualMonth] = useState('');
  const [manualYear, setManualYear] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dates = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  const handleDateChange = (value: string) => {
    console.log('Date selected:', value);
    onDateChange(value);
    soundManager.playSound('click');
  };

  const handleMonthChange = (value: string) => {
    console.log('Month selected:', value);
    onMonthChange(value);
    soundManager.playSound('click');
  };

  const handleYearChange = (value: string) => {
    console.log('Year selected:', value);
    onYearChange(value);
    soundManager.playSound('click');
  };

  const handleManualDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value) && Number(value) <= 31) {
      setManualDate(value);
      if (value.length === 2) {
        onDateChange(value.padStart(2, '0'));
      }
    }
  };

  const handleManualMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value) && Number(value) <= 12) {
      setManualMonth(value);
      if (value.length === 2) {
        onMonthChange(value.padStart(2, '0'));
      }
    }
  };

  const handleManualYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value) && Number(value) <= currentYear) {
      setManualYear(value);
      if (value.length === 4) {
        onYearChange(value);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/60">Birth Date</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  setUseManualInput(!useManualInput);
                  soundManager.playSound('click');
                }}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                {useManualInput ? 'Use Dropdown' : 'Manual Input'}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle between dropdown and manual input</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {useManualInput ? (
          <>
            <div>
              <Label>Date (1-31)</Label>
              <Input
                type="text"
                value={manualDate}
                onChange={handleManualDateChange}
                placeholder="DD"
                className="bg-white/5"
                maxLength={2}
              />
            </div>
            <div>
              <Label>Month (1-12)</Label>
              <Input
                type="text"
                value={manualMonth}
                onChange={handleManualMonthChange}
                placeholder="MM"
                className="bg-white/5"
                maxLength={2}
              />
            </div>
            <div>
              <Label>Year</Label>
              <Input
                type="text"
                value={manualYear}
                onChange={handleManualYearChange}
                placeholder="YYYY"
                className="bg-white/5"
                maxLength={4}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <Label>Date</Label>
              <Select onValueChange={handleDateChange}>
                <SelectTrigger className="bg-white/5">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent 
                  className="bg-popover/95 backdrop-blur-sm max-h-[200px]"
                  position="popper"
                  sideOffset={4}
                >
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
              <Select onValueChange={handleMonthChange}>
                <SelectTrigger className="bg-white/5">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent 
                  className="bg-popover/95 backdrop-blur-sm max-h-[200px]"
                  position="popper"
                  sideOffset={4}
                >
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
              <Select onValueChange={handleYearChange}>
                <SelectTrigger className="bg-white/5">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent 
                  className="bg-popover/95 backdrop-blur-sm max-h-[200px]"
                  position="popper"
                  sideOffset={4}
                >
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};