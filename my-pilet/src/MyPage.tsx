import * as React from "react";

export interface MyPageProps {
  data: Array<{
    id: number;
    userId: number;
    title: string;
    body: string;
  }>;
}

export const MyPage: React.FC<MyPageProps> = ({ data }) => (
  <div className="flex flex-row justify-center align-content-center mt-2">
    <div className="p-2">
      <h1 className="text-center font-bold text-lg capitalize">posts from react pilet</h1>
      <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded w-1/5"></div>

      <ul className="list-none">
        {data.map(item => (
          <li key={item.id} className="m-4 bg-gray-100">
            <p className="font-bold text-lg">{item.title}</p>
            <p className="italic">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
