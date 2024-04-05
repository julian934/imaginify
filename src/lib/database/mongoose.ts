import mongoose,{ Mongoose } from "mongoose";

const MONGODB_URL=process.env.MONGODB_URL;

interface MongooseConnection {
    conn:Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// In NextJS, each back-end request is handled independently, and only accessed to perform that action
//and shut down again until the next request.
//1:07:00 for full difference between serverful and serverless architectures.

let cached:MongooseConnection=(global as any).mongoose
if(!cached){
    cached=(global as any).mongoose={
        conn:null, promise:null
    }
}

export const connectToDatabase=async()=>{
    if(cached.conn) return cached.conn;
    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');
    cached.promise=cached.promise || mongoose.connect(MONGODB_URL,{dbName:'imaginify',bufferCommands:false})

    cached.conn=await cached.promise;

    return cached.conn;
}