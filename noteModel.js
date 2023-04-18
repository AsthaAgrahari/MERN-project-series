import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );
  
const Note = model("Note", noteSchema);

export default Note;