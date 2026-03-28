import toast from "react-hot-toast";
import { getBrands } from "./apiCalls";
export async function GetBrands(params) {
    try {
        const response = await getBrands(params);
        return response.data.data;
    } catch (error) {
        toast.error("حدث خطأ أثناء محاولة التحميل . يرجى المحاولة مرة أخرى");
        return null;
    }
}
