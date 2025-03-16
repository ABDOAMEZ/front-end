import { GoogleLogin } from '@react-oauth/google';
import { useAuthGoogleMutation } from './authApi';

const Login = () => {
  const [authGoogle, { isLoading, error }] = useAuthGoogleMutation();

  const handleSuccess = async (response) => {
    try {
      const { data } = await authGoogle(response.credential);
      
      // حفظ البيانات في الحالة أو localStorage
      localStorage.setItem('token', data.token);
      // dispatch إجراء إذا لزم
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
      />
      {isLoading && <p>جاري المعالجة...</p>}
      {error && <p>حدث خطأ أثناء التسجيل</p>}
    </div>
  );
};