import { SlPlane } from "react-icons/sl";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className="bg-[#F1F2F4] p-1.5 my-5 flex h-[565px]">
      <div className="w-[200px] m-3 p-3 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Новое обращение</h1>
          <h1 className="text-white bg-[#22B5DC] w-[50px] h-[30px] flex items-center justify-center rounded-3xl">
            3
          </h1>
        </div>

        <div className="bg-gray-300 p-2 rounded-md mt-3">
          <h1>Борисова Ольга</h1>
          <p>36 лет, Ташкент, Хан Анна,</p>

          <div className="flex justify-between gap-2 mt-5">
            <div className="leftBox flex flex-col  items-center gap-1">
              <img className="w-5" src="./clipboard.png" alt="clipboard" />
              <img className="w-[1px]" src="/line.png" alt="line" />
              <SlPlane size={"20px"} />
            </div>

              <div className="w-full">
              <div className="flex items-center justify-between text-[12px] font-medium text-[#909090]">
                <p>Диагноз</p> <p>10.01</p>
              </div>
              <p className="font-medium text-[12px] mt-3 leading-3">
                Обратился с диагнозом “Птоз”
              </p>

              <div className="flex items-center justify-between text-[12px] font-medium text-[#909090] mt-7">
                <p>Вылет</p> <p>30.01</p>
              </div>
              <p className="font-medium text-[12px] mt-3 leading-3">
                Вылет пациента в клинику
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[200px] m-3 p-3 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Запрос отправлен</h1>
          <h1 className="text-white bg-[#22B5DC] w-[50px] h-[30px] flex items-center justify-center rounded-3xl">
            1
          </h1>
        </div>

        
      </div>

      <div className="w-[200px] m-3 p-3 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">В процессе</h1>
          <h1 className="text-white bg-[#22B5DC] w-[50px] h-[30px] flex items-center justify-center rounded-3xl">
            3
          </h1>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
