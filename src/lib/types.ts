export interface login {
  EmailID: string;
  Password: String;
  Role: string;
}
export interface otp {
  EMailID: string;
  Status: number;
}
export interface verifyOtp {
  EmailID: string;
  Status: number;
  OTP: string;
  FirstName: string;
  Password: string;
}
export interface updateUser {
  FirstName: string;
  EmailID: string;
  Password: string;
}
