import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, login } = useAuth();

    if (!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            if (isLogin) {
                await login(email, password);
            } else {
                await signup(email, password, name);
            }
            onClose(); // Close modal on success
        } catch (err) {
            setError('Failed to ' + (isLogin ? 'log in' : 'create an account') + ': ' + err.message);
        }

        setLoading(false);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
            <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                    &times;
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>

                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modal-name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="modal-name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modal-email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="modal-email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modal-password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="modal-password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                                type="submit"
                                disabled={loading}
                            >
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <button
                            className="text-blue-500 hover:text-blue-800 text-sm"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
