import BackButton from "../components/BackButton";

function LinkAnswer1() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkTag2" />
          <BackButton back={false} page="/LinkAnswer1" />
        </div>
        <div className="flex-col items-start">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            XXX 님에게 전하고 싶은
          </p>
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            칭찬이 있나요??
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="w-[360px] h-[580px] flex flex-col items-start overflow-hidden relative border-2 rounded-lg border-[#C1C6CF] bg-white">
            <p className="text-left font-Preahvihear text-[14px] font-normal mt-4 ml-4">
              내용을 적어주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer1;