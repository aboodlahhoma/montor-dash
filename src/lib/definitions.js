import {
    FaBars,
    FaCar,
    FaCarSide,
    FaChevronDown,
    FaCartPlus,
    FaCube,
    FaCubes,
    FaHome,
    FaPlusCircle,
    FaPlusSquare,
    FaStore,
    FaTag,
    FaTags,
    FaTimes,
    FaTools,
    FaTrademark,
    FaUserCog,
    FaUserPlus,
    FaUsers,
    FaUserShield,
    FaUserTie,
    FaWarehouse,
    FaWrench
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const brandsColumns = [
    { header: "الصورة", key: "logo" },
    { header: "المعرف", key: "id" },
    { header: "الاسم", key: "name" }
];
const modelsColumns = [
    { header: "المعرف", key: "id" },
    { header: "الاسم", key: "name" },
    { header: "معرف الماركة", key: "brand_id" },
    { header: "اسم الماركة", key: "brand_name" }
];
const offersColumns = [
    { header: "المعرف", key: "id" },
    { header: "معرف المنتج", key: "productId" },
    { header: "الصورة", key: "main_photo" },
    { header: "الاسم", key: "name" },
    { header: "السعر الجديد", key: "price" },
    { header: "السعر القديم", key: "old_price" },
    { header: " من الوقت", key: "start_time" },
    { header: "إلى الوقت", key: "end_time" }
];
const storesColumns = [
    { header: "المعرف", key: "id" },
    { header: "الصورة", key: "photo" },
    { header: "الاسم", key: "name" },
    { header: "العنوان", key: "address" },
    { header: "عدد المنتجات", key: "count_products" },
    { header: " للبيع", key: "buying" },
    { header: "للايجار", key: "rent" }
];
const productsColumns = [
    { header: "المعرف", key: "id" },
    { header: "الصورة", key: "main_photo" },
    { header: "الاسم", key: "name" },
    { header: "السعر الجديد", key: "price" },
    { header: "السعر القديم", key: "old_price" },
    { header: "عرض", key: "offer" },
    { header: "الكيلومتراج", key: "mileage" },
    { header: "سنة الصنع", key: "year_of_construction" },
    { header: "الغيار", key: "gears" },
    { header: "النوع", key: "type" }
];
const productsRentColumns = [
    { header: "المعرف", key: "id" },
    { header: "الصورة", key: "main_photo" },
    { header: "الاسم", key: "name" },
    { header: "السعر اليومي", key: "dailyPrice" },
    { header: "السعر الاسبوعي", key: "weeklyPrice" },
    { header: "السعر الشهري", key: "monthlyPrice" },
    { header: "سنة الصنع", key: "year_of_construction" },
    { header: "الغيار", key: "gears" }
];
const productsUserColumns = [
    { header: "المعرف", key: "id" },
    { header: "الصورة", key: "main_photo" },
    { header: "الاسم", key: "name" },
    { header: "السعر الجديد", key: "price" },
    { header: "السعر القديم", key: "old_price" },
    { header: "الكيلومتراج", key: "mileage" },
    { header: "سنة الصنع", key: "year_of_construction" },
    { header: "الغيار", key: "gears" },
    { header: "النوع", key: "type" },
    { header: "المعرض", key: "store_name" }
];
const storesType = [
    { id: "gallery", name: "معرض" },
    { id: "office", name: "مكتب" }
];

const availableStores = [
    { id: "0", name: "غير فعال" },
    { id: "1", name: "فعال" }
];
const rolesColumns = [
    { header: "المعرف", key: "id" },
    { header: "الاسم", key: "name" }
];
const servicesColumns = [
    { header: "المعرف", key: "id" },
    { header: "اسم الخدمة", key: "name" },
    { header: "شرح الخدمة", key: "description" },
    { header: " معرف فئة الخدمة", key: "category_id" },
    { header: " فئة الخدمة", key: "category" },
    { header: "التفعيل", key: "active" }
];
const ordersColumns = [
    { header: "المعرف", key: "id" },
    { header: "اسم الخدمة ", key: "service_name" },
    { header: "معرف المعرض ", key: "store_id" },
    { header: " اسم المعرض ", key: "store_name" },
    { header: "  السعر ", key: "price" },
    { header: "  عدد الأيام ", key: "count_days" },
    { header: "  من الوقت  ", key: "start_time" },
    { header: "  إلى الوقت  ", key: "end_time" }
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => ({
    id: currentYear - i,
    name: currentYear - i
}));

const drive_type = [
    { id: "front", name: "أمامي" },
    { id: "rear", name: "خلفي" },
    { id: "4x4", name: "رباعي" }
];

const fuel_type = [
    { id: "petrol", name: "بانزين" },
    { id: "diesel", name: "مازوت" },
    { id: "hybrid", name: "هجين" },
    { id: "electric", name: "كهرباء" }
];

const gears = [
    { id: "manual", name: "غيار عادي" },
    { id: "automatic", name: "غيار أوتوماتيك" }
];

const type = [
    { id: "used", name: "مستعمل" },
    { id: "new", name: "جديد" }
];

const seat_type = [
    { id: "leather", name: "جلد" },
    { id: "cloth", name: "قماش" }
];

const cylinders = [
    { id: 3, name: "3 سلندر" },
    { id: 4, name: "4 سلندر" },
    { id: 5, name: "5 سلندر" },
    { id: 6, name: "6 سلندر" },
    { id: 8, name: "8 سلندر" },
    { id: 1, name: "10 سلندر" },
    { id: 12, name: "12 سلندر" },
    { id: 16, name: "16 سلندر" }
];

const bodyType = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "SUV" },
    { id: 3, name: "Truck" },
    { id: 4, name: "Coupe" },
    { id: 5, name: "Convertible" },
    { id: 6, name: "Station" },
    { id: 7, name: "HatchBack" },
    { id: 8, name: "Van" }
];
const rentAvailable = [
    { id: 1, name: "متاحة" },
    { id: 0, name: "غير متاحة" }
];

