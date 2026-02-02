import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpContainer = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For mobile field, only allow numbers
    if (name === 'mobile' && value !== '' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const userData = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
    };

    signUp(userData);
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <SignUpForm
      formData={formData}
      errors={errors}
      isLoading={isLoading}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
