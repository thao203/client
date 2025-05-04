import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { ToastContainer, toast } from 'react-toastify';
import styles from './About.module.scss'; // Tạo file SCSS mới
import Header from '../../HomePage/Layouts/Header/Header'; // Component Header
import MenuLeft from '../../HomePage/Layouts/MenuLeft/MenuLeft'; // Component MenuLeft
import Footer from '../../HomePage/Layouts/Footer/Footer'; // Component Footer
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const LibraryIntro = () => {
  const [activeSection, setActiveSection] = useState(null);

  const libraryInfo = {
    name: 'Thư Viện Điện Tử',
    established: '1995',
    location: 'Tầng 2 - HA10 - 218 Lĩnh Nam, Q. Hoàng Mai, TP. Hà Nội',
    booksCount: '50,000+',
    services: ['Mượn sách miễn phí', 'Phòng đọc hiện đại', 'Thư viện số trực tuyến', 'Sự kiện văn hóa hàng tháng'],
  };

  useEffect(() => {
    document.title = 'Giới thiệu';
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={cx('wrapper')}>
      <ToastContainer />

      <header className={cx('header')}>
        <Header />
      </header>

      <div className={cx('main-container')}>
        <aside className={cx('menu-left')}>
          <MenuLeft />
        </aside>

        <main className={cx('content')}>
          <header className={cx('header-page-admin')}>
            <div className={cx('hero-section')}>
              <div className={cx('hero-overlay')}>
                <h1 className={cx('hero-title')}>Chào mừng đến {libraryInfo.name}</h1>
                <p className={cx('hero-subtitle')}>Khám phá kho tàng tri thức</p>
                <a href="https://lib.uneti.edu.vn/" target="_blank" rel="noopener noreferrer">
                  <button className={cx('hero-button', 'btn', 'btn-primary')}>Tìm hiểu thêm</button>
                </a>
              </div>
            </div>
          </header>

          <section className={cx('info-account')}>
            <h2 className={cx('section-heading')}>Về chúng tôi</h2>
            <div className={cx('info-card')}>
              <p>
                Trung tâm Thư viện Trường Đại học Kinh tế - Kỹ thuật Công nghiệp được thành lập theo Quyết định số:
                358/QĐ-ĐHKTKTCN ngày 04 tháng 08 năm 2020 của Hiệu trưởng, trên cơ sở tách ra từ tổ Thư viện trực thuộc
                phòng Đào tạo trước đây, trở thành một đơn vị độc lập. Trung tâm Thư viện được Lãnh đạo Trường định
                hướng phát triển theo mô hình lấy Bạn đọc làm trung tâm, được Nhà trường đầu tư nâng cấp, xây dựng trong
                thời gian vừa qua tạo nên một không gian giáo dục, trong đó có các thiết bị chuyên dùng hiện đại, hạ
                tầng mạng, không gian mở, phòng đọc, phòng học nhóm, phòng hội thảo và phòng tự học, phục vụ tốt nhất
                cho Bạn đọc đến với Thư viện. Thư viện áp dụng khung phân loại DDC, tiêu chuẩn quốc tế về mô tả biên mục
                AACR2 và tiêu chuẩn Dublin Core để nâng cao hiệu quả hoạt động Thư viện. Hiện nay, Thư viện có số lượng
                tài liệu in với hơn 10.000 đầu sách, với nhiều chủ đề khác nhau, … có gần 4.000 bản tài liệu số bao gồm
                Giáo trình, Tài liệu học tập, Khóa luận tốt nghiệp và Luận văn thạc sĩ. Ngoài ra, Thư viện cũng có các
                CSDL liên kết trong nước và quốc tế như: Tài nguyên số của Trung tâm Truyền thông và Tri thức số - Đại
                học Bách Khoa HN; Trung tâm kết nối Tri thức số; CSDL điện tử EBSCO; CSDL điện tử Springer với 1699 tài
                liệu được nhà trường mua quyền truy cập vĩnh viễn. Khóa luận tốt nghiệp và Luận văn thạc sĩ được phân
                loại và sắp xếp theo khung phân loại DDC dễ tìm, dễ sử dụng với các lĩnh vực về Kinh tế, Kỹ thuật, … Với
                định hướng lấy Bạn đọc làm trung tâm, Nhà trường tiếp tục triển khai xây dựng Thư viện mới tại cơ sở Hà
                Nội trong thời gian tới. Tạo nên giảng đường thứ 2 thực sự thoải mái, văn minh, hiện đại và kết nối cho
                Sinh viên và Bạn đọc nói chung. Trung tâm Thư viện hiện tại với đội ngũ cán bộ là 13 người, được phân
                công tại 03 địa điểm làm việc của Trường, đảm bảo đủ tiêu chí về chuyên môn nghiệp vụ để phục vụ Bạn đọc
                với phương châm: “VUI VẺ - TẬN TÂM - KẾT NỐI - VĂN MINH”.
              </p>
            </div>

            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <h2 className={cx('section-heading')} onClick={() => toggleSection('services')}>
              Dịch vụ nổi bật
            </h2>
            <div className={cx('services-grid', { active: activeSection === 'services' })}>
              {libraryInfo.services.map((service, index) => (
                <div key={index} className={cx('service-card')}>
                  <span className={cx('service-icon')}>📚</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <h2 className={cx('section-heading')}>Liên hệ</h2>
            <div className={cx('contact-info')}>
              <div className={cx('contact-item')}>
                <span className={cx('contact-icon')}>📍</span>
                <p>{libraryInfo.location}</p>
              </div>
              <div className={cx('contact-item')}>
                <span className={cx('contact-icon')}>✉️</span>
                <p>thuvien@uneti.edu.vn</p>
              </div>
              <div className={cx('contact-item')}>
                <span className={cx('contact-icon')}>📞</span>
                <p>0988-123-456</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className={cx('footer')}>
        <Footer />
      </footer>
    </div>
  );
};

export default LibraryIntro;
