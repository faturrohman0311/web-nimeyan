import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

export const logout = async () => {
  try {
    // logout firebase
    await signOut(auth);

    // hapus cookie token
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // redirect login
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout error:", error);
  }
};
