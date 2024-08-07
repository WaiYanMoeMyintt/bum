import mongoose from "mongoose";

const date  = new Date();


const BumBumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const BumBumModel = mongoose.models.BumBum || mongoose.model("BumBum", BumBumSchema);

export default BumBumModel;
