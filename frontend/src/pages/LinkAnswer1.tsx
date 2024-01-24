import { useState } from 'react';
import BackButton from '../components/BackButton';
import FeedbackAnswerInput from '../components/FeedbackAnswerInput';

function LinkAnswer1() {
  const [answerInputs, setAnswerInputs] = useState('내용을 입력하세요');

  const onFocus = () => {
    if (answerInputs === '내용을 입력하세요') {
      setAnswerInputs('');
    }
  };

  const onBlur = () => {
    if (answerInputs === '') {
      setAnswerInputs('내용을 입력하세요');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerInputs(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-20 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkTag2" />
          <BackButton back={false} page="/LinkAnswer2" />
        </div>
        <div className="flex flex-col items-center gap-20">
          <div className="flex-full">
            <p className="font-pre text-[22px] font-bold text-center">
              XXX님에게 전하고 싶은
            </p>
            <p className="font-pre text-[22px] font-bold text-center">
              칭찬이 있나요?
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <FeedbackAnswerInput
              value={answerInputs}
              onTextChange={onInputChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer1;
