import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todos';

const MONGO = {
  options: MONGO_OPTIONS,
  url: MONGO_URI,
};

const config = {
  mongo: MONGO,
};

export default config;
