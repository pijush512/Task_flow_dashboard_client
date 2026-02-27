import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-200 border-t border-gray-100 py-8 mt-auto">
            <div className='w-11/12 mx-auto'>
                <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2026 TaskFlow Assignment. Developed by <span className="font-semibold text-slate-800">Pijush Sarker</span>
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm transition">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




