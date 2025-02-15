// lib/firebaseAuthGuard.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const FirebaseAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-orange-500">Yükleniyor...</div>
    );
  }

  return <>{children}</>;
};

export default FirebaseAuthGuard;
