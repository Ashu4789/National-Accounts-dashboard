import { useState } from 'react';
import axios from 'axios';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const AdminUpdateForm = ({ onUpdateAdded }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'info',
        category: '',
        value: '',
        change: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Assumes token is stored here
                }
            };

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/dashboard/updates`, formData, config);

            if (onUpdateAdded) onUpdateAdded(res.data);

            setSuccess(true);
            setFormData({
                title: '',
                description: '',
                type: 'info',
                category: '',
                value: '',
                change: ''
            });
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add update');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Send className="h-5 w-5 mr-2 text-primary" />
                Admin: Post New Update
            </h3>

            {error && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-4 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-emerald-500/10 text-emerald-600 text-sm p-3 rounded-lg mb-4 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Update posted successfully!
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                            placeholder="e.g. Sensex Crashes"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                            placeholder="e.g. Market"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                        placeholder="Details about the update..."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                        >
                            <option value="info">Info</option>
                            <option value="success">Success</option>
                            <option value="warning">Warning</option>
                            <option value="trend">Trend</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Value (Optional)</label>
                        <input
                            type="text"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                            placeholder="e.g. 75,000"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Change (Optional)</label>
                        <input
                            type="text"
                            name="change"
                            value={formData.change}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                            placeholder="e.g. -2.5%"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md font-medium transition-colors disabled:opacity-50"
                >
                    {loading ? 'Posting...' : 'Post Update'}
                </button>
            </form>
        </div>
    );
};

export default AdminUpdateForm;
