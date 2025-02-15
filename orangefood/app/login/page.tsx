"use client";
import Header from "@/components/Header";
import React, { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Giriş başarılı!");
      router.push("/"); // Kullanıcı giriş yaptıktan sonra yönlendirme
    } catch (error: any) {
      alert(`Hata: ${error.message}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-orange-400">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            OrangeFood Giriş Yap
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
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
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Giriş Yap
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Henüz hesabınız yok mu?{" "}
            <a href="/signup" className="text-orange-500 hover:underline">
              Kayıt Ol
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
