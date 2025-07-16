'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, Key, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Illustration */}
        <div className="w-full lg:w-1/2 justify-center hidden lg:flex">
          <div className="relative w-full max-w-[500px] h-auto">
            <div className="relative w-full pt-[100%]">
              <img
                src="/security.jpg"
                alt="Security Illustration"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-lg transform -rotate-12 shadow-lg"></div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-purple-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-400 rounded-lg transform rotate-45 shadow-lg"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-300 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  Login Page
                </h1>
              </div>

              <div className="space-y-6">
                {/* Google Login Button */}
                <Button
                  variant="outline"
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 bg-transparent"
                  type="button"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Login with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <img
                      src="/mail.svg"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5"
                    />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-gray-50 border-gray-200 focus:bg-white"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <img
                      src="/key.svg"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 rotate-12 text-black w-6 h-6"
                    />

                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 bg-gray-50 border-gray-200 focus:bg-white"
                      placeholder="••••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeOff className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(checked === true)
                      }
                      className="mt-1 border-gray-300 data-[state=checked]:bg-[#5B6AD0] data-[state=checked]:border-[#5B6AD0]"
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button className="w-full h-12 bg-[#5B6AD0] hover:bg-[#4257e6] text-white font-medium">
                  Login
                </Button>

                {/* Sign Up Link */}
                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    {"Don't have an account? "}
                    <Link
                      href="/signup"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Register
                    </Link>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
