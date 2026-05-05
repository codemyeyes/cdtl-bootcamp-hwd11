"use client";

import { useQuery } from "@tanstack/react-query";

type Category = {
  id: number;
  name: string;
};

async function getData() {
  const res = await fetch("https://api.codingthailand.com/api/category");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function TanstackPage() {
  // isLoading: กำลังโหลดครั้งแรก
  // isError: เกิดข้อผิดพลาด
  // data: ข้อมูลที่ดึงมาได้
  const { data, isLoading, isError, error } = useQuery<Category[]>({
    queryKey: ["categories"], // Key สำหรับอ้างอิง Cache (สำคัญมาก!)
    queryFn: getData, // ฟังก์ชัน fetch ข้อมูล
  });

  if (isLoading) return <div>กำลังโหลดข้อมูล...</div>;
  if (isError) return <div>เกิดข้อผิดพลาด: {error.message}</div>;

  return (
    <div>
      <h1>รายการหมวดหมู่</h1>
      <ul>
        {data &&
          data.map((category) => <li key={category.id}>{category.name}</li>)}
      </ul>
    </div>
  );
}
