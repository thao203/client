import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './DetailCategory.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import MenuLeft from '../../MenuLeft/MenuLeft';
import MainBooks from '../ListBook/Mainbook';
import request from '../../../../../config/Connect';

const cx = classNames.bind(styles);

function DetailCategory() {
  const [books, setBooks] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { madanhmuc } = useParams(); // Lấy madanhmuc từ URL
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sách theo danh mục';
    const fetchBooksByCategory = async () => {
      console.log('madanhmuc từ URL:', madanhmuc);
      if (!madanhmuc) {
        setBooks([]);
        setCategoryName('Không có mã danh mục');
        return;
      }

      try {
        const res = await request.get('/api/getBooksByCategory', {
          params: { madanhmuc },
        });
        setBooks(res.data.books);

        const categoryRes = await request.get('/api/getAllCategories');
        const category = categoryRes.data.data.find((cat) => cat.madanhmuc === madanhmuc);
        setCategoryName(category ? category.tendanhmuc : madanhmuc);
        console.log('Danh sách sách:', res.data.books);
      } catch (error) {
        console.error('Lỗi khi lấy sách theo danh mục:', error);
        if (error.response?.status === 404) {
          setBooks([]);
          const categoryRes = await request.get('/api/getAllCategories');
          const category = categoryRes.data.data.find((cat) => cat.madanhmuc === madanhmuc);
          setCategoryName(category ? category.tendanhmuc : madanhmuc);
        } else if (error.response?.status === 400) {
          setBooks([]);
          setCategoryName(madanhmuc || 'Không có mã danh mục');
        }
      }
    };

    fetchBooksByCategory();
  }, [madanhmuc]);

  const handleBack = () => {
    navigate('/categories');
  };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Header />
      </header>

      <div className={cx('main-container')}>
        <aside className={cx('menu-left')}>
          <MenuLeft />
        </aside>

        <main className={cx('content')}>
          <Box sx={{ padding: 2 }}>
            {/* Container cho nút và tiêu đề */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Đẩy nút sang trái, tiêu đề ra giữa
                mb: 3, // Khoảng cách dưới
                position: 'relative',
              }}
            >
              {/* Nút Quay lại */}
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
                sx={{
                  borderColor: '#3498DB',
                  color: '#3498DB',
                  '&:hover': {
                    borderColor: '#2C3E50',
                    color: '#2C3E50',
                  },
                  textTransform: 'none',
                  zIndex: 10, // Đảm bảo nút không bị đè
                }}
              >
                Quay lại
              </Button>
              {/* Tiêu đề */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#2C3E50',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  borderBottom: '3px solid #3498DB',
                  paddingBottom: '5px',
                  flexGrow: 1, // Để tiêu đề chiếm không gian còn lại
                }}
              >
                📚 {categoryName ? `Danh mục: ${categoryName}` : 'Danh mục sách'}
              </Typography>
              {/* Placeholder để cân bằng layout nếu cần */}
              <Box sx={{ width: '80px' }} /> {/* Điều chỉnh độ rộng nếu cần */}
            </Box>

            {/* Nội dung sách */}
            {books.length > 0 ? (
              <MainBooks dataBooks={books} isMenuOpen />
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                Không có sách nào trong danh mục này.
              </Typography>
            )}
          </Box>
        </main>
      </div>

      <footer className={cx('footer')}>
        <Footer />
      </footer>
    </div>
  );
}

export default DetailCategory;
