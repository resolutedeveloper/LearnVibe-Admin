import CryptoJS from "crypto-js";
// const key = CryptoJS.enc.Base64.parse(
//   "LefjQ2pEXmiy/nNZvEJ43i8hJuaAnzbA1Cbn1hOuAgA="
// );

const key1 =
  import.meta.env.VITE_Enc_S_Key_FE ||
  "LefjQ2pEXmiy/nNZvEJ43i8hJuaAnzbA1Cbn1hOuAgA=";
const key = CryptoJS.enc.Base64.parse(key1);
const iv = CryptoJS.enc.Utf8.parse("1020304050607080");

export const EncryptFE = (text: string): string => {
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

export const DecryptFE = (encryptedText: string): string => {
  try {
    if (!encryptedText || typeof encryptedText !== "string") return "-";
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const result = decrypted.toString(CryptoJS.enc.Utf8);
    return result || "Invalid";
  } catch (error) {
    console.error("Decryption failed for text:", encryptedText, error);
    return "Invalid";
  }
};
