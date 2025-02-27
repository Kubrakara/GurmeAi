"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Giriş başarılı!");
      router.push("/"); // Kullanıcı giriş yaptıktan sonra yönlendirme
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Hata: ${error.message}`);
      } else {
        alert("Bilinmeyen bir hata oluştu.");
      }
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black bg-opacity-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <Image
        src="/arkaplan.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-20 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#9b703c]">
          Login
        </h2>
        <p className="text-[#9b703c] mt-2 text-sm sm:text-base">
          Have an account?
        </p>

        <form onSubmit={handleLogin} className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white bg-opacity-35 text-[#9b703c] placeholder-[#9b8161] border border-white/20 focus:border-[#9b703c] text-sm sm:text-base"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white bg-opacity-30 text-[#9b703c] placeholder-[#9b8161] border border-white/20 text-sm sm:text-base"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-[#9b703c] text-sm sm:text-base"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-orange-400 text-white rounded-lg text-sm sm:text-base"
          >
            SIGN IN
          </button>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-between text-[#9b703c] text-xs sm:text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember Me
          </label>
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="text-[#9b703c] mt-4 text-sm sm:text-base">
          — Or Sign In With —
        </div>
        <div className="flex justify-center mt-2">
          <Link href="/">
            <button className="p-3 w-full bg-[#ebdfd2] text-[#9b703c] rounded-lg text-sm sm:text-base">
              Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
