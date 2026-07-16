'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const countries = [
  { name: 'Egypt', code: '+20', flag: 'https://flagcdn.com/w40/eg.png' },
  { name: 'Saudi Arabia', code: '+966', flag: 'https://flagcdn.com/w40/sa.png' },
  { name: 'UAE', code: '+971', flag: 'https://flagcdn.com/w40/ae.png' },
  { name: 'United States', code: '+1', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'United Kingdom', code: '+44', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Germany', code: '+49', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'France', code: '+33', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Turkey', code: '+90', flag: 'https://flagcdn.com/w40/tr.png' },
  { name: 'India', code: '+91', flag: 'https://flagcdn.com/w40/in.png' },
  { name: 'China', code: '+86', flag: 'https://flagcdn.com/w40/cn.png' },
]


const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  countryCode: z.string(),
  phone: z.string().min(8, 'Phone number is required'),
  message: z.string().min(5, 'Message is required'),
})

export default function Idea() {
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      countryCode: countries[0].code,
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (data) => {
    console.log({
      ...data,
      fullPhone: `${data.countryCode}${data.phone}`,
    })

    reset()
    setSelectedCountry(countries[0])
  }

  return (
    <section
      id="contact" 
      className="scroll-mt-20 relative overflow-hidden bg-[#111521] py-[95px] md:py-[130px]"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-[110px] px-6 md:grid-cols-[1fr_430px] lg:gap-[210px]">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            label="Have an "
            highlight="idea?"
            className="mb-3 text-[38px] font-normal leading-none tracking-[-0.03em] text-white md:text-[44px]"
            highlightClassName="text-primary"
          />

          <p className="mb-[70px] text-[22px] font-normal leading-none text-white">
            We can help you.
          </p>

          <img
            src="/idea.png"
            alt="Idea illustration"
            className="w-[410px] md:w-[520px]"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[18px] border border-white/20 bg-[#151A27]/35 px-[28px] py-[24px]"
        >
          <div className="mb-[16px]">
            <label className="mb-[8px] block text-[14px] font-semibold text-white">
              Name
            </label>

            <input
              {...register('name')}
              placeholder="Enter your name"
              className="h-[46px] w-full rounded-[10px] border border-white/20 bg-[#202532] px-[16px] text-[13px] text-white outline-none placeholder:text-white/50 focus:border-primary"
            />

            {errors.name && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-[16px]">
            <label className="mb-[8px] block text-[14px] font-semibold text-white">
              E-mail
            </label>

            <input
              {...register('email')}
              placeholder="Enter your E-mail"
              className="h-[46px] w-full rounded-[10px] border border-white/20 bg-[#202532] px-[16px] text-[13px] text-white outline-none placeholder:text-white/50 focus:border-primary"
            />

            {errors.email && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative mb-[16px]">
            <label className="mb-[8px] block text-[14px] font-semibold text-white">
              Phone Number
            </label>

            <div className="flex h-[46px] rounded-[10px] border border-white/20 bg-[#202532] focus-within:border-primary">
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-[118px] items-center justify-center gap-2 border-r border-white/15 text-[13px] text-white"
              >
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className="h-[14px] w-[22px] rounded-[2px] object-cover"
                />
                <span>{selectedCountry.code}</span>
               <ChevronDown
  size={16}
  className={`text-white/60 transition-transform duration-300 ${
    open ? 'rotate-180' : ''
  }`}
/>
              </button>

              <input
                {...register('phone')}
                placeholder="Enter your phone number"
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/50"
              />
            </div>

            {open && (
              <div className="absolute left-0 top-[78px] z-50 max-h-[300px] w-[270px] overflow-y-auto rounded-[10px] border border-white/15 bg-[#151A27] p-2 shadow-2xl">
                {countries.map((country) => (
                  <button
                    key={`${country.name}-${country.code}`}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country)
                      setValue('countryCode', country.code)
                      setOpen(false)
                    }}
                    className="flex w-full items-center justify-between rounded-[8px] px-3 py-2 text-left text-[13px] text-white transition hover:bg-white/10"
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="h-[15px] w-[24px] rounded-[2px] object-cover"
                      />
                      {country.name}
                    </span>

                    <span className="text-white/65">{country.code}</span>
                  </button>
                ))}
              </div>
            )}

            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-[44px]">
            <label className="mb-[8px] block text-[14px] font-semibold text-white">
              Message
            </label>

            <textarea
              {...register('message')}
              placeholder="Enter Message"
              className="h-[178px] w-full resize-none rounded-[10px] border border-white/20 bg-[#202532] px-[16px] py-[14px] text-[13px] text-white outline-none placeholder:text-white/50 focus:border-primary"
            />

            {errors.message && (
              <p className="mt-1 text-[11px] text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[46px] w-full rounded-[10px] bg-primary text-[13px] font-semibold text-white transition hover:bg-[#6497C5] disabled:opacity-60"
          >
            Let&apos;s Talk
          </button>
        </form>
      </div>
    </section>
  )
}