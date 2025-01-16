---
id: performance-test
title: Performance Testing
---

## Tổng kết chiến dịch kiểm thử hiệu năng spiderum
Đây là bài tổng kết của series kiểm thử hiệu năng lần này. Một lần nữa hi vọng loạt bài này giúp ích được các bạn một chút nào đó.

### Series Kiểm Thử Hiệu Năng Spiderum:

- Bài viết thứ nhất: Lỗ hổng spiderum hay chỉ là tính năng – Cái nhìn từ một Performance testing
- Bài viết thứ 2: Performance testing – Nó là cái quái gì mà lại dùng nó để vọc phá spiderum
- Bài viết thứ 3: Chiến lược kiểm thử hiệu năng Spiderum - Kịch bản chức năng
- Bài viết thử 4: Chiến lược kiểm thử hiệu năng Spiderum - Đừng vội! hãy hiểu bản chất vấn đề với API Testing
- Bài viết thứ 5: Chiến lược kiểm thử hiệu năng Spiderum – Performance tesing thật vi diệu
- Bài viết thứ 6: Bắt đầu chiến dịch – Phát hiện một số tính năng nhỏ với Manual Testing
- Bài viết thứ 7: Bắt đầu chiến dịch – Tôi kiểm thử API của spiderum như thế nào
- Bài viết thứ 8: Bắt đầu chiến dịch – Cách lấy dữ liệu spiderum thông qua Postman
- Bài viết thứ 9: Jmeter và thế giới Performance Testing
- Bài viết thứ 10: Record script spiderum – Cách mà tôi tạo ra script performance test
- Bài viết thứ 11: Update script jmeter spiderum – Cách mà tôi tổ chức cấu trúc kịch bản kiểm thử
- Bài viết thứ 12: Update script jmeter spiderum - Script Performance Test không phải chỉ record là xong! Còn nhiều thứ hay ho lắm
- Bài viết thứ 13: Update script jmeter spiderum - Làm sao để có thể chuẩn bị data cho cả triệu CCUs
- Bài viết thứ 14: Bắt đầu chạy kiểm thử hiệu năng - Chúc mừng bạn đã nằm trong tầm ngắm của tôi
- Bài viết thứ 15: Báo cáo kiểm thử hiệu năng spiderum và phân tích báo cáo sau khi chạy script
- Bài viết thứ 16: Tổng kết chiến dịch kiểm thử hiệu năng spiderum

## Tổng hợp Issue
### Issue phát hiện từ manual test:

- Không xác thực khi quên mật khẩu
- Không có duyệt bài hoặc chặn post bài auto
- Không thể xem thêm tin nổi bật
- Không chặn upvote/downvote liên tục
- Đếm số lượng upvote trong thông báo sai chỉ dựa trên số lượng click upvote chứ không tính trung bình
- Trả lời bình luận đệ quy quá nhiều khiến vỡ layout
- Chức năng tìm kiếm không thực sự là chứa từ tìm kiếm
- Mặc dù xóa hết bình luận rồi nhưng trong trang cá nhân vẫn đếm được số bình luận và số trang

### Issue phát hiện từ api test:

- End point /api/v2/message/requestSingleChat không có phân trang, khi có lượng chat nhiều call sẽ bị timeout
- End point /api/v1/post/create có thể tạo bài viết bao nhiêu tag tùy thích

### Issue phát hiện từ performance test:

- Response time cao ở bước kiểm tra home page, kiểm tra domain topUser hay không
- Tỉ lệ lỗi ở bước tìm kiếm và upvote/downvote còn cao
- Độ lệch giữa lần đầu login và các lần sau còn cao

Toàn bộ script, data test, report cho chiến dịch lần này mình đều để hết trên github cá nhân của mình nhé!

https://github.com/ntechdevelopers/ntech.performance.spiderum
