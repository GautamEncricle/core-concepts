import React, { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        skills: []
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!form.email.includes('@')) {
            newErrors.email = 'Email format is invalid';
        }

        if (!form.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (form.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!form.gender.trim()) {
            newErrors.gender = 'Gender is required';
        }

        if (form.skills.length === 0) {
            newErrors.skills = 'At least one skill is required';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setForm((prev) => {
            if (checked) {
                return { ...prev, skills: [...prev.skills, name] };
            } else {
                return {
                    ...prev,
                    skills: prev.skills.filter((skill) => skill !== name),
                };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            console.log('✅ Form Submitted:', form);
            setForm({ name: '', email: '', password: '', gender: '', skills: [] });
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </label>
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

                {/* Email */}
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </label>
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                {/* Password */}
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </label>
                {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

                {/* Gender */}
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender:
                    <select
                        id="gender"
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}

                {/* Skills */}
                <fieldset className="border border-gray-300 rounded-md p-4">
                    <legend className="text-sm font-medium text-gray-700 mb-2">Skills:</legend>
                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="React"
                                checked={form.skills.includes("React")}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">React</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="Angular"
                                checked={form.skills.includes("Angular")}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">Angular</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="Vue"
                                checked={form.skills.includes("Vue")}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">Vue</span>
                        </label>
                    </div>
                </fieldset>
                {errors.skills && <p className="text-red-600 text-sm">{errors.skills}</p>}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>

            <div className="print-data mt-8 bg-gray-50 p-4 rounded-md shadow-inner">
                <h2 className="text-lg font-semibold mb-2">Form Data:</h2>
                <p><span className="font-medium">Name:</span> {form.name}</p>
                <p><span className="font-medium">Email:</span> {form.email}</p>
                <p><span className="font-medium">Password:</span> {form.password}</p>
                <p><span className="font-medium">Gender:</span> {form.gender}</p>
                <p><span className="font-medium">Skills:</span> {form.skills.join(", ")}</p>
            </div>
        </div>
    );
}

export default Form;
