import { useState, useContext, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { updateProfile, changePassword, updatePreferences } from '../services/api';
import { User, Lock, Bell, Moon, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Settings = () => {
  const { user, updateUser } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Profile Settings
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    dataUpdates: true
  });

  // Appearance Settings
  const [appearance, setAppearance] = useState({
    language: 'en',
    timezone: 'Asia/Kolkata'
  });
  const [appearanceTab, setAppearanceTab] = useState('theme');

  // Password Change
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        organization: user.organization || ''
      });

      if (user.preferences) {
        setNotifications(user.preferences.notifications || notifications);
        setAppearance(user.preferences.appearance || appearance);
      }
    }
  }, [user]);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await updateProfile(profileData);
      updateUser(response.data); // Update user in context
      showMessage('success', 'Profile updated successfully!');
    } catch (error) {
      showMessage('error', error.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showMessage('error', 'Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      showMessage('success', 'Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      showMessage('error', error.response?.data?.message || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationToggle = async (key) => {
    const newNotifications = { ...notifications, [key]: !notifications[key] };
    setNotifications(newNotifications);

    try {
      await updatePreferences({ notifications: newNotifications });
      showMessage('success', 'Notification preferences updated!');
    } catch (error) {
      showMessage('error', 'Failed to update preferences');
      setNotifications(notifications); // Revert on error
    }
  };

  const handleAppearanceUpdate = async (key, value) => {
    const newAppearance = { ...appearance, [key]: value };
    setAppearance(newAppearance);

    try {
      await updatePreferences({ appearance: newAppearance });
      showMessage('success', 'Appearance settings updated!');
    } catch (error) {
      showMessage('error', 'Failed to update settings');
      setAppearance(appearance); // Revert on error
    }
  };

  const handleDarkModeToggle = async () => {
    toggleDarkMode();
    const newDarkMode = !darkMode;
    
    try {
      await updatePreferences({ 
        appearance: { ...appearance, darkMode: newDarkMode }
      });
      showMessage('success', `${newDarkMode ? 'Dark' : 'Light'} mode enabled!`);
    } catch (error) {
      showMessage('error', 'Failed to update theme');
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <Lock className="h-5 w-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'appearance', name: 'Appearance', icon: <Moon className="h-5 w-5" /> }
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Message Alert */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
          message.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
        }`}>
          {message.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          <span>{message.text}</span>
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white/6 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/20 rounded-xl shadow-md p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white/6 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/20 rounded-xl shadow-md p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        placeholder="+91 1234567890"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={profileData.organization}
                        onChange={(e) => setProfileData({...profileData, organization: e.target.value})}
                        placeholder="Your organization"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Change Password</h2>
                <form onSubmit={handlePasswordChange} className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                      minLength="6"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                      minLength="6"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Updating...' : 'Update Password'}
                  </button>
                </form>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates about your account' },
                    { key: 'pushNotifications', label: 'Push Notifications', desc: 'Get browser push notifications' },
                    { key: 'weeklyReport', label: 'Weekly Reports', desc: 'Receive weekly summary of economic data' },
                    { key: 'dataUpdates', label: 'Data Updates', desc: 'Get notified when new data is published' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-4 border-b dark:border-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle(item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          notifications[item.key] ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Appearance Settings</h2>

                {/* Sub-tabs */}
                <div className="mb-4 flex space-x-2">
                  <button
                    onClick={() => setAppearanceTab('theme')}
                    className={`px-3 py-1 rounded-md ${appearanceTab === 'theme' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    Theme
                  </button>
                </div>

                <div className="space-y-6">
                  {appearanceTab === 'theme' && (
                    <div className="flex items-center justify-between py-4 border-t dark:border-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                          <Moon className="h-4 w-4 mr-2" />
                          Theme
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">Toggle between Light and Dark mode (affects background and text color globally)</p>
                      </div>
                      <button
                        onClick={handleDarkModeToggle}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                        aria-label="Toggle theme"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;