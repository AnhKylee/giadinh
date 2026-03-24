import { Section, Question } from "@/types";

export const SECTIONS: Section[] = [
  {
    id: 1,
    icon: "🏠",
    title: "Giao Tiếp & Tình Cảm",
    questions: [
      {
        id: 1,
        text: "Khi có vấn đề",
        image: "/gifs/cau-1",
        options: [
          { value: "A", label: "Cùng nói chuyện", emoji: "❤️" },
          { value: "B", label: "Có người xử lý", emoji: "🤝" },
          { value: "C", label: "Không ai nói", emoji: "😶" },
          { value: "D", label: "Cãi nhau", emoji: "🔥" },
        ],
      },
      {
        id: 2,
        text: "Bữa ăn",
        image: "/gifs/cau-2",
        options: [
          { value: "A", label: "Vui vẻ trò chuyện", emoji: "❤️" },
          { value: "B", label: "Ăn nhanh", emoji: "🤝" },
          { value: "C", label: "Im lặng", emoji: "😶" },
          { value: "D", label: "Căng thẳng", emoji: "🔥" },
        ],
      },
      {
        id: 3,
        text: "Khi buồn",
        image: "/gifs/cau-3",
        options: [
          { value: "A", label: "Được quan tâm", emoji: "❤️" },
          { value: "B", label: "Có người giúp", emoji: "🤝" },
          { value: "C", label: "Ít ai để ý", emoji: "😶" },
          { value: "D", label: "Dễ bị bỏ qua", emoji: "🔥" },
        ],
      },
      {
        id: 4,
        text: "Giao tiếp hằng ngày",
        image: "/images/cau-4",
        options: [
          { value: "A", label: "Nhiều", emoji: "❤️" },
          { value: "B", label: "Vừa phải", emoji: "🤝" },
          { value: "C", label: "Ít", emoji: "😶" },
          { value: "D", label: "Hay tranh cãi", emoji: "🔥" },
        ],
      },
      {
        id: 5,
        text: "Không khí gia đình",
        image: "/images/cau-5",
        options: [
          { value: "A", label: "Ấm áp", emoji: "❤️" },
          { value: "B", label: "Ổn định", emoji: "🤝" },
          { value: "C", label: "Lạnh nhạt", emoji: "😶" },
          { value: "D", label: "Áp lực", emoji: "🔥" },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "⚖️",
    title: "Trách Nhiệm & Sinh Hoạt",
    questions: [
      {
        id: 6,
        text: "Việc nhà",
        image: "/gifs/cau-6",
        options: [
          { value: "A", label: "Cùng làm", emoji: "❤️" },
          { value: "B", label: "Phân công", emoji: "🤝" },
          { value: "C", label: "Không rõ", emoji: "😶" },
          { value: "D", label: "Tranh cãi", emoji: "🔥" },
        ],
      },
      {
        id: 7,
        text: "Khi gặp khó khăn",
        image: "/images/cau-7",
        options: [
          { value: "A", label: "Cùng nhau", emoji: "❤️" },
          { value: "B", label: "Có người gánh", emoji: "🤝" },
          { value: "C", label: "Tự lo", emoji: "😶" },
          { value: "D", label: "Đổ lỗi", emoji: "🔥" },
        ],
      },
      {
        id: 8,
        text: "Tài chính",
        image: "/images/cau-8",
        options: [
          { value: "A", label: "Minh bạch", emoji: "❤️" },
          { value: "B", label: "Có người quản", emoji: "🤝" },
          { value: "C", label: "Ít chia sẻ", emoji: "😶" },
          { value: "D", label: "Mâu thuẫn", emoji: "🔥" },
        ],
      },
      {
        id: 9,
        text: "Khi con cái mắc lỗi",
        image: "/images/cau-9",
        options: [
          { value: "A", label: "Gia đình nhẹ nhàng dạy bảo", emoji: "❤️" },
          { value: "B", label: "Nhắc nhở và yêu cầu sửa chữa", emoji: "🤝" },
          { value: "C", label: "Ít quan tâm", emoji: "😶" },
          { value: "D", label: "La mắng, trách phạt", emoji: "🔥" },
        ],
      },
      {
        id: 10,
        text: "Sinh hoạt",
        image: "/images/cau-10",
        options: [
          { value: "A", label: "Đồng đều", emoji: "❤️" },
          { value: "B", label: "Có kế hoạch", emoji: "🤝" },
          { value: "C", label: "Tùy tiện", emoji: "😶" },
          { value: "D", label: "Xung đột", emoji: "🔥" },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: "💬",
    title: "Giải Quyết Mâu Thuẫn",
    questions: [
      {
        id: 11,
        text: "Khi cãi nhau",
        image: "/images/cau-11",
        options: [
          { value: "A", label: "Bình tĩnh", emoji: "❤️" },
          { value: "B", label: "Có người hòa giải", emoji: "🤝" },
          { value: "C", label: "Tránh né", emoji: "😶" },
          { value: "D", label: "Gay gắt", emoji: "🔥" },
        ],
      },
      {
        id: 12,
        text: "Khi có thành viên có thành tích tốt",
        image: "/images/cau-12",
        options: [
          { value: "A", label: "Mọi người cùng vui và chúc mừng", emoji: "❤️" },
          { value: "B", label: "Ghi nhận, khuyến khích", emoji: "🤝" },
          { value: "C", label: "Ít phản ứng", emoji: "😶" },
          { value: "D", label: "So sánh, gây áp lực", emoji: "🔥" },
        ],
      },
      {
        id: 13,
        text: "Khi bị hiểu lầm",
        image: "/images/cau-13",
        options: [
          { value: "A", label: "Giải thích", emoji: "❤️" },
          { value: "B", label: "Chứng minh", emoji: "🤝" },
          { value: "C", label: "Im lặng", emoji: "😶" },
          { value: "D", label: "Nổi nóng", emoji: "🔥" },
        ],
      },
      {
        id: 14,
        text: "Khi có lỗi",
        image: "/images/cau-14",
        options: [
          { value: "A", label: "Xin lỗi", emoji: "❤️" },
          { value: "B", label: "Sửa lỗi", emoji: "🤝" },
          { value: "C", label: "Không nói", emoji: "😶" },
          { value: "D", label: "Đổ lỗi", emoji: "🔥" },
        ],
      },
      {
        id: 15,
        text: "Khi căng thẳng",
        image: "/images/cau-15",
        options: [
          { value: "A", label: "Giữ bình tĩnh", emoji: "❤️" },
          { value: "B", label: "Giải quyết", emoji: "🤝" },
          { value: "C", label: "Tránh xa", emoji: "😶" },
          { value: "D", label: "Làm lớn chuyện", emoji: "🔥" },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: "🧓",
    title: "Quan Tâm & Gắn Kết",
    questions: [
      {
        id: 16,
        text: "Quan tâm người lớn",
        image: "/images/cau-16",
        options: [
          { value: "A", label: "Thường xuyên", emoji: "❤️" },
          { value: "B", label: "Có trách nhiệm", emoji: "🤝" },
          { value: "C", label: "Ít", emoji: "😶" },
          { value: "D", label: "Bỏ qua", emoji: "🔥" },
        ],
      },
      {
        id: 17,
        text: "Hoạt động chung",
        image: "/gifs/cau-17",
        options: [
          { value: "A", label: "Thường xuyên", emoji: "❤️" },
          { value: "B", label: "Có kế hoạch", emoji: "🤝" },
          { value: "C", label: "Hiếm", emoji: "😶" },
          { value: "D", label: "Không vui", emoji: "🔥" },
        ],
      },
      {
        id: 18,
        text: "Thời gian bên nhau",
        image: "/gifs/cau-18",
        options: [
          { value: "A", label: "Nhiều", emoji: "❤️" },
          { value: "B", label: "Vừa đủ", emoji: "🤝" },
          { value: "C", label: "Ít", emoji: "😶" },
          { value: "D", label: "Không thoải mái", emoji: "🔥" },
        ],
      },
      {
        id: 19,
        text: "Chia sẻ cảm xúc với nhau",
        image: "/images/cau-19",
        options: [
          { value: "A", label: "Cởi mở", emoji: "❤️" },
          { value: "B", label: "Có chọn lọc", emoji: "🤝" },
          { value: "C", label: "Hạn chế", emoji: "😶" },
          { value: "D", label: "Dễ xung đột", emoji: "🔥" },
        ],
      },
      {
        id: 20,
        text: "Niềm tin vào gia đình",
        image: "/images/cau-20",
        options: [
          { value: "A", label: "Tin tưởng", emoji: "❤️" },
          { value: "B", label: "Tương đối", emoji: "🤝" },
          { value: "C", label: "Ít", emoji: "😶" },
          { value: "D", label: "Nghi ngờ", emoji: "🔥" },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: "🌍",
    title: "Giá Trị & Môi Trường Gia Đình",
    questions: [
      {
        id: 21,
        text: "Đối với bạn gia đình là",
        image: "/images/cau-21",
        options: [
          { value: "A", label: "Yêu thương", emoji: "❤️" },
          { value: "B", label: "Trách nhiệm", emoji: "🤝" },
          { value: "C", label: "Cá nhân", emoji: "😶" },
          { value: "D", label: "Áp lực", emoji: "🔥" },
        ],
      },
      {
        id: 22,
        text: "Quyết định trong gia đình",
        image: "/images/cau-22",
        options: [
          { value: "A", label: "Cùng bàn", emoji: "❤️" },
          { value: "B", label: "Có người quyết", emoji: "🤝" },
          { value: "C", label: "Ít trao đổi", emoji: "😶" },
          { value: "D", label: "Tranh cãi", emoji: "🔥" },
        ],
      },
      {
        id: 23,
        text: "Tôn trọng lẫn nhau",
        image: "/images/cau-23",
        options: [
          { value: "A", label: "Cao", emoji: "❤️" },
          { value: "B", label: "Có", emoji: "🤝" },
          { value: "C", label: "Ít", emoji: "😶" },
          { value: "D", label: "Thiếu", emoji: "🔥" },
        ],
      },
      {
        id: 24,
        text: "Vai trò thành viên",
        image: "/images/cau-24",
        options: [
          { value: "A", label: "Linh hoạt", emoji: "❤️" },
          { value: "B", label: "Rõ ràng", emoji: "🤝" },
          { value: "C", label: "Mơ hồ", emoji: "😶" },
          { value: "D", label: "Mâu thuẫn", emoji: "🔥" },
        ],
      },
      {
        id: 25,
        text: "Tổng thể gia đình",
        image: "/images/cau-25",
        options: [
          { value: "A", label: "Hạnh phúc", emoji: "❤️" },
          { value: "B", label: "Ổn định", emoji: "🤝" },
          { value: "C", label: "Xa cách", emoji: "😶" },
          { value: "D", label: "Căng thẳng", emoji: "🔥" },
        ],
      },
    ],
  },
];

// Flatten all questions with section metadata attached
export const ALL_QUESTIONS: Question[] = SECTIONS.flatMap((s) =>
  s.questions.map((q) => ({
    ...q,
    sectionId: s.id,
    sectionIcon: s.icon,
    sectionTitle: s.title,
  })),
);

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;