const employeesColumns = [
    { header: "المعرف", key: "id" },
    { header: "الإسم ", key: "name" },
    { header: "الإيميل ", key: "email" },
    { header: "معرف الوظيفة", key: "role_id" },
    { header: " دور الموظف", key: "role_name" }
];

const navigationItems = [
    {
        icon: <FaHome />,
        permissions: "dashboard.access",
        text: "الداشبورد",
        to: "/"
    },
    {
        icon: <FaTrademark />,
        permissions: "brands.view",
        text: "الماركات التجارية",
        subItems: [
            {
                icon: <FaTags />,
                text: "الماركات",
                to: "/brands",
                permissions: "brands.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة علامة",
                to: "/addBrands",
                permissions: "brands.create"
            }
        ]
    },
    {
        icon: <FaCubes />,
        permissions: "models.view",
        text: "الموديلات",
        subItems: [
            {
                icon: <FaCube />,
                text: "الموديلات",
                to: "/models",
                permissions: "models.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة موديل",
                to: "/addModels",
                permissions: "models.create"
            }
        ]
    },
    {
        icon: <FaStore />,
        permissions: "stores.view",
        text: "المعارض",
        subItems: [
            {
                icon: <FaWarehouse />,
                text: "المعارض",
                to: "/stores",
                permissions: "stores.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة معرض",
                to: "/addstores",
                permissions: "stores.create"
            }
        ]
    },
    {
        icon: <FaTools />,
        permissions: "services.view",
        text: "الخدمات",
        subItems: [
            {
                icon: <FaWrench />,
                text: "الخدمات",
                to: "/services",
                permissions: "services.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة خدمة",
                to: "/addServices",
                permissions: "services.create"
            }
        ]
    },
    {
        icon: <FaUserShield />,
        permissions: "roles.view",
        text: "الأدوار",
        subItems: [
            {
                icon: <FaUserCog />,
                text: "الأدوار",
                to: "/roles",
                permissions: "roles.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة دور",
                to: "/addRoles",
                permissions: "roles.create"
            }
        ]
    },
    {
        icon: <FaUsers />,
        permissions: "employees.view",
        text: "الموظفين",
        subItems: [
            {
                icon: <FaUserTie />,
                text: "الموظفين",
                to: "/employees",
                permissions: "employees.view"
            },
            {
                icon: <FaUserPlus />,
                text: "إضافة موظف",
                to: "/addEmployee",
                permissions: "empolyees.create"
            }
        ]
    },
    {
        icon: <FaCarSide />,
        permissions: "dashboard.access",
        text: "السيارات",
        subItems: [
            {
                icon: <FaCar />,
                text: " سيارات من المستخدمين",
                to: "/user-products",
                permissions: "products.view"
            },
            {
                icon: <FaCar />,
                text: " سيارات للأجار ",
                to: "/Rentproducts",
                permissions: "rent.view"
            },
            {
                icon: <FaCar />,
                text: " سيارات للبيع",
                to: "/products",
                permissions: "products.view"
            },
            {
                icon: <FaPlusSquare />,
                text: "إضافة سيارة للبيع",
                to: "/addproducts",
                permissions: "products.create"
            },
            {
                icon: <FaPlusSquare />,
                text: "إضافة سيارة للأجار",
                to: "/addRentProducts",
                permissions: "rent.create"
            }
        ]
    },
    {
        icon: <FaTags />,
        permissions: "offers.view",
        text: "العروض",
        subItems: [
            {
                icon: <FaTag />,
                text: "العروض",
                to: "/offers",
                permissions: "offers.view"
            },
            {
                icon: <FaPlusCircle />,
                text: "إضافة عرض",
                to: "/addOffers",
                permissions: "offers.create"
            }
        ]
    },
    {
        icon: <FaCartShopping />,
        permissions: "orders.view",
        text: "الطلبيات",
        subItems: [
            {
                icon: <FaCartShopping />,
                text: "الطلبيات",
                to: "/orders",
                permissions: "orders.view"
            },
            {
                icon: <FaCartPlus />,
                text: "إضافة طلبية",
                to: "/addOrders",
                permissions: "orders.create"
            }
        ]
    }
];

export {
    brandsColumns,
    modelsColumns,
    productsUserColumns,
    availableStores,
    rentAvailable,
    offersColumns,
    productsRentColumns,
    ordersColumns,
    storesColumns,
    productsColumns,
    rolesColumns,
    servicesColumns,
    employeesColumns,
    navigationItems,
    storesType,
    yearOptions,
    drive_type,
    fuel_type,
    gears,
    type,
    seat_type,
    cylinders,
    bodyType
};
