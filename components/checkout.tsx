"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, Shield, CheckCircle, ArrowRight } from "lucide-react"
import type { FormData } from "./insurance-flow"

interface CheckoutProps {
  formData: FormData
  onBack: () => void
}

export function Checkout({ formData, onBack }: CheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const getPlanDetails = (planId: string) => {
    const plans = {
      basic: { name: "الخطة الأساسية", price: "1,200" },
      comprehensive: { name: "الخطة الشاملة", price: "2,400" },
      premium: { name: "الخطة المميزة", price: "3,600" },
    }
    return plans[planId as keyof typeof plans] || { name: "", price: "" }
  }

  const planDetails = getPlanDetails(formData.selectedPlan)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setIsCompleted(true)
  }

  if (isCompleted) {
    return (
      <div className="bg-emerald-900/80 rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/50 backdrop-blur-sm p-8">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-emerald-900" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">تم بنجاح!</h2>
            <p className="text-emerald-200">تم إصدار وثيقة التأمين بنجاح</p>
          </div>

          <div className="bg-emerald-800/30 rounded-xl p-4">
            <h3 className="font-semibold text-emerald-400 mb-2">تفاصيل الوثيقة</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-emerald-300">رقم الوثيقة:</span>
                <span className="text-white font-mono">
                  POL-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-300">الخطة:</span>
                <span className="text-white">{planDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-300">القسط المدفوع:</span>
                <span className="text-white">{planDetails.price} ر.س</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-bold h-12">
              تحميل الوثيقة
            </Button>
            <Button
              variant="outline"
              className="w-full border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 h-12"
            >
              إرسال نسخة بالإيميل
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-emerald-900/80 rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/50 backdrop-blur-sm">
      <div className="bg-emerald-800/60 p-4 border-b border-emerald-700/50">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-emerald-400">إتمام الدفع</h2>
        </div>
      </div>

      <form onSubmit={handlePayment} className="p-6">
        <div className="space-y-6 animate-fadeIn">
          {/* Order Summary */}
          <div className="bg-emerald-800/30 rounded-xl p-4">
            <h3 className="font-semibold text-emerald-400 mb-3">ملخص الطلب</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-emerald-300">خطة التأمين:</span>
                <span className="text-white">{planDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-300">المركبة:</span>
                <span className="text-white">
                  {formData.vehicleModel} {formData.vehicleYear}
                </span>
              </div>
              <div className="border-t border-emerald-700/50 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300 font-semibold">المجموع:</span>
                  <span className="text-2xl font-bold text-emerald-400">{planDetails.price} ر.س</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold text-emerald-400 mb-3">طريقة الدفع</h3>
            <div className="space-y-4">
              <Input
                placeholder="رقم البطاقة"
                className="bg-emerald-800/50 border-emerald-700/50 text-white placeholder:text-emerald-300 h-12"
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="MM/YY"
                  className="bg-emerald-800/50 border-emerald-700/50 text-white placeholder:text-emerald-300 h-12"
                  required
                />
                <Input
                  placeholder="CVV"
                  className="bg-emerald-800/50 border-emerald-700/50 text-white placeholder:text-emerald-300 h-12"
                  required
                />
              </div>
              <Input
                placeholder="اسم حامل البطاقة"
                className="bg-emerald-800/50 border-emerald-700/50 text-white placeholder:text-emerald-300 h-12"
                required
              />
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-2 p-3 bg-emerald-800/20 rounded-lg border border-emerald-700/30">
            <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-emerald-200">جميع المعاملات محمية بتشفير SSL. معلوماتك المالية آمنة ومحمية.</p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="flex-1 border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 h-12"
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة
            </Button>
            <Button
              type="submit"
              disabled={isProcessing}
              className="flex-1 bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-bold h-12"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-emerald-900/30 border-t-emerald-900 rounded-full animate-spin"></div>
                  جاري المعالجة...
                </div>
              ) : (
                `دفع ${planDetails.price} ر.س`
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
