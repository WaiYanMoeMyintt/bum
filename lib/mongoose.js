import mongoose from "mongoose";

const connectDatabase =  async  ()=> {
      try {
         const mongoUrl = process.env.MONGOOSE_URL;
         await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
         console.log(`Database process is successfully.`);
      }
      catch(err) {
        return console.error(err.message);
      }
}

export default connectDatabase;