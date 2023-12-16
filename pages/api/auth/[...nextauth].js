import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcryptjs";
dbConnect();
export default NextAuth({
    /*  adapter: MongoDBAdapter(clientPromise), */
     providers: [

         CredentialsProvider({
           name: "Credentials",
     
           credentials: {
             username: { label: "Username", type: "text", placeholder: "name" },
             password: { label: "Password", type: "password" },
           },
           async authorize(credentials, req) {
             const email = credentials.email;
             const password = credentials.password;
             const user = await User.findOne({ email: email });
             if (!user) {
               throw new Error("You haven't registered yet!");
             }
             if (user) {
               return signInUser({ user, password });
             }
           },
         }),
       ],
       pages: {
         signIn: "/auth/Login",
       },
       database: process.env.MONGODB_URI,
       secret: "secret",
 });
 
  const signInUser = async ({ user, password }) => {
   const isMAtch = await bcrypt.compare(password, user.password);
   if (!isMAtch) {
     throw new Error("Incorrect password!");
   }
   return user;
 };   
