import mongoose from 'mongoose';

const { NEXT_PUBLIC_MONGODB_URI, NEXT_MONGODB } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI');
}

if (!NEXT_MONGODB) {
    throw new Error('Please define the MONGODB_DB');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
        };

        cached.promise = mongoose
            .connect(NEXT_PUBLIC_MONGODB_URI, options)
            .then((client) => {
                return mongoose;
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
