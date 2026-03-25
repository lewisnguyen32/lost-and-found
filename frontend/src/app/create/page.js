"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    type: "lost",
    title: "",
    description: "",
    category: "",
    location: "",
    eventTime: "",
    imageUrl: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/posts");
    } else {
      alert("Đăng bài thất bại");
    }
  };

  return (
    <main className="overflow-hidden px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-blue-700">Tạo bài đăng</h1>
        <p className="mt-2 text-gray-600">
          Điền thông tin bên dưới để đăng bài đồ thất lạc hoặc đồ nhặt được.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          <span className="text-red-500">*</span> là thông tin bắt buộc
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Loại bài đăng <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              required
            >
              <option value="lost">Đồ thất lạc</option>
              <option value="found">Đồ nhặt được</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tên đồ vật <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Danh mục <span className="text-red-500">*</span>
            </label>
            <input
              name="category"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Địa điểm <span className="text-red-500">*</span>
            </label>
            <input
              name="location"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Thời gian <span className="text-red-500">*</span>
            </label>
            <input
              name="eventTime"
              type="datetime-local"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              min="2024-01-01T00:00"
              max="2999-12-31T23:59"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Link hình ảnh
            </label>
            <input
              name="imageUrl"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tên người liên hệ <span className="text-red-500">*</span>
            </label>
            <input
              name="contactName"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              name="contactPhone"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="contactEmail"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Mô tả chi tiết <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none placeholder:text-gray-500 focus:border-blue-500"
              rows={5}
              required
            />
          </div>

          <button className="rounded-xl bg-blue-700 px-5 py-3 font-medium text-white">
            Đăng bài
          </button>
        </form>
      </div>
    </main>
  );
}