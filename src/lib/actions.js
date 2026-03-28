import toast from "react-hot-toast";
import {
    addBrands,
    deleteBrands,
    login,
    updateBrands,
    addModels,
    deleteModels,
    updateModels,
    deleteOffers,
    addOffers,
    deleteStores,
    addStores,
    updateStores,
    deleteProducts,
    updateOffers,
    delelteRoles,
    addRoles,
    updateRoles,
    deleteServices,
    addServices,
    updateServices,
    deleteEmployees,
    addEmployees,
    updateEmployees,
    deleteOrders,
    addOrders,
    updateOrders,
    addProducts,
    updateProducts,
    updatePermissions,
    refresh
} from "./apiCalls";

export async function LoginForm(formdata, navigate) {
    try {
        const response = await login(formdata, navigate);

        if (response.status === 200) {
            toast.success("تم تسجيل الدخول بنجاح");
            localStorage.setItem("user", response.data.data.token);
            localStorage.setItem(
                "permissions",
                JSON.stringify(
                    response.data.data.permissions.map((e) => e.guard_name)
                )
            );
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    userName: response.data.data.user.name,
                    userId: response.data.data.user.id,
                    type: response.data.data.user.type,
                    role_id: response.data.data.user.role_id
                })
            );
            if (
                response.data.data.permissions.filter(
                    (e) => e.guard_name == "dashboard.access"
                )
            ) {
                navigate("/");
            } else {
                navigate("/brands");
            }
            return response;
        } else {
            toast.error("حدث خطأ أثناء تسجيل الدخول");
            return null;
        }
    } catch (error) {
        toast.error(
            "حدث خطأ أثناء محاولة تسجيل الدخول. يرجى المحاولة مرة أخرى"
        );
        return null;
    }
}
