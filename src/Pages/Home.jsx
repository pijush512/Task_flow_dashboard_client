



import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiPlay } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden">
      <section className="relative pt-20 pb-16">

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Manage your <span className="text-indigo-600 italic">workflow</span> <br />
            without the headache.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            TaskFlow helps you organize, track, and optimize your team's work in one simple, beautiful dashboard. Spend less time planning and more time doing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/auth/login"
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0d3b33] hover:-translate-y-1 transition-all shadow-xl shadow-indigo-100"
            >
              Get Started <FiArrowRight />
            </Link>
            <button className="w-full sm:w-auto border border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
              <FiPlay className="text-indigo-600 fill-indigo-600" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;