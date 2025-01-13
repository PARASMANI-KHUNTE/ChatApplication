import { useState } from 'react';

const SignupPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Signup</h1>
            <form className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="tel"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Phone"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Password"
                            pattern="(?=.*\d)(?=.*[A-Z]).{8,12}"
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 text-gray-500"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <div className="relative">
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Confirm Password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 text-gray-500"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Signup
                </button>
            </form>
            <div className="mt-6">
                <p className="text-gray-700 mb-2">Or continue with:</p>
                <div className="flex space-x-4">
                    <button
                        className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        onClick={() => console.log('Google Signup')}
                    >
                        Google
                    </button>
                    <button
                        className="flex items-center justify-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
                        onClick={() => console.log('Facebook Signup')}
                    >
                        Facebook
                    </button>
                    <button
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => console.log('LinkedIn Signup')}
                    >
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
