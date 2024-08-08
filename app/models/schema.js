import mongoose from "mongoose";


const currentHour = ()=> new Date().getHours();

const currentMinute = ()=> new Date().getMinutes();


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
    currentHours:{
      type: Number,
      default: currentHour
    },
    currentMinute:{
      type: Number,
      default: currentMinute
    },

    
  },
  {
    timestamps: true,
  }
);

const BumBumModel = mongoose.models.BumBum || mongoose.model("BumBum", BumBumSchema);

export default BumBumModel;
