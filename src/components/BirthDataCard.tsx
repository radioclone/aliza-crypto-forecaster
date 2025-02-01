import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { soundManager } from "@/utils/sounds";
import { useToast } from "@/components/ui/use-toast";

interface BirthDataCardProps {
  onClose: () => void;
  onSubmit: (data: BirthData) => void;
}

interface BirthData {
  date: string;
  month: string;
  year: string;
  time: string;
  birthplace: string;
}

export const BirthDataCard = ({ onClose, onSubmit }: BirthDataCardProps) => {
  const { toast } = useToast();
  const [birthData, setBirthData] = useState<BirthData>({
    date: '',
    month: '',
    year: '',
    time: '',
    birthplace: '',
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSound('click');
    
    // Basic validation
    if (!birthData.date || !birthData.month || !birthData.year || !birthData.time || !birthData.birthplace) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get your prediction.",
        variant: "destructive",
      });
      return;
    }

    onSubmit(birthData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]" onClick={onClose}>
      <div 
        className="neo-blur p-6 rounded-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Enter Your Birth Details</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Date</Label>
              <Select 
                onValueChange={(value) => setBirthData({ ...birthData, date: value })}
                onOpenChange={() => soundManager.playSound('click')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  {dates.map((date) => (
                    <SelectItem key={date} value={date}>{date}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Month</Label>
              <Select 
                onValueChange={(value) => setBirthData({ ...birthData, month: value })}
                onOpenChange={() => soundManager.playSound('click')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Year</Label>
              <Select 
                onValueChange={(value) => setBirthData({ ...birthData, year: value })}
                onOpenChange={() => soundManager.playSound('click')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Time of Birth (24h format)</Label>
            <Input
              type="time"
              value={birthData.time}
              onChange={(e) => setBirthData({ ...birthData, time: e.target.value })}
              className="bg-white/5"
            />
          </div>

          <div>
            <Label>Birthplace</Label>
            <Input
              type="text"
              placeholder="City, Country"
              value={birthData.birthplace}
              onChange={(e) => setBirthData({ ...birthData, birthplace: e.target.value })}
              className="bg-white/5"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button 
              type="button" 
              variant="ghost"
              onClick={onClose}
              onMouseEnter={() => soundManager.playSound('hover')}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              onMouseEnter={() => soundManager.playSound('hover')}
            >
              Get Prediction
            </Button>
          </div>

          <p className="text-[10px] text-white/40 text-center mt-4 italic">
            * Disclaimer: The predictions provided are for entertainment purposes only. 
            Not financial or life advice. Any decisions made based on these predictions 
            are solely your responsibility.
          </p>
        </form>
      </div>
    </div>
  );
};