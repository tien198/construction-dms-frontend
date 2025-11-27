export async function loader() {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "/construction");
    return await res.json();
  } catch {
    alert("Lỗi tải dữ liệu công trình");
    return [];
  }
}
