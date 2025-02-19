import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firebaseUID: string; // Store the Firebase UID
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firebaseUID: { type: String, required: true, unique: true }, // Add UID field
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema, "User");
export default User;
