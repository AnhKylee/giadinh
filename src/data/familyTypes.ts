import { FamilyType, FamilyTypeKey } from "@/types";

export const FAMILY_TYPES: Record<FamilyTypeKey, FamilyType> = {
  A: {
    key: "A",
    label: "Gắn Kết",
    emoji: "❤️",
    gif: "/gifs/gan-ket",
    color: "#d95f5f",
    bg: "#fdeaea",
    description:
      "Gia đình bạn rất gắn kết và yêu thương. Các thành viên luôn quan tâm, chia sẻ và hỗ trợ lẫn nhau trong mọi hoàn cảnh. Bầu không khí ấm áp, cởi mở và đầy tin tưởng — đây là nền tảng vững chắc cho sự phát triển của mỗi người.",
    traits: ["Yêu thương", "Cởi mở", "Tin tưởng", "Hỗ trợ lẫn nhau"],
  },
  B: {
    key: "B",
    label: "Ổn Định",
    emoji: "🤝",
    gif: "/gifs/on-dinh",
    color: "#5b8fd9",
    bg: "#eaf0fb",
    description:
      "Gia đình bạn ổn định và có tổ chức. Mọi người có trách nhiệm rõ ràng, sinh hoạt nền nếp và giải quyết vấn đề một cách có kế hoạch. Dù không quá sôi nổi về cảm xúc, gia đình vận hành trơn tru và đáng tin cậy.",
    traits: ["Có trách nhiệm", "Có tổ chức", "Đáng tin cậy", "Nề nếp"],
  },
  C: {
    key: "C",
    label: "Xa Cách",
    emoji: "😶",
    gif: "/gifs/xa-cach",
    color: "#888888",
    bg: "#f2f2f2",
    description:
      "Gia đình bạn có xu hướng xa cách về mặt cảm xúc. Các thành viên ít giao tiếp, ít chia sẻ và mỗi người tự lo việc của mình. Đây là tín hiệu để nhìn lại và tìm cách kết nối, xây dựng sự gần gũi hơn.",
    traits: ["Độc lập", "Ít chia sẻ", "Cần kết nối hơn", "Ít giao tiếp"],
  },
  D: {
    key: "D",
    label: "Xung Đột",
    emoji: "🔥",
    gif: "/gifs/xung-dot",
    color: "#e06030",
    bg: "#fdeee8",
    description:
      "Gia đình bạn đang trải qua nhiều căng thẳng và xung đột. Các mâu thuẫn chưa được giải quyết triệt để tạo ra áp lực cho mọi người. Đây là lúc cần lắng nghe nhau nhiều hơn và cùng xây dựng môi trường gia đình lành mạnh hơn.",
    traits: ["Căng thẳng", "Cần cải thiện", "Nhiều mâu thuẫn", "Cần hỗ trợ"],
  },
};
