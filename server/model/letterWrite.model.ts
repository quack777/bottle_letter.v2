import mongoose, { Schema, Model, Document } from 'mongoose';

type LetterWriteDocument = Document & {
  title: string;
  contents: string;
};

type LetterWriteInput = {
  title: LetterWriteDocument['title'];
  contents: LetterWriteDocument['contents'];
};

const letterWriteSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  contents: {
    type: Schema.Types.String,
    required: true,
  },
});

const LetterWrite: Model<LetterWriteDocument> = mongoose.model<LetterWriteDocument>(
  'LetterWrite',
  letterWriteSchema
);

export { LetterWrite, LetterWriteInput, LetterWriteDocument };
