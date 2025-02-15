"use client";
import Header from "@/components/Header";
import React, { useState, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Kayıt başarılı!");
      router.push("/login"); // Kayıt sonrası login sayfasına yönlendir
    } catch (error: any) {
      alert(`Hata: ${error.message}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-orange-400">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            OrangeFood Kayıt Ol
          </h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email adresinizi girin"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="password">
                Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Şifrenizi girin"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-gray-700"
                htmlFor="confirmPassword"
              >
                Şifreyi Onayla
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Şifrenizi tekrar girin"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Kayıt Ol
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Zaten hesabınız var mı?{" "}
            <a href="/login" className="text-orange-500 hover:underline">
              Giriş Yap
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
