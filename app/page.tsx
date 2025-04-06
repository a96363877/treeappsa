'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('tab3');

  return (
    <div className="flex flex-col min-h-screen bg-[#004040] text-white max-w-md mx-auto">
      {/* Header */}

      {/* Main Content */}
      <Tabs
        defaultValue="tab3"
        value={currentTab}
        onValueChange={setCurrentTab}
        className="flex-1 flex flex-col"
      >
        <TabsList className="hidden">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <div className="flex-1 flex flex-col">
          {/* Tawuniya Logo */}
          <div className="flex justify-end p-4">
            <div className="flex items-center gap-2 bg-gray-400/20 rounded-full py-1 px-3">
              <span className="text-xs">تأمين لـ</span>
              <div className="bg-white rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Image
                  src="/th.svg"
                  alt="Tawuniya"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center p-4 space-y-2 rtl">
            <h1 className="text-xl font-bold">
              ما في أحلى من الحرية، سوق الحين براحتك
            </h1>
            <p className="text-sm">
              لا تفوت الفرصة. أمّن سيارتك بأفضل الأسعار!
            </p>
          </div>

          {/* Car Image Section */}
          <div className="relative p-4">
            <div className=" h-36 m-4 rounded-3xl"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src="/motor_bg_ar.png"
                alt="SUV"
                width={300}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 px-4 py-2 rtl">
            <Button
              variant="ghost"
              className={cn(
                'rounded-full flex items-center gap-1 text-sm px-3 py-1 h-auto',
                currentTab === 'tab1' && 'bg-white/10'
              )}
              onClick={() => setCurrentTab('tab1')}
            >
              <span className="bg-white rounded-full p-1 text-black flex items-center justify-center w-5 h-5">
                <ChevronRight className="h-3 w-3" />
              </span>
              <span>تجديد الوثيقة</span>
            </Button>
            <Button
              variant="ghost"
              className={cn(
                'rounded-full flex items-center gap-1 text-sm px-3 py-1 h-auto',
                currentTab === 'tab2' && 'bg-white/10'
              )}
              onClick={() => setCurrentTab('tab2')}
            >
              <span>نقل الملكية</span>
            </Button>
            <Button
              variant="ghost"
              className={cn(
                'rounded-full flex items-center gap-1 text-sm px-3 py-1 h-auto',
                currentTab === 'tab3' && 'bg-white/10'
              )}
              onClick={() => setCurrentTab('tab3')}
            >
              <span>تأمين جديد</span>
            </Button>
          </div>

          {/* Form Content */}
          <div className="p-4 space-y-4 rtl">
            <TabsContent value="tab1" className="m-0 space-y-4">
              <Input
                placeholder="الرقم التسلسلي"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
              <Input
                placeholder="رقم الهوية / الإقامة"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
            </TabsContent>

            <TabsContent value="tab2" className="m-0 space-y-4">
              <Input
                placeholder="الرقم التسلسلي"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
              <Input
                placeholder="رقم هوية / إقامة البائع"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
              <Input
                placeholder="رقم الهوية / الإقامة"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
            </TabsContent>

            <TabsContent value="tab3" className="m-0 space-y-4">
              <Input
                placeholder="الرقم التسلسلي/ بطاقة جمركية"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
              <Input
                placeholder="رقم الهوية / الإقامة"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
              <Input
                placeholder="شهر / سنة الميلاد"
                className="bg-[#003030] border-none text-right h-12 rounded-md"
              />
            </TabsContent>

            <Button className="w-full bg-[#00E0A0] hover:bg-[#00C090] text-black font-bold h-12 rounded-md">
              أمّن سيارتك
            </Button>

            <p className="text-xs text-center rtl text-gray-300">
              بالنقر على "أمّن سيارتك"، فإنني أمنح وكالة شركة (تري) للتأمين
              الرقمي إمكانية الوصول إلى معلوماتي.
            </p>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
