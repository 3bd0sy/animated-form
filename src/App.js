import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-background relative h-screen overflow-hidden w-screen flex justify-center items-center">
      <motion.section
        initial={{ x: -100, y: -100 }}
        animate={{ x: 100, y: 0, rotate: 45 }}
        transition={{ duration: 1.5 }}
        className="w-700 h-700 bg-secondary -top-80 rotate-45 z-10 -left-80 rounded-[100px] absolute"
      ></motion.section>
      <motion.form
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        className="bg-primary z-20 w-700 relative h-700 rounded-50 flex flex-col justify-center items-center text-center"
      >
        <header>
          <h1 className="text-5xl">Create An Account</h1>
          <p className="text-2xl max-w-[470px]">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </header>

        
        <div className="mt-12 mb-6">
          <input
            className="w-[570px]  text-2xl bg-white  border-2	border-neutral-200 p-4	  rounded-2xl h-20"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="max-w-[570px]">
          <input
            className="w-[570px] text-2xl bg-white  border-2	border-neutral-200 p-4	  rounded-2xl h-20"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="mt-8">
          <button className="w-96 h-24 bg-[#84c7ae] text-white rounded-3xl text-3xl">
            Create An Account
          </button>
          <p className=" mt-4 text-2xl">
            Already Have An Account?
            <a href="#" className="ml-1 text-lime-700 cursor-pointer">
              Sign In
            </a>
          </p>
        </div>
      </motion.form>
      <motion.section
        initial={{ x: 100, y: 100 }}
        animate={{ x: -100, y: -100, rotate: 45 }}
        transition={{ duration: 1.5 }}
        className="w-700 h-700 bg-secondary -bottom-80 rotate-45 z-10 -right-80 rounded-[100px] absolute"
      ></motion.section>
    </div>
  );
}

export default App;
