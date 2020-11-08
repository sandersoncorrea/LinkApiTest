import mongoose from "mongoose";

const DealReport = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("DealReport", DealReport);
