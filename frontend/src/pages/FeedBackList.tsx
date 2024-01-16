import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export interface Feedback {
  feedback_id: string;
  respondent_info: {
    respondent_name: string;
    category: string;
  };
  tags: string[];
}

const FeedbackList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // 카테고리에 따른 텍스트 반환 함수
  const getCategoryText = (category: string): string => {
    switch (category) {
      case "developer":
        return "개발자";
      case "designer":
        return "디자이너";
      case "planner":
        return "기획자";
      case "pmpo":
        return "PM/PO";
      case "others":
        return "기타직무";
      default:
        return "";
    }
  };

  useEffect(() => {
    const apiUrl = `http://localhost:포트번호/feedbacks/response/list`;
    const userId = "사용자ID";

    const requestData = {
      userid: userId,
      category: category,
    };

    axios
      .get(apiUrl, { params: requestData })
      .then((response: AxiosResponse) => {
        if (response.data.status === "success") {
          setFeedbacks(response.data.feedbacks);
          console.log(response.data.feedbacks);
        } else {
          console.error("서버 에러:", response.data);
        }
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          console.error("요청 실패:", error.response.data);
        } else {
          console.error("네트워크 오류:", error.message);
        }
      });
  }, [category]);

  if (!category) {
    // 카테고리가 없을 경우에 대한 처리
    return <div>카테고리가 정의되지 않았습니다.</div>;
  }

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/Linkmain" />
      </div>
      <div className="text-xl mt-4">{getCategoryText(category)}의 피드백</div>
      <ul>
        {feedbacks.map((feedback) => (
          <li
            key={feedback.feedback_id}
            className="h-32 w-full flex flex-col justify-start p-4 leading-1.25 text-sm bg-white rounded-xl border border-c-purple border-opacity-50 mt-2"
          >
            <div>
              <p className="text-xl text-black">
                응답자: {feedback.respondent_info.respondent_name}
              </p>
              <p className="text-gray-600">태그: {feedback.tags.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
